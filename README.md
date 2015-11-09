# JavaScript Functionalize

`functionalize` is an easy way to use methods from built-in JavaScript in a more functional manner. It's particularly useful when combining built-in types with asynchronous code.

## Usage

    npm install functionalize

```js
var functionalize = require('functionalize')
functionalize(Array)

var squareAll = Array.map(function(x){ return x * x })

squareAll([10, 20, 30]) //=> 100, 400, 900
```

By functionalizing `Array` in the above example, we get to use JavaScript's standard array methods as standalone functions (you still have access to all the original methods in the usual manner).

By itself it doesn't look that useful. However, if you work with asynchronous code such as Promises, it can make your code look more fluent:

```js

function fetchPeople () {
  return HTTP.get('/people')
    .then( Array.map(ensureName) )
}

function ensureName (person) {
  if ( ! person.name) person.name = 'anonymous';
  return person;
}
```
