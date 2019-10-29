---
title: 'News To Me: Netlify Edition'
date: '2019-01-11T05:22:29-05:00'
tags:
- blog
- article
---

Time for another round of *It's News To Me*. Today is the Netlify edition.

I continue to be impressed and amazed with Netlify. It reminds me of when I started to use rails (in 2011). I would find myself trying to hack something together without searching for an existing gem first. In the end, I would quickly realize I wasted time-solving a problem that already had a solution[^1].

* Netlify - Just putting this out there. It is NET-LI-FY and not NET-IFY. If I talked to you about this service before the new year, I very likely told you the wrong name.
* Snippet Injection - This is listed under *Post Processing* in your site's dashboard. It provides you an option to inject a script into document's head or body section. This is a nice way to keep your analytics/etc out of your local development environment as well as out of Git for public projects.
* Environment Variables - you guessed it, you can set environment variables. Under *Continuous Deployment*, there is an option to add one or more key/value pairs. I recently switched to using a theme based on this [Jekyll Tailwind starter kit](https://github.com/mhanberg/jekyll-tailwind-starter). To minimize and remove unwanted CSS I needed to tell Jekyll when it was built in production.

[^1]: Although in hindsight I did eventually learn that jumping to another gem causes problems on its own.
