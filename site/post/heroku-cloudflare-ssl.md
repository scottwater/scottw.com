---
title: "Heroku + CloudFlare + SSL"
date: 2020-07-30T19:49:14.657Z
uuid: 1dce0a94-ac2b-4d90-ba28-8bb1f3ab65a7
keywords: Heroku, SSL, HTTPS, certificates, cloudflare, apex domains
---

For a couple of years now, Heroku has had pretty good free’ish SSL support. You add your domain, enable auto certs, and enter a DNS record.

```bash
heroku domains add www.mkrank.com
heroku certs:auto:enable
```

Heroku makes it super easy, but it does come with one big drawback: _Heroku does not support root (apex) level domains_. Whether you should use your root domain or subdomain and if it matters is a debate for another day. All I care about here is the user experience around setting up a root level SSL cert and if it is easy to set up and maintain.

Lack of Heroku certs on root level domains is usually not a big deal. Most of your traffic likely comes from something other than a person typing a URL directly into a browser (and even then autocomplete based on browsing history helps guide visitors back). But, if we could do it and it was easy to do, then why not?

In practice, you would not want to CNAME your apex domain since it likely hides there records in the same node[^mx].

However, there are a couple of DNS providers support for “aliasing” apex level domains without the side effect of making other records in that node unavailable. As far as I know, this is not an actual spec/standard yet, but its support is pretty solid and has been growing over the years.

The three I know who support it today are:

- DNS Made Easy
- DNSimple
- CloudFlare

Both DNS Made Easy and DNSimple require you explicitly choose to use this type of alias record. CloudFlare automatically does this if you add a CNAME for your root domain (regardless of whether it is on accident or purpose). I am not sure which is better, but every six months I spend 30 minutes try to remember how to do this in CloudFlare[^forgets].

Anyway, back to CloudFlare, I have been using them more and more for my projects. In addition to great DNS and pretty good support, they have a growing list of exciting features, such as workers.

So how do we get going? To use CloudFlare for SSL for Heroku:

1. Add your domain to Heroku (`heroku domains add mkrank.com`)
2. Take the CNAME record they give you and add it to CloudFlare[^www]

SSL will work, but it comes with a minor caveat. The traffic from your clients' browsers to CloudFlare will be secure. However, from CloudFlare to your Heroku app will not be. Chances are this is not an issue, but it is a weak link. I did not even notice the weak link until I published a new app, [MKRank](https://mkrank.com)[^mkrank].

I built this app as a fun side project, and I want nothing to do with managing emails/passwords/etc., so I opted to use OmniAuth and enabled signing in with various existing sites.

Everything worked locally, but when I first deployed MKRank, I could not sign in with any third-party site. After a little debugging, I realized the callback URL that was from my app did not match what I had configured in each third-party app (all are hard-coded to use SSL).

So what was going on?

Well, if you remember from above, communications between the client and CloudFlare were happening over SSL. However, CloudFlare was communicating back to my app over HTTP. Since my app was receiving non-SSL traffic, the URLs it generated for OmniAuth was not using HTTPS.

One fix would be too somehow force OmniAuth always to use SSL in production (this might be a good idea either way).

However, a better fix would be to enable SSL communication between CloudFlare and my app.

It turns out this is very simple. All we have to do is add the Heroku auto certs feature (`heroku certs:auto:enable`). Once in place, Heroku will accept SSL traffic for our app.

The final step is to go back into CloudFlare and enable full SSL.

![Full SSL](/assets/images/posts/full-ssl.png)

Now all communication from the client (browser) → CloudFlare → Heroku is secure. Logins with OmniAuth will now generate the proper callback urls, and no additional configuration or monkey-patching was necessary.

[^www]: I you should create a second CNAME on the www domain. Once in place, you can use CloudFlare's page rules to redirect all www. traffic back to the non-www URL.
[^forgets]: Actually, who am I kidding. I prefer being explicit, but as someone who does product support, I 100% get why they just made it so.
[^mx]: Everyone at some point finds this out the hard way when their email is no longer available because MX records are no longer available.
[^mkrank]: MKRank is an app for the mechanical keyboard community. It allows you to build lists of your favorite mechanical keyboard products.
