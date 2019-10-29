---
title: Ruby - Who Called This Method?
date: '2019-02-26T17:26:26+00:00'
permalink: blog/s7h/index.html
tags:
- blog
- short
---

I wanted to add a header on all my PostMark emails. Instead of manually editing each method, I dropped this one-liner in.

`headers["X-PM-Tag"] = caller[0][/`.*'/][1..-2]`

Now, each email gets tagged with the current mailer method.
