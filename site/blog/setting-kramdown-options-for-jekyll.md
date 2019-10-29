---
title: 'TIL: Setting Kramdown Options for Jekyll'
tags:
- blog
- article
date: '2018-10-31T07:59:00-04:00'
---

[Kramdown](https://github.com/gettalong/kramdow) is the default (and preferred) markdown processor for Jekyll.

For footnotes[^1] it renders “↩” (U+21A9) which just doesn't look great on OS X[^2]. Thankfully you can configure Kramdown to use something else U+21A9 U+FE0E[^3].

Despite a [laundry list of support options](https://jekyllrb.com/docs/configuration/markdown/#kramdown) listed on the Jekyll site, there was not any details on how to set one of the configuration overrides. After a few guesses, I got it set up properly. Just add the following (and another other options you want) to your _config.yml file:

``` yml
markdown:  kramdown
kramdown:
  footnote_backlink: '&#x21A9;&#xFE0E;'
```

[^1]: This is an example
[^2]: Still looks horrible on FireFox
[^3]: Hat tip to [bdesham](https://github.com/bdesham) for the [proper character sequence](https://github.com/gettalong/kramdown/issues/247)
