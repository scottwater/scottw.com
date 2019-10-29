---
title: Hello Indie Triage
date: '2019-01-14T04:54:35-05:00'
tags:
- blog
- article
image: "/assets/images/posts/indie_triage.png"
---

I was navigating around [Indie Hackers](https://indiehackers.com) one day, and I came across this post, _[Indie Hacker Etiquette: No Post Left Behind](https://www.indiehackers.com/forum/indie-hacker-etiquette-no-post-left-behind-48cc249605)_.

> But I do feel that this is a powerful enough community and could be even stronger in terms of our support system. I have noticed that there are times when people post things -- like asking for feedback on their products -- or just trying to get an idea about something, and those posts might go unanswered.

I thought it would be interesting to build an app that watched some of my favorite small business[^1] websites and try to highlight questions that went unanswered.

Thus, [Indie Triage](https://indietriage.com) was born.

In a nutshell:

* A couple of times a day, Indie Triage looks for new posts and tracks
* It tracks the new posts for comments
* Performs some light spam checking (IH, has a decent spam problem[^2]).
* Recent posts are displayed in a randomized list
* Posts are occasionally shared on Twitter
* Once a day an email is sent to anyone who is interested

I am open to adding additional communities, so if you know of one I missed, please let me know.

When I started, I hoping to be able to pull in more content, but it seems like Indie Hackers and [Discuss BootStrapped FM](https://discuss.bootstrapped.fm/) are the last two games in town.

Tech Stack:

* Rails 5.2 - I am over 40. With any luck, it will be Rails until it is time to retire and then I will rebuild the senior center site in Rails. :). This was also my first time using the new(ish) feature specs in Rails, and they have been a joy.
* Postgresql - Web Scale!
* [TailwindCSS](https://tailwindcss.com/) - this blog and Indie Triage are my first forays into TailWind. Design is still my Achilles heel, but I really enjoy working with it....and if I could get slightly better with Flexbox I will be rolling.
* [Standard](https://github.com/testdouble/standard) - not deployment specific, but I have run most of the code through Standard and like the results. I will miss my [terse assignments](https://github.com/testdouble/standard/issues/65), but I get why this could be a problem and if I remember correctly, the accident using `=` instead of `==` did bite us in the ass once on KickoffLabs.

[^1]: \*cough\* Boostrappers
[^2]: If you work on Indie Hackers, please reach out. I have a couple simple suggestions.
