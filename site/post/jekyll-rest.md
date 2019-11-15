---
title: "Introducing Jekyll Rest"
date: 2019-03-11
image: /assets/images/posts/undraw/undraw_blog_post.png
---

Executive Summary - [Jekyll Rest][1] allows you to publish to a Jekyll based site which uses Github as a repository.

<!--more-->

One of the things I like about the Jekyll + Github + Netlify combination is there is nothing to manage. No backups. No (major) concerns with hosting. Ultimately, nothing to do but write[^1]. This is actual serverless IMO.

The trade-off is a slower publishing flow and usually being tied to a computer with Git access. Most of the time this is not as big of an issue as it would seem (how many of you blog more than once a week). However, I am continuing to try and flush out my “shorts” concept and always needing to be at a computer with Git access was slowing me down.

I had initially hoped I could leverage Zapier and avoid writing any code. Unfortunately, Zapier[^2] only got me about 50% there. Zapier is willing and able to receive a post from me from just about any tool (web, email, and even SMS), but I could not figure out how to correctly format my content to make it work with the Github V3 rest API[^3].

The more I play with Zapier, the more convinced I am I could make it work, but I soon realized that sending in posts from various devices require a bit more finessing of the data. This ultimately made writing it in Ruby even more appealing.

In the end, I built something I am calling Jekyll Rest. It is a single endpoint you host on your own in a matter of seconds on Heroku.

It has just one endpoint, `create`. This endpoint was written to be as flexible as possible. You can specify all of the individual parameters (title, date, body, etc.) or you can send it a block of frontmatter. It will do its best to decipher what you meant, even extracting a title from your content if necessary. The rules for this are defined on the [GitHub readme][2].

With this endpoint, you can do a couple of things:

1. You can add it Zapier. This enables you to compose blog posts via email or SMS.
2. Automate your workflow.

I have done both. I have it set up now so that I quickly email and txt new short posts. I also built a simple UI that helps me share various things I find interesting.

[1]: https://github.com/scottwater/jekyll_rest
[2]: https://github.com/scottwater/jekyll_rest/blob/master/README.md

[^1]: I will someday how I can see blogging as just writing
[^2]: Zapier is amazing.
[^3]: The biggest issue was base64 encoding the content
