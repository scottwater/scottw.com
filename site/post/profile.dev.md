---
title: How to Make Rails and Webpacker Feel Faster
date: 2020-04-13T19:24:00.716Z
og_image: "/assets/images/posts/undraw/fast.png"
og_image_alt: "View code changes faster"
keywords: rails, webpacker, webpack, stimulus
description: How to speed up Stimulus.js development in Ruby on Rails
---

I have been enjoying using [Webpacker](https://github.com/rails/webpacker) (Rails gem for working with Webpack) with [Stimulus](https://stimulusjs.org/). However, it can be frustrating waiting for an extra couple of seconds between page refreshes to see your Stimulus changes.

Webpacker is the Rails wrapper around Webpack. For the most part, once setup up, it just works (the Rails Way!). You start your local Rails server, visit a page, and all of your assets are properly `packed`.

However, this also means there can be a noticeable lag after you make changes because your assets are not `re-packed` until you request them.

Thankfully, Webpacker ships with an optional server `webpack-dev-server` you can run, which will watch for asset changes and `re-pack` them so they are usually ready before you can even refresh the page.

The downside is you need to remember to start the second server.

However, while perusing the excellent [Rails JumpStart](https://github.com/excid3/jumpstart) template, I noticed a neat trick to use a custom Procfile (`Procfile.dev`) and have Foreman start both the regular rails server as well as the `webpack-dev-server`. Even better, you can throw in your background job server of choice, and now you have everything running with one simple command:

```
web: bundle exec rails server
pack: bin/webpack-dev-server
worker: bundle exec sidekiq
```

Then you can start via formeman: `foreman start -f Procfile.dev`
