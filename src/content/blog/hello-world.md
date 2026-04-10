---
title: "Hello, World"
description: "First post. A quick intro to what this blog is about and what you can expect."
pubDate: 2026-04-09
tags: ["meta", "intro"]
---

Welcome. This is the first post on **Program It Forward** — a place where I write about
code, ideas, and whatever I find interesting enough to put into words.

## What this blog is about

I want to share things I'm actually building, learning, or thinking about. Not tutorials
recycled from Stack Overflow, not hot-takes — just real ideas and real code.

## What to expect

- Deep dives into languages, tools, and patterns
- Short posts when something small is worth noting
- Code examples that actually run

## A quick taste

Here's a small Python function I find elegant — it shows how readable code can be:

```python
def fizzbuzz(n: int) -> list[str]:
    result = []
    for i in range(1, n + 1):
        match (i % 3, i % 5):
            case (0, 0): result.append("FizzBuzz")
            case (0, _): result.append("Fizz")
            case (_, 0): result.append("Buzz")
            case _:      result.append(str(i))
    return result

print(fizzbuzz(20))
```

And the same idea in TypeScript:

```typescript
function fizzbuzz(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const x = i + 1;
    if (x % 15 === 0) return "FizzBuzz";
    if (x % 3  === 0) return "Fizz";
    if (x % 5  === 0) return "Buzz";
    return String(x);
  });
}

console.log(fizzbuzz(20));
```

---

That's it for now. More posts coming soon.
