---
title: Simplifying Shorti's Api
date: "2019-02-02T09:24:46-05:00"
---

If you are not familiar, [Shorti][1] is my API only simple URL shortener. The [source is on GitHub][2].

Initially, all of the API endpoints returned JSON. JSON is convenient, and the tools around it are great these days. However, I did notice that in my primary use cases it was adding some unnecessary steps, especially when using it with shell scripts.

Since it is a relatively new project, I thought it was best to fix this now.

I made a change that now checks the HTTP ACCEPT header. If it is `application/json`, the API will return JSON. If it is anything else, it will return plain text.

```ruby
  def is_json_request?
    request.accept == "application/json"
  end
```

What is nice is that you can now simply do something like this:

```bash
 curl -d "url=https://scottw.com&api_key=HOAGIES" https://shortilinks.herokuapp.com | pipe_some_where
```

Also of interest, `respond_to` is not available by default in a Rails API project. I am sure there is a way to retroactively add it, but for now I went with something simple.

[1]: https://scottw.com/shorti
[2]: https://github.com/scottwater/shorti
