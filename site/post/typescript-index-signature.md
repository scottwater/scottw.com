---
title: "Typescript: No Index Signature"
date: "2019-04-29T09:23:43-04:00"
image: "/assets/images/posts/undraw/code_review.png"
---

I have been spending some free time dabbling in Typescript.

One thing recently caught me off guard. I had a simple object which looks like this:

```javascript
const unitsOfTime = {
  millisecond: 1,
  second: 60,
  hour: 60 * 60,
  day: 24 * 60 * 60,
  month: 30 * 24 * 60 * 60,
  year: 365 * 24 * 60 * 60
};
```

In my initial testing, I was using it like this: `unitsOfTime.day` and all was well. However, once I switch to something a bit more dynamic (`unitsOfTime[someParameter]`) the Typescript compiler started to complain about a missing _index signature_.

After a brief search, I was led to this [PR](https://github.com/Microsoft/TypeScript/pull/7029)[^1].

> With this PR an object literal type is assignable to a type with an index signature if all known properties in the object literal are assignable to that index signature. This makes it possible to pass a variable that was initialized with an object literal as a parameter to a function that expects a map or dictionary

In hindsight this makes sense. There is no guarantee this dictionary is going to return a number at this key[^2].

The fix is to supply a type signature to the dictionary: `{[unit: string] : number}`

Here is the full object:

```typescript
const unitsOfTime: { [unit: string]: number } = {
  millisecond: 1,
  second: 60,
  hour: 60 * 60,
  day: 24 * 60 * 60,
  month: 30 * 24 * 60 * 60,
  year: 365 * 24 * 60 * 60
};
```

[^1]: By Anders Hejlsberg! I have been out of the Microsoft ecosystem for quite a while, so it still blows my mind to see this both on Github and PR's by Anders himself.
[^2]: This is much more interesting for a function that receives a dictionary as a parameter (as is in the PR description). In this specific case, it helps to call out what is expected, but it still does not guarantee `unitsOfTime` always returns a number (it could still return a null if the key is missing. Still, it is a step in the right direction.
