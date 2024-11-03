// 2. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

let a = 12 // 2,3,4,6,12
let count = 0
for(let i = 0;i < a; i ++){
    if (a % i == 0) {
        count ++
    }
}
console.log(count);
