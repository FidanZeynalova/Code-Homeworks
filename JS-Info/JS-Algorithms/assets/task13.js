// 13. İstifadəçinin online sifarişinə əsasən çatdırılma müddəti və kargo haqqını hesablayın. Sifariş məbləğinə və üzv statusuna görə çatdırılma dəyişə bilər.
// : Əgər istifadəçi Premium üzvdürsə, sifariş məbləğindən asılı olmayaraq çatdırılma 1 gün ərzində və pulsuz olur.
// : Əgər sifariş məbləği 150 TL-dən çoxdursa, kargo pulsuzdur və çatdırılma 2 gün ərzində olur.
// : Əgər sifariş məbləği 100-150 TL arasındadırsa, çatdırılma 3 gün ərzindədir və kargo 20 TL-dir.
// : Sifariş məbləği 100 TL-dən azdırsa, çatdırılma 5 gün ərzində olur və kargo haqqı 30 TL-dir.



let uzv = ("") //Üzvlük statusunuzu daxil edin.
let mebleg = Number("") //Sifariş məbləğini daxil edin.

if (uzv == "Premium" && mebleg > 0) {
    console.log("Sifarişiniz 1 gün ərzində və pulsuz gələcək.");
}else if(mebleg > 150 ){
    console.log("Sifarişiniz 2 gün ərzində gələcək");
}else if( mebleg >= 100 && mebleg <= 150){
    console.log("Sifarişiniz 3 gün ərzində gələcək və kargo pul 20 TL olacaq.");
}else if( mebleg < 100 && mebleg > 0){
    console.log("Sifarişiniz 5 gün ərzində gələcək və kargo pulu 30 TL olacaq");
}else{
    console.log("Düzgün rəqəm daxil edin.");
}
