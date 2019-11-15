---
title: What Are Shorts? And Why You Should Use Them Too.
date: "2019-02-04T18:23:07-05:00"
---

There are few things lamer than blogging about blogging, but this is a subject I think is very important.

In my virtual circles, Twitter has killed blogging. I do not believe Twitter did it on purpose. Twitter is simple, and you can reach a lot of people quickly. And despite all the negative energy around Twitter, it still the place where I learn the most on a daily basis.

What concerns me about blogging's demise is how much information vanishes after a couple of minutes. You can like it, but good luck finding in the future.

What I am trying to do instead is something I am calling shorts. A short is a post that is either small enough to live inside a tweet or has enough formatting applied so that it can start as a tweet and can be followed on site if it piques your interest.

I even went as far as building a simple UI which posts to this (static!) blog:

![Shorts UI Demo](/assets/images/posts/shorts_ui.png)

If you are interested in the logic around the posts, you can see [my Jekyll hook here](https://github.com/scottwater/blog/blob/master/_plugins/short_feed_hook.rb). In a nutshell:

1. Figure out if there is an excerpt defined or not
2. Format the excerpt/content
3. If it is a link to another site, link to it directly otherwise link back to this site only if we need more than 280 characters.

I then push the posts to their [own feed](http://scottw.com/shortfeed.xml) and allow Zapier to deliver them to Twitter.

The other significant benefit of this approach is I will have a list of content that I find essential that lives outside of Twitter.

Long term, I would love to make this easy for everyone, but for now, I wanted to share how I am doing it and provide some tips and strategies for doing it yourself as well.
