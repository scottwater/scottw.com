---
title: Revisiting The SaaS Behind My SaaS
date: '2019-01-15T05:20:40-05:00'
tags:
- blog
- article
permalink: blog/revisiting-saas-behind-my-saas/index.html
---

Back in 2014, I wrote a post called [33 Amazing SaaS tools that Power KickoffLabs ][1][^1]. Since it is [not a good idea to litter your company blog with posts about the internals of the company][2], I thought I would do a recap here.

First, looking at the previous 33, we still use a vast majority of them. SaaS is the gift that keeps on giving.

Those we no longer use:

* RedisToGo - Heroku added Redis directly, and it has proven to be much more reliable. I have some issues with Heroku's version and will likely experiment with Redis Labs in the future.
* Skype - Slack video isn't perfect, but better and more convenient than Skype. We do flirt with using Zoom.us, but it still lacks the convenience of Slack.
* Trunks App - No longer exists.
* KissMetrics - I was delighted to move on. Most apps of our size don't need this level of analytics and the work it requires to get value
* Ad Words/Perfect Audience - we occasionally try a few things, but we live and die on word of mouth (and some FB ads which haven't worked very well yet)
* UserVoice - Pricing and experience took a nose dive if I remember correctly. See HelpScout below.
* Visual Web Optimizer - Looking at our credit card charges for the year, I can see a charge or two, but we do not use it nearly as much.
* Drip - technically, as I write this we are still using it. Drip evolved quite a bit over the last five years. It used to be a clean and straightforward alternative to MailChimp (and others) and is now focused on email automation[^2] and e-commerce. They also recently announced a significant price increase. Long story short, we are no longer a great fit for each other, which is entirely OK.

OK, now on to what we are currently using.

### Heroku

Next to salary, still by far our most significant expense. I have some particular gripes about Heroku, but before I list them, I want to be super clear that **I love the platform and think it is the way every small startup should launch**. Focus on your business and not your machines/cloud/etc.

Here are some things I wished Heroku did better:

1. Sometimes the gaps in pricing tiers are wonky. For example, on Redis, the Premium 5 plan (1 GB of memory) is $200. The Premium 7 (7 GB of memory) is $750. There is no Premium 6. Sometimes they do not list all the options (PG as an example), but in this case, six does not exist. We use Redis for two key areas (Sidekiq and contest rank). The latter is growing and will eventually force us out of Premium 7, but there is no 8!  Redis Labs looks like a good alternative and has some good multi-zone availability options.
2. Dyno Sizes - probably the most consistent Heroku complaint. I dream of a world where I can control the amount of memory and compute. In the meantime, I would love to see a good 2 GB option in the $75 to $100 range. Performance-M adds both memory and a lot of unnecessary compute. Yes, yes, I know, Ruby and memory....suck it, I love my Ruby.
3. Multi-Region - I thought Heroku would have had baked in multi-region support by now. You can run your apps in the US or Europe, but not both easily without setting up an external load balancer and some other hacks.

Again, these are the extremes. My biggest issue in 2014 was support which has improved immensely. I even had an account rep tell me not to pay for upgraded support because they would answer my questions anyway. :)

### Braintree

Rock solid and the Stripe competition has been excellent. I am sometimes jealous of the Stripe UI options and simple popups. But apart from a total collapse, I do not know what would justify the risk and work of switching.

### Sidekiq

Not really SaaS[^3], but it is something we pay for. Besides Rails itself, by far the most indispensable gem/code we depend on. One of the ways we have been able to scale and keep costs in control is by pushing everything in the background. We try to keep the jobs as simple and predictable as possible.

### Fly.io

We use Fly to manage all of the SSL on our customer pages[^4]. Heroku did finally add native free SSL support, but it is limited to 100 domains per app which means it will not work for us without significant headaches and complication. We have only been with Fly for a month or so, but support has been great, and they helped us out when our backs were against the all.

I am looking forward to layering in some more of their functionality (caching) in the next couple of months.

### Dead Man's Snitch

We have quite a few moving parts and a small company. Watching our infrastructure is no one's job. Dead Man's Snitch lets us know when we get behind in our job queue or something scheduled does not happen when it was expected. Super cheap and highly recommended.

### HelpScout

Great support product. Has been solid and keeps improving. Only issue is after about five years I still cannot see my custom customer data in the mobile app.

### Elastic.co

We have two primary uses for Elastic Search. The obvious one is well, search for our leads. The second is all of our analytics (web, conversion rates, etc.). I know many use it for logs/etc., but I was shocked at how fast it handled just about everything I threw at it.

As for the service, it is very reliable, but I am not in love with the company. Priority support cost an arm and a leg, the pricing on it isn't super transparent, and they do odd stuff like try to force you into year-long contracts when your usage exceeds some memory limits.

Still, stability matters and they have been solid and did lower prices at one point.

### Postmark

Still my favorite way to send emails. If you need something to show up in someone's inbox and it is transactional, there is no better option.

### Sendgrid

They have been a great provider, and we still send 60%+ of our customer email through them. Great API and feature set. Very helpful support. Much more lenient that Postmark on the types of emails you can send

### SES

Similar to Google, I am increasingly skeptical of feeding the Amazon beast, but we started routing about 40% of our email through them (I like having options!) and it has been flawless. A fraction of the price of everyone else.

### Github

I heard a rumor there is another option for Git. They have been rock solid, and the price is very reasonable.

### MaxCDN

Technically, they are now part of StackPath. We use them for all of our widgets. The API is best I have used for CDNs. Purge is near instant, and their pricing is excellent. At some point this year, I am hoping to standardize everything on StackPath.

### Cloud Front

Works well and the ability to purge the cache has improved over the years. You can now do custom domains and SSL for free. The biggest issue here is someone hotlinks a file, and the costs can bite you.

### Litmus

[HTML email is still a crap show](https://scottw.com/html-emails), but Litmus makes it work.[^5]

### Bugsnag

They have yet to fail us and provide very actionable details everytime we screw something up. HoneyBadger would be my next choice, but there just has not been a reason to switch yet.

### NewRelic

I am convinced at times everyone runs NewRelic and assumes everyone else understands it. :) 7 years in and I still struggle in it at times. However, once you figure things out, the insights are great. ScoutApp is on my todo list to see if it can make things quicker for us to diagnose and improve.

### Pingdom

I would be OK in a post-Pingdom world. Nothing wrong with it, but I do not enjoy using it. It also does not validate SSL certs which is extremely important in Google forced certificate world. I signed up for a year account at UpTimeRobot to make some comparisons. UTR doesn't have a real PagerDuty story yet, so I am not sure I can go 100% (but they do have native SMS and phone calls. I will report back the next year (or five :))

### Papertrail

Love me my logs and similar to Heroku, they do some weird pricing ranges. Having said that, as we have gotten better at logging key data, we use it more and more.

### Trello

I honestly do not check Trello often, but it still works. Might experiment with Notion for the company in the new year.

### Dropbox

It is still there, but I don't use it very much. Everything important lives in Github or Google Docs.

### Heap

Experimenting with this to gain more insights into what customers are using and the paths they take. The setup is much more straightforward than KissMetrics ever was. I see us using it for a couple of months and then shutting it off.

### Xero

Made it easy to write this post. :) Great solution for watching all of your business money.

### Gusto

Josh does the work here, but I have not heard him complain. I get paid on time. :)

### Memcachier

Only one hiccup that I can remember in 5 years or so. If I switch it is because I want to standardize on Redis (and a much better API)

### Clearbit

Great data. We are on the legacy[^6] pricing. No way we could pay current rates for how we use it, but I am grateful they did the right thing and left our account as is. If you make high touch sales (and high margins), the data could be helpful.

### Browserstack

I have not had to touch a windows VM since we signed up. We are never leaving them.

### Upwork

We probably should do more here, but generally, use it for support help.

### Droplr

An OK way to share screenshots, but not great. Apple's built-in tools have significantly improved. Not sure we need Droplr long term.

### Pager Duty

They call me when we screw up. Is there an alternative?

### Grasshopper

We have a phone number like a big company. Works great and I love the ability to make phone calls from my mobile device without sharing my number.

### Stathat

Such a great little stats service for $99 a month. I don't think it gets much active development, but a couple of tweaks and I would pay so much more.

### Slack

With roughly 3.5 employees Slack isn't critical for us nor is it overly distracting. If video worked better (especially on MBP's without dedicated video cards), I would be much happier with it.

### Forward

I had used Forward for tunneling since before it was called Forward. It has been solid and always works. $5 a month is a no-brainer.

### G-Suite/Google Analytics

Considering we don't pay for any of it, I cannot complain too much. It just works, and I can not remember a single real issue with it. However, I am skeptical of feeding the Google monster, and I have personally stopped using it entirely.

### WPEngine

I am not sure if they are the best or not anymore. I hate that support is chat based only. I also get offline notifications much more often than I would expect for $1,000 a year.  I am hoping to convince Josh to bite the bullet and go static + Netlify this year.

[1]:https://kickofflabs.com/blog/saas-behind-our-saas/
[2]:https://scottw.com/don-t-write-about-your-startup

[^1]:Amazing...must have read a blog post on bad post titles
[^2]:Email automation is a the emperor wears no clothes of the SaaS world.
[^3]:Sidekiq now has a monthly pricing option. I guess it is inching closer to the definition of SaaS.
[^4]:We had been using Backplane which went out of business at the end of 2018
[^5]:Found Email on Acid the other day. Going to check it out. I love the idea day passes.
[^6]:Trying the term legacy instead of grandfathered. [Grandfathered is a term that really needs to go away](https://scottw.com/grandfathered-pricing).
