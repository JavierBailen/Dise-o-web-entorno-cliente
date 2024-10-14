let set1 = new Set([1,2,3]);
let set2 = new Set([2,3,4]);

let set3 = new Set([...set1].filter(numero =>set2.has(numero)));

console.log(set3);