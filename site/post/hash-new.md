---
title: Hash#new
date: "2019-03-25T09:32:30-04:00"
---

I was reading this post on [Hash#fetch](https://dev.to/raquelxmoss/using-hashfetch-in-ruby-for-better-nil-handling-2l8h), and it reminded me of another lesser used/understood method on Ruby's Hash object, `new`.

Typically, in Ruby, a hash is created by using just the `{}` literal. This is the equivalent of just doing `Hash.new`.

```ruby
h1 = {}
h2 = Hash.new
```

Regardless of which option you choose, you get the same result.

However, as in most things Ruby, there is more than one way. The Hash initializer has three options:

1. No parameters
2. A default parameter
3. A Block

Next to the literal, the one I use most often is option #2, a default parameter. Typically, I use this when I want to count a bunch of things.

```ruby
a = [1,2,3,4,1,1,3]
h = Hash.new(0)
a.each {|i| h[i] += 1}
puts h #{1=>3, 2=>1, 3=>2, 4=>1}
```

Without the `Hash.new(0)` we would have to check for nil, or do an assignment like `(h[i] ||= 0) += 1` which is much less readable and depending on what you are iterating over can get complicated.
