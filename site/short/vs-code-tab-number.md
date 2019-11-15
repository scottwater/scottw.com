---
title: Vs Code Tab By Number
date: "2019-03-28T10:56:36-04:00"
og_image: "/assets/images/posts/tab_by_number.png"
---

One of the things that trips me up with VS Code is my muscle memory for switching tabs with ⌘ + number. I used this often with Atom and I am pretty sure I picked it from Sublime and/or Textmate.

<!--more-->

Digging through the existing bindings, you can do this today with ⌃ + number. What makes this worse for me, ⌘ + 1, ⌘ + 2, etc do something today, but I am honestly not sure what it is. :)

There is an Atom commands plugin, but I do not need (or want) everything that comes with it. Instead, I went ahead and edited the following keybindings (under workbench.action.openEditorAtIndex).

![Tabs by Number Bindings](/assets/images/posts/tab_by_number.png)
