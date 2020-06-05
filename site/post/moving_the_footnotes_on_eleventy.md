---
title: Moving the Footnotes on Eleventy
date: 2020-06-05T14:43:56.507Z
uuid: 6334a955-4b8f-45c4-a1c9-07e76644c798
keywords: Eleventy, Markdown Footnotes
og_image: "/assets/images/posts/undraw/undraw_coding.png"
og_image_alt: Coding
---

Typically with Markdown, footnotes are found at the end of the content.

For my [keyboard posts](https://scottw.com/boards/), I am using a nunjucks layout that looks a bit like this:

* Post HTML content
* Nunjucks rendered YouTube video
* Nunjucks rendered Images

Example:

```html
{%- raw %}
{{ content | safe }}
{% if soundTest %}
  <div class="mb-2">
    <h3 class="mb-2 text-2xl font-semibold text-center">Sound Profile</h3>
    <p>{{soundTest}}</p>
  </div>
{% endif %}
{% endraw %}
```

With this layout, my footnotes were not at the bottom of the page as you would typically expect (it went post content, footnotes, video, images).

With the help of this online [regular expression](https://regex101.com/) tool, I put together the following transformer:

```javascript
eleventyConfig.addTransform("move-footnotes", (content, outputPath) => {
  if (outputPath && outputPath.endsWith(".html")) {
    const footnoteRegex = /(<hr class="footnotes-sep">\n<section class="footnotes">[\s\S]+<\/section>)/m;
    const newFootnoteLocationRegex = /<!--FOOTNOTES-->/;
    let newLocation = content.match(newFootnoteLocationRegex);
    let footnote = content.match(footnoteRegex);
    if (newLocation && footnote) {
      return content
        .replace(footnoteRegex, "")
        .replace(newFootnoteLocationRegex, footnote[0]);
    }
  }

  return content;
});
```

What it does is check to see if there are indeed footnotes and that if a new location is defined to put them in. I did not want to try and guess where in the HTML to insert them, so I went with an HTML comment. If it finds this comment as well, it replaces it with the footnote HTML.

I am unfortunately executing both regular expressions twice, so there may be some other optimizations that can be made (such as declaring the regexes outside of the function). However, as far as I can tell for my site, there has not been a noticeable change in build speed.
