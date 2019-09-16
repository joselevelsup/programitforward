---
title: Query With GraphQL
date: "2019-08-27T02:36:23.450Z"
description: Lets just jump into GraphQL...
---

#GraphQL: But I don't want to learn another Database 
No no no...just no. GraphQL is just a Querying Langauge. Thats all. According to [GraphQL's site](https://graphql.org/), "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data."
You might be thinking, "Why should I learn this?" Well to put it simple programmer's terms, "more data, less work". So with that, let me just show you the basics. 

##The basics
Alright maggots, This is bootcamp! So I better see your querying faces! Just kidding. Ok, So lets say I am making a simple API for publishing company and they just want to list a Book and its Author. That's it.
Lets setup my models:

```typescript
Book:
title: string;
publishedAt: Date;
author: AuthorReference //Can be an ID

Author: 
name: string;
startedAt: Date;
booksPublished: BookReference[]  // Array of BookReferences
```

So it's really easy to translate it to GraphQL. To start a model, you have to make a `type`. 

```graphql
type Book {
	title: String!
	publishedAt: Date
	author: Author!
}

type Author {
	name: String!
	startedAt: Date
	booksPublished: [Book!]!
}
```

Lets run  through it. The `type` is just the model that we are making. For instance, we created 2 models. One for Books and one for Authors. Now we have to declare each field  with data type and if you noticed, they are all in caps. Another point you might notice is that there are some data types with a `!` that is to tell GraphQL that this field is required. As for `booksPublished`, you can see that its referencing the Book type also its wrapped around square brackets. That just means we want an array  of the data type. 

### List of Data types in GraphQL

So  we aren't confused going on, I'll provide a list of Data types in GraphQL: 

```graphql
type GameProfile { # can be what ever name. It is similar to the setup of your model

	name: String # string data type but not required.

	nickname: String! # string data type and required.

	age: Int # Integer data type.

	gamerscore: Float # Float data type.


}
