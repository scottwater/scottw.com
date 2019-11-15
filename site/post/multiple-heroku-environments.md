---
title: Multiple Heroku Environments
date: "2019-03-25T09:11:13-04:00"
---

When you have multiple environments for an app on Heroku each command you execute requires you to pass in the -a (--app) flag with the app name. Heroku app names need to be unique not just for you, but for Heroku as a whole. This means the app name might not always be as memorable as you would like. KickoffLabs is actually broken up into three separate apps which further complicates things (6 total app names).

Instead of using the -a flag, you can also use the git remote name via the --remote flag.

The remote name only needs to be unique within your app. This means you can reign in this craziness a bit by using your own git remote names. By default, Heroku creates a remote called `heroku`. You can use the `git remote rename` command to rename your remote(s) to something more consistent

```shell
git remote rename original_name new_name
```

With this knowledge, you can create more consistent names for your remotes. I generally go with `production` and `staging`.

Next, I add the following to my zsh profile:

```shell
function hs(){
  heroku  "$@" --remote staging
}

function hp(){
  heroku  "$@" --remote production
}
```

Now, anything I want to do to production, is as simple as:

```shell
hp config:set VAR=1234
```

And the same can be done in staging:

```shell
hs config:set VAR=1234
```
