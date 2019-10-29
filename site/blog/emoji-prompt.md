---
title: "\U0001F600 Emoji Prompt"
date: '2019-08-02T10:03:12-04:00'
tags:
- blog
- article
og_image: "/assets/images/posts/iTerm2_emoji_prompt.png"
---

In my shell prompt, I typically keep things very simple. Just the current folder I am in and the git branch.

[iTerm 3.3][it3] introduced a new customizable status bar. In this new status bar, you can easily view your things like your current directory as well as your current git branch. This means I can further simplify my prompt to...well, nothing really.

With this new real estate I figured I could have a bit of fun and wrote this small shell script which adds an Emoji based on the day of the week.

```
local ret_status="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )"

get_emoji_based_on_day() {
  case $(LC_ALL=-C date +%u) in
    (1) echo 👉;;
    (2) echo 👍;;
    (3) echo ✊;;
    (4) echo 🤙;;
    (5) echo 🍺;;
    (6) echo 🎉;;
    (7) echo 🙏;;
    (*) echo 🤯;;
  esac
}

PROMPT='$(get_emoji_based_on_day) ${ret_status}%{$reset_color%}'
```

Another great new iTerm 3.3 feature is a minimal theme option which simplifies the entire screen. Here is what it all looks like:

![iTerm 3.3 with Emoji Prompt Preview](/assets/images/posts/iTerm2_emoji_prompt.png)

**Hat Tip** This prompt is based on [Robby Russel default theme][rr] in OH My ZSH.

[it3]: https://www.iterm2.com/version3.html
[rr]: https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme
