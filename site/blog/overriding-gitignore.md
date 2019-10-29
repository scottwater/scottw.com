---
title: "\U0001F4A1 TIL: Overriding a .gitignore"
date: '2019-05-29T14:02:18+00:00'
permalink: blog/sa8/index.html
tags:
- blog
- short
---

In my default .gitignore (~/.gitignore),  I have .ruby-version excluded.

I needed to include a .ruby-version file to fix a Netlify build issue.

Today I learned you can override a .gitignore with a `--force` argument.

<!--more-->

```bash
git add .ruby-version --force
```
