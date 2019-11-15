---
title: "TIL:  rel=noopener"
date: "2018-11-19T04:34:20-05:00"
---

I was curious to see what Lighthouse thought of my new blog.

![Initial Lighthouse Score. Perfect, except the best practices section.](/assets/images/posts/noopener/lighthouse_1.png)

With almost no JavaScript, minimal CSS, and few images, I was expecting a good score.

Everything was perfect except for best practices which was a 93. Not the end of the world, but I was curious.

The message under best practices was:

> Links to cross-origin destinations are unsafe
> Add `rel="noopener"` or `rel="noreferrer"` to any external links to improve performance and prevent security vulnerabilities

At first, I read this as linking to external sites was unsafe. 😁 Clicking the [ learn more](https://developers.google.com/web/tools/lighthouse/audits/noopener) link explained what was going on:

> When your page links to another page using `target="_blank"`, the new page runs on the same process as your page. If the new page is executing expensive JavaScript, your page's performance may also suffer.

And:

> On top of this, `target="_blank"` is also a security vulnerability. The new page has access to your window object via window.opener, and it can navigate your page to a different URL using window.opener.location = newURL.

Ah, so it was the `target='_blank'` I had applied to the social links at the bottom of each page...and WTF, it has access to the process and window.

Google's recommended fix was to use `rel="noopener"`. However, `target="blank"` is very unnecessary and quite frankly, rude[^1]. The better fix is to simply remove them all together.

![Updated Lighthouse Score. Perfect across the board.](/assets/images/posts/noopener/lighthouse_2.png)

[^1]: If your visitors want something to open in a tab/window, they can do it on their own. Do not pollute their brower space with your tabs.
