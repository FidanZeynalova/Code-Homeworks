// 6. Bir funksiya yazın. Parametr olaraq bir ədəd qəbul etsin. Eger bu ədəd 7-ye bölünürsə ekrana "7 yə bölünür" yazılsın. Əks halda daxil olunan ədədə ən yaxın 7-yə bolunen eded ekranda yazilsin(Meselen: 17 yazilibsa ekrana  21 yox 14 cixsin, 19 yazilibsa 21 cixsin)


function myFunc(eded) {
    for ( let i = 0; i < eded; i ++){
        if (eded % 7 == 0) {
            console.log(eded + ",7-yə bölünür.");
        }else{
        const yuvarlaq = Math.round(eded / 7) * 7
        console.log(yuvarlaq)
        }
    }
}
myFunc(20)