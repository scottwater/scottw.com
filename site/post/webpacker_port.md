---
title: Multiple Instances of Webpacker
keywords: webpacker, rails, procfiles, yaml
og_image: "/assets/images/posts/undraw/hacker.png"
og_image_alt: "Just make it work for now"
date: 2020-04-30T15:53:40.756Z
---
I am a big fan of OS X of spaces and usually have quite a few instances of VSCode opened in various spaces.

One early headache with this approach was Rails starting on port 3000 by default. The fix for this was quite easy. Just add an ENV[^1] variable PORT=3002 (or whatever number you choose). The ENV is nice because it isolates the port number I picked from what I check in to git.

In my post, _[Making Rails and Webpacker Feel Faster](https://scottw.com/blog/profile.dev/)_, I wrote about how I was using a separate Procfiles to start Rails and Webpacker quickly.

My technique for starting Rails on something other than 3000 still worked! Unfortunately, I did run into a bit of snag. The webpacker server starts on port 3035, and there does not appear to be any way to configure this via an ENV variable or even via ERB on the YAML file. There are a couple of Github threads asking for changes/options, but so far, nothing has stuck.

The good news is you can certainly make it work by editing your `webpacker.yml` file:

```yaml
  dev_server:
    https: false
    host: localhost
    port: 3036
    public: localhost:3036
```
The downside is these changes get committed. Hopefully there will be a fix/update in the future, but for now this works quite well.

[^1]: Yes, I know you can pass -p, but then I have to remember to do that. :)
