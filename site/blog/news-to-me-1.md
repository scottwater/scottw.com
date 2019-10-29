---
title: News To Me 1
tags:
- blog
- article
date: '2018-10-31T05:31:00-04:00'
---

In the first issue of _It's News To Me_[^1], I present some interesting [Jekyll](https://jekyllrb.com/) links.

* [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) - Cleanest full featured Jekyll theme I came across. I wanted to go super simple, but if I ever decide to turn it up a notch, this looks great.
* [StaticMan](https://staticman.net) - Enable users to contribute to a static site. Uses a pull request workflow to help users contribute in a structured way.
* [Netify](https://www.netlify.com/) - I mentioned them in my [setup post](/the-setup).  An interesting service for building static sites with goodies like easy AWS Lambda integration, continuous integration, and more.
* [Jekyll Compose](https://github.com/jekyll/jekyll-compose) - command line tool to help move around Jekyll faster. Still not sure why something like this isn't built in.

Speaking of Jekyll Compose, I wanted to simplify the new post command with an alias, so I wrote the following function[^2]:

``` bash
function jpost(){
  cd ~/play/blog
  bundle exec jekyll post "$@"
}
```

[^1]:  the name is a work in process
[^2]: update the 'cd line' for your own path or leave it out to use on many sites
