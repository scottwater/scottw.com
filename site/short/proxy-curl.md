---
title: Proxy with Curl
date: "2019-03-07T20:54:07+00:00"
permalink: blog/s88/index.html
---

I was working on some reverse proxying today, and I could not for the life of me figure out which headers I needed to make it work.

I would go to the server, make a change, then go to the browser and refresh and so on and so on...

<!--more-->

Then it hit me; I was making this way to complicated. An easier solution was to use curl. Two minutes later, I was up and running.

```
curl --header 'Origin: domaintoproxy.com' https://proxydomain.com
```

Origin (and X-Forwarded-Host) are common, but different servers/apps have various requirements. Using curl like this makes it far faster to test out without having to reconfigure your server.
