// 12. Bir tələbənin imtahan nəticəsinə əsasən aldığı qiyməti və əlavə bonus xalını hesablayın. Bonus xalları, tələbənin iştirak etdiyi əlavə fəaliyyətlərdən gəlir.
// : Əgər tələbənin qiyməti 85 və daha yuxarıdırsa və 3-dən çox fəaliyyətə qatılıbsa, qiymətinə +5 bonus əlavə olunur.
// : Əgər tələbənin qiyməti 70-84 arasındadırsa və ən azı 2 fəaliyyətə qatılıbsa, qiymətinə +3 bonus əlavə olunur.
// : Əgər tələbənin qiyməti 60-69 arasındadırsa və 1 fəaliyyətə qatılıbsa, qiymətinə +2 bonus əlavə olunur.
// : Bonuslar əlavə edildikdən sonra yekun qiymət 100-ü keçə bilməz.


let result = 73 //İmtahan nəticənizi daxil edin.
let fealiyyet = 4 //İştirak etdiyiniz fəaliyyət sayını daxil edin.

let sum = result;

if (result >= 85 && fealiyyet > 3 && result <= 100) {
    sum += 5;
    if (sum >= 100 ) {
        sum = 100;
        console.log("Yekun nəticəniz" , sum);
        
    }else{
        console.log("Yekun nəticəniz" , sum);
        
    }
} else if (result >= 70 && result <= 84 && fealiyyet >= 2) {
    sum += 3; 
    console.log("Yekun nəticəniz" , sum);
} else if (result >= 60 && result <= 69 && fealiyyet >= 1) {
    sum += 2; 
    console.log("Yekun nəticəniz" , sum);
}else{
    console.log("Düzgün rəqəm daxil edin.");
    
}

// let netice = `Yekun nəticəniz ${sum}.`;
// console.log(netice);


