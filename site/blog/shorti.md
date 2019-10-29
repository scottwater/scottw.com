---
title: Shorti - An Open Source Rails URL Shortener
date: '2019-01-22T09:52:56-05:00'
tags:
- blog
- article
---

I [tweeted][4] a week or two ago about [Kent Dodd's][1]  a great [URL shortener][2] you can use via Netlify. It has worked well, and I highly recommend it if you want to manage your own shortened URLs.

However, for a couple of projects, I want the ability to see the number of clicks each URL receives. I did a few searches but did not see anything built in Ruby that was somewhat recent and met my goals.[^1] So built one called [Shorti][3]

Here is a [Shorti] overview:

1. It is 100% API only. No UI/UX was hurt during its' development.
2. It has just three endpoints:
    1. Great a new link
    2. Visit a link (redirect)
    3. Get info on the link
3. You create a link and are given pre-shortened URL in return
4. Any visits to the URL in step #3 increment a counter and redirect to the URL

That's about it — very standard stuff.

All of the [source code is available on Github][3].

Here is some of what was learned building Shorti:

1. I have a couple of API apps/projects I am thinking of building. Building Shorti was my first pass on an API only app. There is still a lot included in a rails API app that I would expect to be left out. It feels like Rails API apps are meant as a backend for a SPA. I tried to minimize what was bundled and loaded. I expect to spend some more time trying other options in the future.
2. I was initially going to build this in Sinatra and Sequel. My initial direction is always to optimize and simplify the code as a whole, but sometimes the best simplification is to be consistent and clear. Love it or hate it, as a Rails app, it should be approachable for many developers.
3. I also wanted to experiment with using a Heroku button. It was far simpler to set up than I expected, but also less flexible than I had hoped. I would love to be able to prompt the user to set a configuration variable or two, choose a specific add-on, or more. I see a future with less mega SaaS apps and more data control if we can find a way to install apps like this easier.
4. I initially started out trying to use Rails system specs for main test pass, but could not get them working correctly. I read a couple of forum threads recommending using Request specs, which is logically a better choice and certainly has less overhead.

I would love to hear if you find this app useful and use it in a project of your own.

[^1]: I am sure this post will ultimately prove me wrong.

[1]:https://twitter.com/kentcdodds
[2]:https://github.com/kentcdodds/netlify-shortener
[3]:https://github.com/scottwater/shorti
[4]:https://twitter.com/scottw/status/1080881356412997632
