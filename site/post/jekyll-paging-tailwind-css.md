---
title: Jekyll Paging With Tailwind CSS
date: "2019-08-26T10:55:07-04:00"
---

I updated this blog Jekyll 4.0 and decided it was time to add paging to my [Shorts category](https://scottw.com/what-your-shorts-why-you-should-use-them-too).

Enabling per category paging required adding and configuring the [Jekyll Paginate V2](https://github.com/sverrirs/jekyll-paginate-v2) gem.

After that was in place and configured, it was time to add the "← Older" and "Newer →" buttons. I thought it was going to have to write a bunch of if statements and extra CSS to get working correctly for the first and last page. It turns out Flexbox + [tailwindcss](https://tailwindcss.com/) make it super easy:

```liquid

{% raw %}{% if paginator.total_pages > 1 %}{% endraw %}
{% raw %}<pager class="flex">{% endraw %}
{% raw %}  {% if paginator.next_page %}{% endraw %}
{% raw %}    <a class="flex-auto text-left" href="{{ paginator.next_page_path }}">← Older Shorts</a>{% endraw %}
{% raw %}  {% endif %}{% endraw %}
{% raw %}  {% if paginator.previous_page %}{% endraw %}
{% raw %}    <a class="flex-auto text-right" href="{{ paginator.previous_page_path }}">Newer Shorts →</a>{% endraw %}
{% raw %}  {% endif %}{% endraw %}
{% raw %}</pager>{% endraw %}
{% raw %}{% endif %}{% endraw %}
```

1. Setup a container with the class `flex`
2. Set both paging links to `flex-auto`. This allows the item(s) to grow and take up all of the available space
3. Add the class `text-right` to the newer/next link. This pulls the text to the far right.

For good measure, I added a text-left on the previous link, but this should be the default and not necessary.
