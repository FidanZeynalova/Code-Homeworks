// 1.Bir fuksiya yazın. Bu funksiya rəqəmlərdən ibarət bir arrayi parametr kimi qəbul etsin.Əgər daxil olunan arraydə əgər bütün rəqəmlər təkdirsə true, cütdürsə false qaytaran funksiya yazın.

// Expected Output:
//  console.log(FindEven[3,5,7]) -> true     console.log(FindEven[2,3,5,7,8]) -> false

function FindEven(ededler) {
    for (let i = 0;i < ededler.length;i ++){
        if (ededler[i] % 2 == 0) {
            return false
        }
    }
    return true
}
console.log(FindEven(['3','5','7',]));
console.log(FindEven(['2','3','5','7',]));

