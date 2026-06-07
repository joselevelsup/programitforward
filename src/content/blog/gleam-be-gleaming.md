---
title: "Gleam be Gleaming!"
description: "How I have been using Gleam and enjoying the shit out of it!"
pubDate: 2026-04-11
tags: ["programming", "gleam", "web"]
draft: true
---

# Gleam be Gleaming!

So for quite a while now, I have been using the programming language Gleam and it has been an absolute blast. Gleam is a functional programming language that compiles to either Erlang bytecode (running on the BEAM virtual machine) or JavaScript, giving you the choice of leveraging the BEAM's powerful concurrency and fault tolerance, or running in a JavaScript runtime like Bun, Node.js, or Deno. (I prefer Bun, by the way.) Gleam also allows you to use Erlang, JavaScript, or Elixir code through interop, which is a really nice touch.

I just enjoy the experience whenever I am working in it. Really! I had never worked with Option and Result types before until I met Gleam and...it has genuinely opened my eyes. Instead of null checks scattered everywhere or random runtime panics, you are forced to handle the possibility of failure right there in the type system. It sounds annoying at first but it actually makes you feel more confident about your code. The pipe operator has also been a pleasure to use. Now before you come at me, let me just say that I have only used TypeScript (and obviously JavaScript) and Go. Both are really good languages, especially Go...actually, just Go. Go is amazing (that damn handsome gopher). But now using Gleam, I get to play with a type system that actually feels fun. Before I continue to glaze Gleam, let me show you some code examples.

### Basic Hello World
```gleam
fn main() -> Nil {
    echo "Hello World"
}
```

### Control Flow
```gleam
fn apple_or_banana(apple: Bool, banana: Bool) -> Nil {
    case apple {
        True -> echo "You going with apple"
        False -> case banana {
            True -> echo "You going with banana"
            False -> echo "I don't know what you want"
        }
    }
}
```

### Returns
```gleam
fn get_in_the_club(age: Int) -> Bool {
    age >= 21
}
```

### Recursion
```gleam
fn factorial(number: Int) -> Int {
   case number == 1 {
    True -> number
    False -> number * factorial(number - 1)
   }
}
```

### Pipe
```gleam
import gleam/string
import gleam/list

fn main() {
  let result =
    ["hello", "world", "from", "gleam"]
    |> list.map(string.capitalise)
    |> string.join(", ")

  result
}
// Output: "Hello, World, From, Gleam"
```

Like look at that! Ain't it pretty!?!?

Let's break it down a little further. If you notice in the examples, there was no need for the `return` keyword that most languages tend to use. In Gleam, it's not needed. The last expression in a function is automatically what gets returned — no ceremony, no keyword, just the value sitting there. Also, the types. In the examples I did include them, but in Gleam you don't necessarily need to annotate everything. The compiler is smart enough to infer types in most cases. Look at this next code block of the factorial function with the type annotations removed:

```gleam
fn factorial(number) {
   case number == 1 {
    True -> number
    False -> number * factorial(number - 1)
   }
}
```

Ok, one last glaze. Gleam has a really solid standard library and it's extensible. There are packages for Crypto, JSON, HTTP, and more. For real, when you get the chance, check it out. I know there is a lot I haven't touched on, and that is intentional. This post is not supposed to be a full language tour — it's just me sharing what I have been doing with Gleam.

WAIT, ONE LAST THING...The documentation! Oh, the documentation! Gleam uses HexDocs, which is the documentation platform for the BEAM ecosystem. Coming from the NPM world, this has been **chef's kiss** amazing. You get to see every function a package exposes, the types, the constants, even example usage in some cases. It's clean, fast, and actually enjoyable to browse. That alone says a lot.

## What have I been doing?

I have been building random projects, mostly trying to figure out a good structure for a web server that is **not entirely JavaScript**. I'm just tired of everything running on JavaScript. For once, I want my server built with something else. I did try Go and it was good for a while, but I don't know — it just didn't feel like the right fit for me. I still like the language, and I even liked [templ](https://templ.guide), which lets you write HTML-like templates directly in Go. It's really good. I just wanted something simpler. Something more uniform. Something that felt consistent all the way through.

### Well, what have you been using?

Glad you asked! I have been using Mist, Wisp, Fist, Pog, and the standard library.

- **Mist** — The core HTTP server library. Handles the low-level connection stuff so you don't have to.
- **Wisp** — A practical Gleam web framework built for rapid development and easy maintenance. Think of it as the layer that makes building request/response flows feel natural.
- **Fist** — A declarative, functional router. Pairs really nicely with Wisp.
- **Pog** — A PostgreSQL client for Gleam. Clean API, works great with the rest of the stack.

These tools together have been helping me put together some really solid structures, and writing code with them has felt sooooo good.

## What is your goal with Gleam?

I want to really get away from pure JavaScript on the server side — but that does not mean I am giving up JavaScript entirely. I still need it in the browser. So my intent is to build a multi-page application (MPA) with Gleam handling the server and AlpineJS handling the browser-side interactivity. No React, no Vue, no Solid, no Svelte (although I have heard really good things about Svelte...keeping my eye on that one). I just want clean HTML, CSS, and minimal JavaScript with a lightweight framework. Keep it simple. Keep it fun.


