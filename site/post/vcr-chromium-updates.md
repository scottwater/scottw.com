---
title: Vcr And Chromium Updates
date: "2019-09-16T08:54:05-04:00"
image: /assets/images/posts/vcr_chromium.png
---

I noticed today that VCR was reporting a request I was not expecting[^1].

In this project, I am using Chrome via the [webdrivers](https://github.com/titusfortner/webdrivers) gem. I did not dig too deeply, but it appears this is just a check to see if there is a new version available. I set this up a month or so again, so my guess is it was triggered by a change in the date.

I do not want this check happening in the tests. Nor do always need the latest version of Chromium. So I added this to my rails_helper:

```ruby
Webdrivers::Chromedriver.required_version = "76.0.3809.126"
```

In the future, if I run into any Chrome specific issues or need to test a newer browser feature, I can update then.

[^1]: If you are not familiar with VCR it caches requests in your tests. I have it configured to only allow pre-approved requests. This unapproved request will cause the related tests to fail.
