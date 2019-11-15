---
title: My Favorite Ruby Gems For Development
date: "2019-01-21T08:27:17-05:00"
---

There are many Ruby Gems you can use on a project. The following are my favorites for improving the development experience, primarily on Rails apps.

<!--more-->

[Faker][1] - Generates fake data such as emails, business names, etc. It makes it easy to add some variety to your test data and gives you one less thing to think about

[rack-mini-profiler][2] - Middleware profiler for rack apps. It does quite a bit, but my primary use case is to stay on top of database queries in a given request. Its hidden superpower is it is safe to also use in production if you need help tracking down a bug.

[pry][3] and [pry-rails][4] - Amazing alternative to IRB. I have used it every day for years and still feel like I only 20% of its' power. For better or worse, my best debugging is with a series of `binding.pry` statements.

[pgsync][10] - Makes it easy to sync data between two databases. My primary use case is grabbing specific subsets (groups) of production data for easy local debugging (without the need to download the entire database).

[xray-rails][6] - With a keyboard short-cut (cmd+shift+x) you get a visual representation of the layout, view, and partials used on the current page. Also, you also get the controller + action. Finally, you can click on any of them and quickly jump into the code and markup. One caveat is it depends on jQuery, so I have not been able to use on some recent projects.

[RSpec][9] - Every time I start a new project I tell myself I am going to stick with conventions and not use RSpec. Then 30 minutes later, I go back to it. This in no way means RSpec is better than Rails built-in testing. I am just more comfortable with RSpec, and it has a large and established community.

[factory-bot][7] (and [factory-bot-rails][8]) - Similar to RSpec, this is not a knock against the built-in fixtures, I find the API and workflow more appealing.

[Guard][5] - Automates common tasks, usually related to a file change. to the spec is changed. There are 100s of plugins for various other tasks.

[Timecop][12] - Makes it easy(ier?) to test dates:

> A gem providing "time travel", "time freezing", and "time acceleration" capabilities, making it simple to test time-dependent code. It provides a unified method to mock Time.now, Date.today, and DateTime.now in a single call.

If I am missing others, please let me know at hi@scottw.com or [@scottw][11] on Twitter.

[1]: https://github.com/stympy/faker
[2]: https://github.com/MiniProfiler/rack-mini-profiler
[3]: http://pryrepl.org/
[4]: https://github.com/rweng/pry-rails
[5]: https://github.com/guard/guard
[6]: https://github.com/brentd/xray-rails
[7]: https://github.com/thoughtbot/factory_bot
[8]: https://github.com/thoughtbot/factory_bot_rails
[9]: http://rspec.info/
[10]: https://github.com/ankane/pgsync
[11]: https://twitter.com/scottw
[12]: https://github.com/travisjeffery/timecop
