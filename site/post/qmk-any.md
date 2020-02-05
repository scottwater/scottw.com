---
title: QMK Any (or How to Setup a Custom Quantum Keycode)
date: 2020-02-05T15:11:30.794Z
description: How to use QMK quantum keycodes which are not defined in the configurator.
keywords: qmk, quantum, command, alt
tweet: How to use quantum QMK keycodes which are not defined in the configurator.
---

I mentioned previously that I am huge fan of the [QMK Firmware](https://scottw.com/blog/qmk/).

For most customizations, you can use the online [configurator](https://config.qmk.fm) to make your changes right in the browser.

I have been using a keyboard with a HHKB layout the last couple of weeks. After a bit of trial and error I settled on the following basic layout:

![Bottom Row](/assets/images/posts/qmk_any/hhkb_bottom_row.png)

- Bottom Row: Control - Command - Spacebar - Alt - Control
- Caplock - MO(2) (essentially Function2)
- Function - MO(1)

This has been working really well for me, with one notable issue - Command + Alt is awkward. This is evident when trying to debug something in a browser. For years, I have been trained to Command+Alt+I to open up the developer console and related tools in every browser.

In the configurator, there is a tab labeled [Quantum](https://docs.qmk.fm/#/quantum_keycodes)

> Quantum keycodes allow for easier customization of your keymap than the basic ones provide, without having to define custom actions.

There are built in keycodes for many modifier combinations (like Hyper, Meh, etc). However, Alt + Command was missing.

Unable to find an answer, I hopped on the [QMK discord](https://discordapp.com/invite/Uq7gcHh) and was told that you can use the Any key to add a custom keycode (Thanks fauxpar!).

Armed with this, I changed the keycode for the letter I on Layer 2 to Any with the following: `A(G(KC_I))`.

![Bottom Row](/assets/images/posts/qmk_any/any_config.png)

**We have lift off!**
![We have lift off!](https://media.giphy.com/media/jV65cP2S4mphrQfJkk/giphy.gif)
