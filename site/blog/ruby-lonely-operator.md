---
title: Ruby Lonely Operator
date: '2019-02-05T16:46:09Z'
permalink: blog/s30/index.html
tags:
- blog
- short
---

Ruby 2.3 introduced a feature called the "Lonely Operator" (which I somehow missed until recently). 

Instead of: 

`user && user.address && user.address.street` 

You can write it like this: 

`user&.address&.street`
