<!-- Github visibility -->


# Smart Counter App (Clouser Based)

## Features

- Increment / Decremnt / Reset Counter
- Private counter state using closure
- Clean DOM manipulation

## Javascript Concepts Used

- Closures
- Scope Chain
- Event handling
- DOM manipulation

## What I Learned

- How closures preserve state
- How to design private variables in JavaScript
- Separation of UI and logic

## Interview Explanation

This project uses a closure to maintain a private `count` variable.
The `createCounter()` function returns methods that can access `count`
even after the function execution is complete.