// 5.Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)
// let arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
// let cutMax = 0
// let tekMin = arr[0]
// for( let i = 0; i < arr.length; i ++){
//     if (cutMax < arr[i] && arr[i] % 2 == 0) {
//         cutMax = arr[i]
//     }
//     if (tekMin > arr[i] && arr[i] % 2 == 1) {
//         tekMin = arr[i]
//     }
   
// }
// let maxResultIndex = arr.indexOf(cutMax)
// let minResultIndex = arr.indexOf(tekMin)


// console.log(cutMax,maxResultIndex);
// console.log(tekMin,minResultIndex);


let arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];
let cutMax = 0; 
let tekMin = arr[0];   
let cutMaxIndex = -1;    
let tekMinIndex = -1;     

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
        if (arr[i] > cutMax) {
            cutMax = arr[i];
            cutMaxIndex = i; 
        }
    } else { 
        if (arr[i] < tekMin) {
            tekMin = arr[i];
            tekMinIndex = i; 
        }
    }
}

if (cutMaxIndex !== -1 && tekMinIndex !== -1) { 
    let temp = arr[cutMaxIndex];
    arr[cutMaxIndex] = arr[tekMinIndex];
    arr[tekMinIndex] = temp;
}
console.log(arr);





