---
title: Limiting the Number of Posts in an Eleventy Collection
date: "2019-11-11T20:34:33.907Z"
---

I have been working on migrating my blog over to [Eleventy](https://www.11ty.io/) (hence the lack of posts recently).

As soon as I flipped the switch on the newish site, Zapier kindly notified me that way more data was being processed than before (279 posts).

First, wow, great feature by Zapier. I love they are protecting you from doing something silly (and one click continue if this was done on purpose).

Next, it was time to limit the number of posts in the feeds. I figured there would be a limit filter or query option, but as far as I could tell, one does not exist. Bummer. Then it dawned on me, everything in Eleventy is just JavaScript. With this in mind, a simple slice on a custom collection and we are in business:

```js
eleventyConfig.addCollection("feed", collection => {
  return collection
    .getFilteredByTag("blog")
    .reverse()
    .slice(0, 20);
});
```

Now, anytime I want the most recent 20 posts, I can just use the collection `feed`.
