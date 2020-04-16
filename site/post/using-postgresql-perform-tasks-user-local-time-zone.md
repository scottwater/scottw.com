---
title: Using Postgresql To Perform Tasks In A User's Local Time Zone
date: "2019-01-17T09:30:25-05:00"
image_credit: Luis Cortes via UnSplash
image: "/assets/images/posts/timezones.jpg"
---

One of the benefits of side projects is giving yourself a chance to see new solutions to problems you have already tackled.

For nearly seven years, [KickoffLabs](https://kickofflabs.com) has had the option to send weekly or daily emails about the previous days progress to our customers. To try and keep it relevant we have always done our best to send it around 8 am local time.

To accomplish this, we grab the users timezone when they sign up and then have a cron job set up to execute every hour.

My implementation written nearly seven years ago worked something like this:

1. Get a distinct list of known timezones for our customers
2. Loop through them and see where the hour is current 8
3. Find users within those timezones

Looking at the live code, I can see I 95% of it was written in September of 2011 (and the only real changes were wiring up the excellent DeadManSnitch service to ensure they are getting sent)

For [IndieTriage](https://indietriage.com), I wanted to have the same time zone aware emails, but with an additional twist. I want the users to (eventually) be able to pick the hour they wanted to receive the email. Maybe they have time early in the day, or maybe it makes sense to get this email over lunch.

My previous approach breaks down with the last requirement because now all of the timezones could be valid. I would have to iterate over each subscriber instance or at a minimum over all of the hours (and generate a list of valid time zones).

It's 2019. We can do better.

ORM's like ActiveRecord make the 99% cases of tedious crud work go away. Unfortunately, they also obscure some of the awesome built-in database functionality.

What we can do instead is write some SQL using Postgresql's `In Time Zone` function and pair with the date_part function.

We end up with a query that looks like of like this:

```sql
select subscribers.id from subscribers
where date_part('hour', (now() AT TIME ZONE subscribers.time_zone)) = subscribers.hour;
```

Then, we can create a scope like this (assumes columns named time_zone and hour)

```ruby
scope :current_hour_by_time_zone, -> {
  where(Arel.sql("date_part('hour', now() AT TIME ZONE #{table_name}.time_zone) = #{table_name}.hour"))
}
```

Finally, we can put it all together in a cron Sidekiq worker:

```ruby
class EnqueueDailyEmailsForSubscribersWorker
  include Sidekiq::Worker

  def perform
    Subscriber.
      select(:id).
      current_hour_by_time_zone.
      confirmed.
      last_emailed(22.hours.ago).
      find_in_batches(batch_size: 1000) do |subscribers|

      Sidekiq::Client.push_bulk(
        "class" => "SendDailyEmailToSubscriberWorker",
        "args" => subscribers.pluck(:id).map {|id| [id]}
      )
    end
  end
end
```

This worker executes hourly. Each time, it will grab a list of subscribers who meet the necessary conditions, including the proper hour in their timezone.
