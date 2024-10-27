// 12. Bir tələbənin imtahan nəticəsinə əsasən aldığı qiyməti və əlavə bonus xalını hesablayın. Bonus xalları, tələbənin iştirak etdiyi əlavə fəaliyyətlərdən gəlir.
// : Əgər tələbənin qiyməti 85 və daha yuxarıdırsa və 3-dən çox fəaliyyətə qatılıbsa, qiymətinə +5 bonus əlavə olunur.
// : Əgər tələbənin qiyməti 70-84 arasındadırsa və ən azı 2 fəaliyyətə qatılıbsa, qiymətinə +3 bonus əlavə olunur.
// : Əgər tələbənin qiyməti 60-69 arasındadırsa və 1 fəaliyyətə qatılıbsa, qiymətinə +2 bonus əlavə olunur.
// : Bonuslar əlavə edildikdən sonra yekun qiymət 100-ü keçə bilməz.


let result = Number("80")
let fealiyyet = Number("2")
let sum = result

if (result >= 85 && result <= 100 && fealiyyet > 3) {
    sum += 5
    netice = `əlavə +5 bonus bal qazandınız və yekun nəticəniz ${sum}`
    console.log(netice);
}else if (result <= 84 && result >= 70 && fealiyyet <= 2 && fealiyyet < 1){
    sum += 3
    netice = `əlavə +3 bonus bal qazandınız və yekun nəticəniz ${sum}`
    console.log(netice);
}else if (result <= 69 && result >= 60 && fealiyyet == 1){
    sum += 2
    netice = `əlavə +2 bonus bal qazandınız və yekun nəticəniz ${sum}`
    console.log(netice);
}else{
    console.log("Düzgün rəqəm daxil edin");
}
