---
title: Active Support - Presence
date: "2018-12-13T10:12:31-05:00"
---

Active Support as a whole gets a bad wrap. Ruby is all about developer happiness and that is really what Active Support is all about.

> It offers a richer bottom-line at the language level, targeted both at the development of Rails applications, and at the development of Ruby on Rails itself.

One small extension I love is `presence`.

In short, it returns itself if .present? is true. Otherwise, it returns nil

```ruby
1.presence  # => 1
"Hello World".presence # => Hello World
"".presence # => nil
```

Unfortunately, I have seen much more usage of .present? directly.

For example:

```ruby
name = user.name.present? ? user.name : 'N.A.'
```

This would be much simpler with `presence`

```ruby
name = user.name.presence || 'N.A.'
```

If you are not familiar with Ruby, you may be asking why not just use `user.name || 'N.A.'` directly. The present? (and related blank?) extension will handle empty strings which in Ruby are evaluated as truthy.
