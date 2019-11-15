---
title: "TIL: Do Not Name a Postgres Table User"
date: "2019-04-11T00:32:05+00:00"
permalink: blog/s9h/index.html
---

Working through a handful of JavaScript ORM tools and twice today I accidentally created a table called `User`.

<!--more-->

This conflicts with Postgres's own User table. Postgres is OK with this assuming you use quotes around `user` in your queries (and it becomes case sensitive).

Loosely translated, **do not name your table `User`**. I guess if you are switching databases, the above is necessary, but it is probably just as easy to rename your table at that point.
