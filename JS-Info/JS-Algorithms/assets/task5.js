// 5. Funksiya yazın.İki parametr qəbul etsin. Birinci parametr array, ikinci parametr isə bir ədəd olsun. Funksiyanız bu array içərisində olan ədədlərdən parametr kimi daxil etdiyimiz ədəddən kiçik və ya ona bərabər olan ən böyük ədəddi tapmalıdır.Məsələn 
// findBigNumber([11,2,32,4,57,6], 45) burada 45 -dən kiçik olan ən böyük ədəd 32-dir. Deməli 32-ni return edəcək.

function findBigNumber(ededler,eded) {
    let max = 0
    for(let i = 0;i < ededler.length; i ++){
        if (eded >= ededler[i]) {
            if (max < ededler[i]) {
                max = ededler[i]
            }    
        }
    }
    return max
}
console.log(findBigNumber([11,2,32,4,57,,45,6], 45));
