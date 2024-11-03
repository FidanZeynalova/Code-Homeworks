// 1. Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

let a = 345
let stringA = String(a)
let sum = 0
let hasil = 1
let average = 0
for (let i = 0; i < stringA.length; i ++){
    sum += Number(stringA[i])
    hasil *= stringA[i]
    average = sum / stringA.length
}
console.log(sum);
console.log(hasil);
console.log(average);


