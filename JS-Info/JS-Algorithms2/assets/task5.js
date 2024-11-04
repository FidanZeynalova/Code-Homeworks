// 5.Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz).

let arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
let cutMax = 0
let tekMin = arr[0]
for( let i = 0; i < arr.length; i ++){
    if (cutMax < arr[i] && arr[i] % 2 == 0) {
        cutMax = arr[i]
    }
    if (tekMin > arr[i] && arr[i] % 2 == 1) {
        tekMin = arr[i]
    }
   
}
let maxResultIndex = arr.indexOf(cutMax)
let minResultIndex = arr.indexOf(tekMin)
let newMaxSplice = arr.splice(maxResultIndex,1,tekMin)
let newMinSplice = arr.splice(minResultIndex,1,cutMax)
console.log(arr);









