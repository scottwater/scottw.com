---
title: Nunjucks Inline Ternary Operator
date: 2020-05-04T13:23:53.796Z
uuid: a88598df-4229-4016-883b-a3fa5316bfc6
image: /assets/images/posts/questionmark.jpg
image_credit: Emily Morter on Unsplash
---

On this site, I use the post URL as the ID for feeds[^1]. This is generally a good idea since urls should not change...except when they do.

Netlify makes it easy to put redirects in place to help ensure you do not break the internet. However, any person or service that uses my feed ends up seeing every recent post marked as a new post.

The long term fix is an easy one: use a real UUID for the ID[^2] field in the feeds.

```xml
{% raw %}
<id>{{ post.data.uuid}}</id>
{% endraw %}
```

This does not work for previous posts since they do not have a UUID. I could generate one for each, but that would cause the issue we originally started with (accidental new ids).

So we end up with something like this:

```xml
{% raw %}
{% if post.data.uuid %}
<id>{{ post.data.uuid}}</id>
{% else %}
<id>{{ absolutePostUrl}}</id>
{% endif %}
{% endraw %}
```

This works, and for the sake of time, I probably should have left it like that, but the if/else/end was bothering me. I figured Nunjucks must have an inline ternary operator. Drum roll.....here we go.

```xml
{% raw %}
<id>{{ post.data.uuid if post.data.uuid else absolutePostUrl }}</id>
{% endraw %}
```

I do not love the syntax. I naively tried `||` and `or` a couple of times before I checked the docs. I am sure there is a reason for it and it works. :)

[^1]: Yes, I know, nobody uses feeds anymore, but they are still handy for automation.
[^2]: Technically this does not fix the moving of posts issue. I am assuming the next time I move something all of the posts listed in my feeds will be new enough to have the UUID.
