---
title: Quicker Posts In Jekyll
date: "2018-11-28T19:03:05-05:00"
---

I had [previously mentioned](https://scottw.com/news-to-me-1) using [Jekyll Compose](https://github.com/jekyll/jekyll-compose). While Jekyll Compose worked well, it still required I enter a bunch of content, playing with the file name, find the file in an editor, etc.

To speed things up, I wrote a little script called `new_post`. new_post takes a title as it's only argument, sets the title, a smart slug, some other presets, and finally opens ByWord.

```ruby
#!/usr/bin/env ruby
require 'date'
require 'active_support/core_ext/string/inflections'

unless Dir.exists?("_posts")
  abort "Are you sure you are in a blog (Jekyll) root directory (no _posts directory)?"
end

STOP_WORDS = %w{til ntm a an and are as at be but by for if in into is it no of on or such that the their then there these they this to s was will with}

abort("You need to pass in a title") if ARGV.empty?

title = (ARGV.count == 1 ? ARGV[0] : ARGV.join(" ")).strip.titleize
abort("No title was found") if title.empty?

now = Time.now

slug = title
        .downcase
        .gsub(/[\W_]/, ' ')
        .split(' ')
        .select{|s| s unless s.empty?}
        .collect{|s| s unless STOP_WORDS.include?(s)}
        .join(' ')
        .strip
abort("No words left for a valid slug") if slug.empty?

path = "_posts/#{now.to_date.to_s}-#{slug.gsub(/ +/,'-')}.md"

abort("Post File #{path} already exists") if File.exists?(path)

front_matter =    <<-FRONTMATTER
                  ---
                  layout: post
                  title: #{title}
                  date: #{now}
                  tags:

                  ---
                  FRONTMATTER
                    .split("\n")
                    .map{|line| line.strip}
                    .tap{|lines| lines << "\n\n"}
                    .join("\n")

File.open(path, 'w') do |f|
  f.write(front_matter)
end

`open #{path} -a /Applications/Byword.app`
```

To speed things up even more, I have a little bash function:

```bash
jpost () {
	cd ~/play/blog
	bin/new_post "$@"
}
```

From there, anytime I get the urge to right something, I can just type: jpost The Title of the Post
