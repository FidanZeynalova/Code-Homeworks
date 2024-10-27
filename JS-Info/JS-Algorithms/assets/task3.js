// 3. Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr rəqəmlərdən ibarət array , ikinici parametr isə rəqəm olsun. Arraydəki bütün  rəqəmlər daxil edilən ikinci parametrin bölənləridirsə, funksiya true return etsin, yox bir dənəsi belə böləni deyilsə false qaytarsın.
// console.log(checkFactors([2,3,4,6],12))
// Expected Output:
// true
// console.log(checkFactors([2,3,4,5],12))
// Expected Output:
// false

function checkFactors(ededler,eded) {
    for(let i = 0;i < ededler.length; i ++){
        if (eded % ededler[i] !== 0) {
            return false
        }
    }
    return true
}
console.log(checkFactors([2,3,4,6],12))
console.log(checkFactors([2,3,4,5],12))
