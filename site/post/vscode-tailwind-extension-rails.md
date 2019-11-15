---
title: VSCode Tailwind CSS Extension And Rails (ERB)
date: "2019-08-26T22:53:14-04:00"
---

If you are having trouble getting an extension like [VSCode Tailwind][vtw] to work in VSCode, a smart place to start debugging is the language mode.

For example, for me, a file named `application.html.erb` had the language set to `html.erb` instead of the expected `erb`. This in turn, caused the VSCode Tailwind extension to be ignored since it was not registered for `html.erb`.

Long term, there may be a way to have this extension look for any erb (\*.erb - although that too may be problematic). In the short run, we can tell VSCode to map any `html.erb` file back to `erb` like this:

```json
"files.associations": {
    "*.html.erb": "erb"
  }
```

This change fixed my immediate issue, but it ended up causing another bug. Previously, I had done a similar fix for Emmet by mapping `html.erb` to `html`. Now of course since the file type was being changed to `erb` Emmet needed the following update:

```json
 "emmet.includeLanguages": {
    "html.erb": "html",
    "erb": "html"
  }
```

The ease of configuration overrides is both a blessing and a curse. It is very easy to make one small change and have it run amuck. But it is much better than being boxed into something with no way making it work (even just temporarily).

[vtw]: https://github.com/bradlc/vscode-tailwindcss
