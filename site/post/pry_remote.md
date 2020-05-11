---
title: Pry Remote
date: 2020-05-11T19:02:00.026Z
uuid: 01c68894-2629-4e6b-85b8-be901fc516cb
og_image: "/assets/images/posts/undraw/undraw_coding.png"
og_image_alt: Coding
---

I have been coding quite a bit with Wepacker + Stimulus lately and leveraging Foreman to make the [process quick and easy](https://scottw.com/blog/profile.dev/).

Another gem I like to use for development is pry-rails. If you are not familiar, [pry-rails](https://github.com/rweng/pry-rails) makes it easy to set a break-point, `binding.pry`, and enter a console session during your rails requests.

Using Foreman, this still works, but you do are not able to see what you are typing, and it gets complicated if you make multiple requests.

After a little searching, I found the [pry-remote](https://github.com/Mon-Ouie/pry-remote) gem.

> A way to start Pry remotely and to connect to it using DRb. This allows to access the state of the running program from anywhere.

With pry-remote in place, you can set a break point with `binding.remote_pry`. This works the same as the original `binding.pry` except now you can open up a new terminal window and connect to your pry session (remotely).
