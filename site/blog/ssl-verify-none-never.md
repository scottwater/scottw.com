---
title: SSL::VERIFY_NONE - NEVER!
date: '2019-02-07T15:29:31Z'
permalink: blog/s36/index.html
tags:
- blog
- short
---

I saw this little doozy as recommend code for (Ruby) API access:

`http.verify_mode = OpenSSL::SSL::VERIFY_NONE`

This effectively disables SSL checks and is not something anyone should be recommending....ever.
