---
title: Proxying Requests To Heroku Via Caddy Server
date: "2019-03-07T14:59:26-05:00"
permalink: blog/heroku-caddy/index.html
og_image: "/assets/images/posts/undraw/undraw_coding.png"
---

I wanted to experiment with using [Caddy Server][1] as a reverse proxy to an application hosted on Heroku.

If you are not familiar with Caddy, it is a newish, lightweight web server written in Go that was built from the ground up to leverage HTTPS (via Let's Encrypt). Caddy is general purpose web server, but for now, I am only interested in using it as a reverse proxy.

You can create a minimalist version of a [reverse proxy][5] by adding a `Caddyfile` with the following:

```
yourdomainname.com
proxy / proxieddomain.com
```

You then start Caddy[^1], and your requests from _yourdomainname.com_ should be proxied to _proxieddomain.com_.

However, this does not work as is for Heroku. When a request is proxied to Heroku, it needs to know which app to direct the request to. Chances are, _yourdomainname.com_ is not registered on Heroku[^2].

As you might expect, Caddy allows you to specify some headers which are passed along to the server receiving the proxy request.

Even better, Caddy has a convenient helper, `transparent`[^3], which wraps up the standard headers.

Using `transparent`, our original example now looks like this:

```
yourdomainname.com
proxy / proxieddomain.com {
  transparent
}
```

To keep you up to speed, `transparent` is shorthand for:

```
yourdomainname.com
proxy / proxieddomain.com {
  header_upstream Host {host}
  header_upstream X-Real-IP {remote}
  header_upstream X-Forwarded-For {remote}
  header_upstream X-Forwarded-Port {server_port}
  header_upstream X-Forwarded-Proto {scheme}
}
```

Less Code == More Gooder! Well, except here. Heroku fails in the Host header is set to anything other than the _proxieddomain.com_. This one took quite a while to figure out. [Thank you very much curl!][3]

I reached out to Heroku and they confirmed that the HOST header is used internally

> The Heroku router uses the host header for routing traffic on the platform. If you are specifying a host that is not setup as a custom domain on your application these sorts of requests will fail because they won't be able to be routed.

Using `header_upstream Host {host}` the host header is set to _yourdomainname.com_[^4].

But in the end, the following works and provides all the benefits of `transparent`, just a couple of extra lines:

```
yourdomainname.com
proxy / proxieddomain.com {
  header_upstream X-Real-IP {remote}
  header_upstream X-Forwarded-For {remote}
  header_upstream X-Forwarded-Port {server_port}
  header_upstream X-Forwarded-Proto {scheme}
}
```

You will also likely want to include either `header_upstream X-Forwarded-Host {host}` or `header_upstream Origin {host}` so that you know which domain is actually being proxied.

[^1]: If you are completely new, checkout the getting started guide to make sure you generate your SSL cert first
[^2]: Otherwise, why would you need to proxy it? 😀
[^3]: "Passes thru host information from the original request as most backend apps would expect."
[^4]: The {} in the configuration are [Caddy's placeholders][4].

[1]: https://caddyserver.com
[2]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin
[3]: https://scottw.com/s88
[4]: https://caddyserver.com/docs/placeholders
[5]: https://caddyserver.com/docs/proxy
