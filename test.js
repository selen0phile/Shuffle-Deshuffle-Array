import {shuffle, unshuffle} from './ShuffleUnshuffle.js'

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let seed = 'hello world';
let shuffled = shuffle(arr, seed);
let unshuffled = unshuffle(shuffled, seed);

console.log('Original array: ', arr);
console.log('Shuffled array: ', shuffled);
console.log('Unshuffled array: ', unshuffled);
