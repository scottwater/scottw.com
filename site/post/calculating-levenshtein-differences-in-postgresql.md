---
title: "TIL: Calculating Levenshtein Differences in PostgreSQL"
date: "2018-10-31T10:31:00-04:00"
---

Today's OMG, PostgreSQL does that too award goes to the [fuzzystrmatch extension](https://www.postgresql.org/docs/9.6/static/fuzzystrmatch.html).

By enabling this extension, you get access to a whole host of useful string functions. The one I am most interested in today is Levenshtein.

> This function calculates the Levenshtein distance between two strings

This is really helpful for comparing the differences between two strings. Even better, using this extension you can add directly to your SQL queries and avoid loading a bunch of data in memory.

It is not enabled on Posgresql by default.

To enable it:

```sql
CREATE EXTENSION fuzzystrmatch
```

Or via a Rails Migration:

```ruby
class AddFuzzystrExt < ActiveRecord::Migration[5.0]

  def change
    enable_extension 'fuzzystrmatch'
  end

end
```

And then you can do something like this on your models:

```ruby
module LevenshteinDifference
  extend ActiveSupport::Concern

  included do
    scope :levenshtein_difference,
      -> (column, text, min_allowed) {
        column_name = connection.quote_column_name(column)
        sql = "levenshtein(#{table_name}.#{column_name}, :text) <= :min_allowed"
        where(sql, column: column, text: text, min_allowed: min_allowed)
      }
  end
end

YourModel.levenshtein_difference(:name, "Bob", 3)
```
