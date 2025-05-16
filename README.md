# Console Structure

This is a simple website for the girls to experiment with JavaScript and to be able to run their exercises during the camp.

## How it works

The file `playground.js` is the file where the girls are going to run their experimental code. During each day of the camp are going to complete exercises for each topic. Inside the `exercises/` folder there are JavaScript files for each exercise, so at the end of the camp each girl can have a copy of their work.

It is recommended to use VS Code with the `Live Server` extension, so girls can get live updates. You can run each exercise by selecting it on the left side of the screen and clicking run on the top right of the screen.

## Features & Methods

You can write JavaScript code without any limitations inside each exercise, but you should use a different method if you want to use `console.log()`.

There are 2 methods that you can use: `display()` and `displayLn()`. It is recommend to use `displayLn()`, because it adds an new line at the end, but `display()` has it's uses as well.

You can pass multiple arguments to these functions and they automatically join your arguments with a space in between. For example:

```js
displayLn('hello', 'world')
```

output

```sh
hello world
```

## Additional Features

You can customize the console prompt as well. To do so edit the `printPrompt()` function inside the [scripts.js](src/scripts.js). It is recommenced to use the default prompt because it is simpler and less distracting for the girls. 

### Some build-in prompts

```
╭─ GLOW Code:
╰─ Hello World
```

```
(\_/)
(•.•)
/>  Hello World
```

```
GLOW Code>>> Hello World
```
