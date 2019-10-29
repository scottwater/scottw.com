---
title: Using Google Fonts Tailwind CSS
date: '2019-09-20T09:39:48-04:00'
tags:
- blog
- article
---

Here is a quick overview of adding a Google font to your [Tailwind CSS](https://tailwindcss.com) powered site without allowing Google direct access to your site.

First, select your font and then add the package to your project via the [typefaces](https://github.com/KyleAMathews/typefaces) project.

In my case, I am using [Roboto](https://fonts.google.com/specimen/Roboto) for [How I VSCode](https://howivscode.com).

```bash
yarn add typefaces-roboto
```

Next, require the package:

```js
require("typeface-roboto")
```

Finally, it is time to add it to your Tailwind CSS configuration file (usually tailwind.config.js). How you do this, depends on your desired usage.

If you wanted to use it for a special case, such as your logo:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        logo: ["Roboto", "sans-serif"]
      }
    }
  }
}
```

From here, you should have a new css class available called `font-logo`.

However, instead if you wanted to use Roboto as your default sans font you could add the following configuration:

```js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
         sans: ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
```

This configuration adds Roboto to front of your sans font list and then backfills it with the default Tailwind CSS sans fonts.
