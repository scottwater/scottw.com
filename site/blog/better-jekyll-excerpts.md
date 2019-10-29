---
title: Better Jekyll Excerpts
date: '2019-02-12T06:49:54-05:00'
tags:
- blog
- article
---

When you use the built-in excerpt feature, Jekyll returns the first paragraph of text. It does this by looking for something called the _excerpt_separator_. The excerpt_separator defaults to `\n\n`, which is ideal for most short posts.

<!--custom-->

Back in my LiveWriter days, it would use an HTML comment like `<!--more-->` to designate where to break for an excerpt. Jekyll supports this as well. In your \_config.yml file you can add:

```yaml
excerpt_separator: <!--more-->
```

Unfortunately, this now means that on every post, you need to enter `<!--more-->`, even if you are OK with the default of the first paragraph. The alternative is to add `excerpt_separator: <!--more-->` for each post you want to control the excerpt.

Adding the excerpt_separator when needed is slightly better, but still too manual for my tastes.

Instead, I wrote a small plugin you can drop in your \_plugins directory.

```ruby
Jekyll::Hooks.register :posts, :pre_render do |post|

  if post.data['excerpt_separator'].nil? && post.content =~ /^(<!--\s*more\s*-->)$/
    post.data["excerpt_separator"] = $1
    post.data['excerpt'] = Jekyll::Excerpt.new(post)
  end

end
```
For each post, when building, it looks to see if there is a `<!--more-->` in the body. If it is found it sets it as the excerpt_separator. Otherwise, it uses the default `\n\n`.
