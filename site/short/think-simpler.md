---
title: Think Simpler
date: "2019-02-04T18:55:58-05:00"
no_headline_image: true
og_image: "/assets/images/posts/publish_static.png"
---

For my 'shorts' feature, I wanted to remove some of the friction publishing multiple times a day to a Jekyll blog.

My first thought was using the Github API. This involved getting a user token, understand the API, grabbing my content, using the API, etc.

<!--more-->

Then it hit me. The tool I was using to publish the post was local only at least for now. So instead of going through all the Github API hoopla, I just write to git.

![Publish to Git](/assets/images/posts/publish_static.png)

This version took all of 2 minutes to do (most of which was spent googling the -C flag).
