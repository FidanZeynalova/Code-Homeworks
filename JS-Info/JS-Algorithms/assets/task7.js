// 7. Bir function yazin bir reqem qebul edir ve hemin reqemin perfect number olub-olmamasini yoxlayir. Perfect number - ededin ozunden bashqa butun bolenlerinin cemin ededin ozune beraberdir-se o zaman eded perfect number hesab olunur. Meselen 6 -->  1+2+3 =  6, demeli 6 perfect number-dir.

function perfectNumber(eded) {
    let sum = 0
    for (let i = 0; i < eded; i ++){
        if (eded % i == 0){
            sum += i
        }
    }
    if (sum == eded) {
        console.log(eded + " ədəd mükəmməl ədəddir.");
    
    }else{
        console.log(eded + " ədəd mükəmməl ədəd deyil.");

    }
}
perfectNumber(6)