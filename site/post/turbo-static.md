---
title: Turbolinks and Eleventy (and Static Sites)
date: "2020-01-13T11:23:43-04:00"
---

With Gatsby, I like the idea of using a React router to make transitioning from page to page as seamless (fast) as possible. However, I could not convince myself overhead, and the complexity of Gatsby was not worth the effort. In the end, I decided to use Eleventy.

Still, this got me thinking about alternative approaches. On my Rails apps, I use Turbolinks and decided to give it a shot on my blog (and my [Origin](https://github.com/scottwater/eleventy-origin "Get a nice Eleventy site up and running quickly") template).

Setting it up takes just a couple of seconds, and it has worked flawlessly. Assuming you can keep all of your scripts in your HTML Head (and they do not change from page to page), you should be able to do the same with minimal effort (on just about any static site generator).

On Eleventy side, I did need to make one adjustment on the development side for BrowserSync. BrowserSync injects its scripts out of the head which, causes a conflict navigating pages in development. The [fix is to add the following to your BrowserSync config](https://github.com/turbolinks/turbolinks/issues/147 "View the Github issue on this"):

```js
eleventyConfig.setBrowserSyncConfig({
  // scripts in body conflict with Turbolinks
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function(snippet, match) {
        return snippet + match;
      }
    }
  }
});
```

Once in place you can get quick and minimal page changes without the hassle of a massive framework.
