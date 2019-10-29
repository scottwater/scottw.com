---
title: Versioning Coffee Script
date: '2019-01-16T05:53:03-05:00'
tags:
- blog
- article
---

[KickoffLabs](https://kickofflabs.com) current widget framework was built on CoffeeScript. The entire system is something that started small and then grew over the last seven years.

It is managed (I am using this term very loosely) via Ruby with Rake. Today, there are much better options for this in the JavaScript world for packaging and version management, but they either didn't exist when we started, or I did not know about them. 😀

Either way, at some point recently, the version of CoffeeScript we use locally[^1] was updated to the 2.x....and wow, everything went to hell.

CoffeeScript 2.x is a significant change. The changes help move the project forward in a major way, but for our existing codebase, we do not need them. I have been slowly migrating the functionality we need to a cleaner ES6/Babel/Webpack/etc. version, but this not something we are ready to ship.

In the meantime, thanks to Yarn (and I am assuming NPM would work as well), I was able to fix the issues, by using the last 1.x version of CoffeeScript.

```
yarn add coffeescript@1.12.7
```

Now instead of just issuing `coffee -c blah` we do `yarn coffee -c blah` and all is good in the world (minus, you know, all the crap in the world today).

[^1]: Likely via HomeBrew
