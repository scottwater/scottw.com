---
title: Dependencies
date: "2018-11-27T04:40:57-05:00"
---

An [interesting overview][1] of compromised `event-stream` package.

> This package receives over 1.5mm weekly downloads and is depended on by nearly 1,600 other packages. The malicious user was able to gain the trust of the original author by making a series of meaningful contributions to the package.

As the post eludes too at the end, this is likely the just the begging on such attacks. They will also likely spread outside of the JavaScript community as well.

Mike Perham has a really good post, [Kill Your Dependencies][2]

> Every dependency in your application has the potential to bloat your app, to destabilize your app, to inject odd behavior via monkeypatching or buggy native code.

The dependency bloat has a nasty habit of catching you when you are not looking. At first, you are just trying to get something to work, so you add a gem. Then another and another...before long the cost of going back is likely too much to bear.

One approach I have been using much more recently is to grab the specific source I need out of a gem and to use it as a starting place for my own implementation. This is particularly handy on API wrappers. Many API wrappers package a laundry list of dependencies, they all seem to use different HTTP clients, and generally do far more than what you need to meet your goals.

[1]: https://medium.com/intrinsic/compromised-npm-package-event-stream-d47d08605502
[2]: https://www.mikeperham.com/2016/02/09/kill-your-dependencies/
