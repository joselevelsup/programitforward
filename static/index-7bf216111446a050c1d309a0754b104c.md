---
title: Typescript...why?
date: "2019-08-15T18:47:21.005Z"
description: "Why should you learn Typescript in this day and age"
---

![typescript](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/TypeScript_Logo.svg/1280px-TypeScript_Logo.svg.png)


## What is Typescript?

Basically Typescript is just a super set of Javascript. No no no no...you are not using a new language. Its just Javascript on steroids. You are able to define your type of variables, return types, and how you define your code so it is a little more understandable. Typescript was developed by Microsoft and have been using it in their projects regarding the web. Visual Studio Code was developed using Typescript.

<br />

You dig? No? Okay, let me show you an example:

```javascript
let x = 1;
let y = "Hello world";
console.log(x+y);
```

Now that is regular javascript. When the code is executed, we get `1Hello world`.

<br />

Now lets say we do this in Typescript:

```typescript
let x: number = 1;
let y: string = "Hello world";
console.log(x+y)
```

Now this would throw an error. Why? Cause `x` is strictly a number type and `y` is a string type. You can't add a string and  a number together. 
 
## Types

In Typescript, we can define types for a variable, function params, or even return functions. Now we all know the different types like String, Number, Array, and etc. But lets say we don't know the exact type. Well Typescript allows  the use of an `any` type. `any` means...well anything. But lets say we know what is going to be returned or used BUT its not a type but an object. Ohhhh...now we are treading the waters. 

```typescript
interface MyNewType {
	hello: string;
	world: number;
}
```
or
```typescript
type MyNewType = {
	hello: string,
	world: number
}
```

Now before you start jumping the gun and click the X on this tab, let me explain. 
`interface` is a way to define a set of variables in an object. It also allows for other methods but thats for a later time. Now a `type` is a more simpler way to define a custom type but fair warning, interfaces and types don't exactly work the same. I would like to go into that but this is a intro post. So next time :'(

Now lets say I want to use this `interface` or `type`, I would just do this:

```typescript
function runMe(u: MyType): void {
	console.log(u.hello); // I now have access to hello.
	console.log(u.world); // I also have access to world.
}

```
So in my code, I'm saying that `u` is an Object with the keys `hello` and `world`. I also have access to their values. Let's say I was to pass a string to the param, it would throw an error because Typescript  is  expecting an object in this param, not a string. In javascript, once you execute  the  code, it  will run until you hit the point  where it says `undefined`. So you wouldn't get the result you  expected. Typescript immediately tells you you are doing wrong while javascript just lets you rock with it.

Now did you also notice what I did in that function regarding a type? I'll give you a minute....Okay, ready? 
I added the `void` keyword at the end of the function. Now the `void` type just means nothing. Like nothing is being returned. Most of the functions  that you write are a void function...A function that returns nothing. 
But you can return other types if you like. For instance:

```typescript
function runMe(u: MyType): string {
	return u.hello; // Returns a string
}
```

or

```typescript
function runMe(u: MyType): number {
	return u.world; // Returns a number
}

```

or  with your custom type:

```typescript
function runMe(u: string, p: number): MyType {
	return  {
		hello: u,
		world: p
	}
}
```

and thats how you set up your types. Again, I can't go into too much details, this is only an intro post. 


## Ok so what's the point?

Well the point is that we want to make the code a whole lot easier to read. If you currently look at your javascript code, do you fully wrote? Those empty defined variables, do you know what type they will be containing later on? To be honest, sometimes I would struggle to read my old  javascript code. I would forget the purpose of a variable and not exactly remember what it was used for. 
Typescript just makes things a little more simpler. 

