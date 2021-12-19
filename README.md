# Shuffle and Deshuffle Array in Javascript
Shuffle an array with a seed, and unshuffle back to the original with the same seed.

Implemented with Mulberry32 PRNG algorithm in plain Javascript.

```javascript
shuffle(array, alphanumericSeed)
unshuffle(array, alphanumericSeed)
```

**Example Code:**

>Download the file, put the JS in your project folder.

```javascript
import {shuffle, unshuffle} from './ShuffleUnshuffle.js'

let arr = ['a', 'b', 'c', 'd'];

let shuffled = shuffle(arr, 'hello world');
//Expect this to be a shuffled array.

let unshuffled = unshuffle(shuffled, 'hello world');
//Expect this to be similar to arr
```
