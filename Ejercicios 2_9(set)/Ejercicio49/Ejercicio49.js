let set1 = new Set([1,2]);
let set2 = new Set([1,2,3,4]);

let esSubconjunto = true;

for(let numero of set1){
    if(!set2.has(numero)){
        esSubconjunto = false;
        break;
    }
}
console.log(esSubconjunto);