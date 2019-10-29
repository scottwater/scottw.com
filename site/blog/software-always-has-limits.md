---
title: Unlimited Software Does Not Exist
date: '2019-02-06T11:00:16-05:00'
tags:
- blog
- article
permalink: blog/limits/index.html
---

In software, nothing is unlimited. You can market and sell your product *without any limits*, but when it comes to computing, **there are always limits**.

One such limit, bit me in the ass yesterday.

KickoffLabs uses recursive queries in a couple of places. These are great because they can often limit hops back and forth to the database. Generally, they recurse two or so levels deep.

Unfortunately, a customer (or customer's customer) managed to go many levels deep....and you probably guessed it by now, without any limits. Furthermore, one of these queries generates more related recursive queries.

![Oh no! When things went wrong](/assets/images/posts/limits.png)

The green in the picture is database work. It was not the number of queries causing the problem, just the amount of work they were doing. These queries in turn started to push everything else back, exhaust connections, etc....a fun time for all.

The good news is overall the system held up quite well. For a couple of hours our response time was over our desired limits, but we were still very much operational.

We now have a limit in place on the depth of our recursive queries.

These bugs frustrate the bajeebus[^1] out of me. It is so obvious once you see it and it I borderline preach always having some limits.

As penance for my sins against computing, I could not sleep last night, and I ended up starting on the real fix at 2 am.

If you have a moment, look around your code and see if there is something which needs some a 'just in case' limit.

[^1]: I got to use the word bajeebus...it is all worth it.
