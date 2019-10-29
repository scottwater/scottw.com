---
title: The Setup
date: '2018-10-30T19:27:00-04:00'
tags:
- blog
- article
---

What would a new blog be without discussing the setup?

I have a lot of experience when it comes to blogging software. I have personally built/contributed to at least 4 (.Text, Community Server, Graffiti, and Ameba). There have also been other 'ideas' that never made it anywhere.

Besides that, I have tried quite a few others, most recently being Wordpress. Wordpress is something you either love or hate. I know at the end of the day the goal is to get words on the screen, but for me, I find it very draining to use.

I flirted for a couple of seconds with [Gatsby](https://www.gatsbyjs.org/), but honestly didn't get it. Then spent a couple of days with [Hugo](https://gohugo.io/), but ultimately came back to Jekyll. It is battle tested, has been around forever (in internet years), and I have a lot comfortably with it.

## Hosting
This is where it gets interesting. I have been wanting use [Netlify](https://www.netlify.com) and this seemed like the perfect chance. Netlify is a super interesting service and it really feels like they give away too much for free.

## Theme
For the theme, I didn't want to start from scratch, but I wanted something really simple. After a few false starts, downloaded [Type](https://github.com/aspirethemes/type.git) and then really did my best to simplify it.

* Remove almost all of the JavaScript
* Removed everything related to Disqus
* Removed CSS I would never use
* Converted the grid to a CSS Grid (this alone cut out a lot of CSS complexity...although likely not necessary for a single column site).

If you are curious, I left the commit history in place between [my fork](https://github.com/scottwater/blog) and the original Type theme.

**UPDATE** I am now using a semi-custom theme built on Tailwind. On the odd chance,  you want to still see and/or use the Type theme, here is a [tag of the last commit](https://github.com/scottwater/blog/releases/tag/end_of_type_theme).

## Also Considered

* [Svbtle](https://svbtle.com/) - actually signed up for a little while. Felt like a great tool for longer writing. Has a good community with a good price. I am hoping to use this site for some shorter content as well and this felt out of place there.
* [Ghost](https://ghost.org/) - looks interesting, but I didn't want to use a managed host for it and felt like way too much JavaScript to host on my own. :)
