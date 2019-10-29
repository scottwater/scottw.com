---
title: Select Multiple Fields With Fauna
date: '2019-09-26T08:52:17-04:00'
tags:
- blog
- article
---

I am thinking of using [Fauna][fauna] for my next small side project and began experimenting with it last night. I wanted to return two fields from a document, but I could not get the syntax correct.

I was working under the assumption that [`SelectAll`][selectall] would allow me to extract multiple fields, but it turns out this is for returning multiple items from an array.

I posted a message in their slack group[^1] and learned that you could pass an array to the Lambda with more than one [`Select`][select].

```
Map(
  Paginate(Match(Index("all_customers"))),
  Lambda("X", [
    Select(["data", "firstName"], Get(Var("X"))),
    Select(["data", "lastName"], Get(Var("X")))
    ]
  )
)
```

[fauna]: https://fauna.com
[selectall]: https://docs.fauna.com/fauna/current/api/fql/functions/selectall
[select]: https://docs.fauna.com/fauna/current/api/fql/functions/select

[^1]: Slack is such a bad option for support like this. All the answers are locked in their walled garden.
