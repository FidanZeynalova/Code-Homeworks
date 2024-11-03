// 14. Bir yemək reseptinin həm istifadə olunan maddələrin sayına, həm də sağlamlıq vəziyyətinə görə çətinlik və sağlamlıq dərəcəsini müəyyən edin.
// : Əgər resept 10-dan çox maddə istifadə edirsə, çətinlik səviyyəsi "Çətin" olur. Eyni zamanda əgər 3-dən çox yağlı maddə varsa, "Sağlam deyil" olaraq işarələnir.
// : Əgər resept 5-10 arası maddə istifadə edirsə, "Orta" olur. Əgər 1-3 arası yağlı maddə varsa, "Orta Sağlam" olur.
// : Əgər resept 5-dən az maddə istifadə edirsə, "Asan" olur. Yağlı maddə yoxdursa, "Sağlam" olur.


let madde = 9 //Reseptdə istifadə olunan maddələrin sayını daxil edin.
let yagliliq = 4  //Maddədə istifadə olunan yağlılıq olan maddənin sayını daxil edin.

if (madde > 10) {
    console.log(madde + " Sağlam deyil.");
    if(yagliliq > 3){
        console.log(yagliliq + " Çətindir")     
    }
}else if(madde >= 5 && madde <= 10){
    console.log(madde + " Orta Sağlam ");
    if (yagliliq <= 3 && yagliliq >=1) {
        console.log (yagliliq + " Orta")
    }
}else if(madde > 0 && madde < 5){
    console.log(madde + " Sağlam");
    if (yagliliq == 0 ) {
        console.log(yagliliq + " Asan")
    }
}else{
    console.log("Düzgün rəqəm daxil edin.")
}
