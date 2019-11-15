---
title: Squiggly Heredoc
date: "2019-02-25T00:22:24+00:00"
---

Continuing the trend of things that existed for years in Ruby without my knowledge...

Heredocs have often had weird formatting due to leading white spaces. Active Support has a helper method strip_heredoc, but since Ruby 2.3, you can use the squiggly ‘~’ instead.

Before:

```ruby
<<-DOC
DOC
```

But now you can do:

```ruby
<<~DOC
DOC
```

I have been trying to be more cognizant of dependencies. Seems trivial, but this solved a big problem with my Jekyll Rest project and did not require another dependency.
