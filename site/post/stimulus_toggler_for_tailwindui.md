---
title: Stimulus.js Toggler for TailwindUI Nav
date: 2020-05-12T17:33:40.656Z
keywords: stimulus.js, tailwind, tailwindui
uuid: 85590c8e-e1f0-48c9-9823-b1ed2149b8da
og_image: "/assets/images/posts/undraw/undraw_coding.png"
og_image_alt: Coding
---

I am using the [TailwindUI](https://tailwindui.com) navigation bar and needed to implement a way of opening and closing the mobile view.

Here is a simple Stimulus.js controller I added. The class names are hard-coded, but it should not be too hard to extend or customize for your needs.

```javascript
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["element"];

  toggle(event) {
    event.preventDefault();
    this.elementTargets.forEach((element) => {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
        element.classList.add("block");
      } else {
        element.classList.add("hidden");
        element.classList.remove("block");
      }
    });
  }
}
```

To use on the TailwindUI navigation bar:

1. On the main nav item, add the controller: `data-controller="toggle"`
2. On the button, add the action: `data-action="click->toggle#toggle"`
3. On each element you need to toggle add the target: `data-target="toggle.element"`

The ability to target more than one element (see this.elementTargets vs. this.elementTarget above) is one of my favorite features in Stimulus.js. It keeps your code, logic, and implementation very clean.
