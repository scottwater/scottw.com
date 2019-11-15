---
title: Do Not Overthink Ruby
date: "2019-03-21T14:58:24+00:00"
permalink: blog/s8h/index.html
---

I was reading through the Ruby regex docs trying to figure out how to iterate over a string and replace all the matches of a particular pattern.

<!--more-->

The tricky part is the matches are not one to one (not just a find and replace). I tried a bunch of different things and then started wishing `gsub` took a block....turns out it already does this.

Example:

```ruby
"1234".gsub(/\d/) {|i| i.to_i * 2} # 2468
```

Even better, it handles all substitution

```ruby
"Square this number: 5".gsub(/\d/) {|i| i.to_i * i_to_i}
# Square this number: 25
```
