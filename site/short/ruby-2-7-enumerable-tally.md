---
title: Ruby 2.7  Enumerable#tally
date: "2019-02-10T14:29:06Z"
permalink: blog/s44/index.html
source_url: https://medium.com/@baweaver/ruby-2-7-enumerable-tally-a706a5fb11ea
---

I am looking forward to this. I often use code that looks like this:

`h = Hash.new(0)`

`items.each {|item| h[item] += 1}`

What makes this work is whatever you pass to Hash in the initializer is used as the default value.
