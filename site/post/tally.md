---
title: Ruby Enumerable#tally
date: 2020-12-02T18:50:39.529Z
uuid: 80819a47-e443-4563-965d-6477c4ea33be
keywords: ruby, tally, enumerable, advent of code, ruby 2.7
---

10+ years in, and Ruby continues to surprise me.

I am trying to complete the [Advent of Code](https://adventofcode.com/) this year. For [day two](https://gist.github.com/scottwater/c7b17f33bea2cdb3067c48b519f436b7), I needed to be able to sum the number of items in an array.

```ruby
array = ["a", "a", "b"]
# {"a" => 2, "b" => 1}
```

One of my favorite little Ruby hacks is setting the default value of Hash: `Hash.new(0)`.

I have done something like this hundreds of times for quick counts:

```ruby
array = ["a", "a", "b"]
hash = Hash.new(0)
array.each { |item| hash[item]+=1 }
# {"a" => 2, "b" => 1}
```

For the Advent of Code, I was curious if there was a good way to do this in one line[^oneline] (no technical reason, just because...)

Not sure why, but it dawned on me this was likely something that Ruby would have built in (again, just because). It turns out in Ruby 2.7, the [tally](https://ruby-doc.org/core-2.7.2/Enumerable.html#method-i-tally) method was added to Enumerable.

> Tallies the collection, i.e., counts the occurrences of each element. Returns a hash with the elements of the collection as keys and the corresponding counts as values.

```ruby
hash = ["a", "a", "b"].tally
# {"a" => 2, "b" => 1}
```

Simple and named appropriately. Is there another language that would have something like this readily available?

[^oneline]: Tap to the rescue - `Hash.new(0).tap { |h| ["a", "a", "b"].each { |item| h[item]+=1 }}`
