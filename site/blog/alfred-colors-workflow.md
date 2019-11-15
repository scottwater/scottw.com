---
title: Colors via Alfred
date: 2019-11-15
tags:
  - blog
source_url: http://www.packal.org/workflow/colors
image: /assets/images/posts/alfred_colors.png
---
I saw a mention by @adamwathan about an [Alfred](https://www.alfredapp.com/) workflow for working with colors. After a little digging, I was lead to @tylereich's [Alfred Color Workflow](http://www.packal.org/workflow/colors).

It works with both CSS colors (Hex, RGB, HSL, Named Colors) and NSColor (although I only tried CSS).

Setting it up takes a couple of steps, but this has more to do with the OS X security model than Alfred or the developer's work.

1. Download the Workflow
2. Open in and add it to Alfred
3. Type a Hex color, named color (c blue), etc.

At this point, OS X is going to tell you it cannot verify the developer. To move forward, go to System Preferences → Security and Privacy → Allow Colors.

Once this is complete, try step #3 above again. You will again get a warning about an Alfred helper. Approve this one and you are good to go.
