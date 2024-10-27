// 2.Bir fuksiya yazın. Bu funksiya rəqəmlərdən ibarət bir arrayi parametr kimi qəbul etsin və daxil edilən arraydə ədədlərin ədədi ortasını tapsın.Sonda nəticəni tam ədədə yuvarlaqlaşdırın.
// console.log(average([10,30,40,45,35]))
// Expected Output:
// 32

function average(ededler) {
let sum = 0
    for( let i = 0; i < ededler.length; i ++){
        sum += ededler[i]
    }
    return parseInt(sum / ededler.length);  

}
console.log(average([10,30,40,45,37]))

