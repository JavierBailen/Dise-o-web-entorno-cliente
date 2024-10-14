let set1 = new Set([1,2,3]);
let set2 = new Set([3,4,5]);

let set3 = new Set([...set1,...set2]);

console.log(set3);