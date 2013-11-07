# randomly.js

Getting random value from an array as much as you like.

## Usage

```javascript
var array = [0,1,2,3,4,5];
var rnd = Randomly(array);
var pickoutNum = 1;
var result = rnd.pickout(pickoutNum);

console.log(result.mached);   // ex) [1]
console.log(result.unmached); // ex) [0,2,3,4,5]
```

## Test

```sh
grunt
```

see http://localhost:9000/tests/qunit/test/
