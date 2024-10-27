// 11. İstifadəçiyə hava durumuna və günün vaxtına görə həm geyim, həm də ediləcək aktivite haqqında tövsiyə verin.
// : Hava temperaturu 30°C-dən yuxarıdırsa və günorta saatlarıdırsa (12-15 arası) "Çimərlik geyimi geyinin və üzməyə gedin."
// : Hava temperaturu 20-30°C arasındadırsa və səhər saatlarıdırsa (6-12 arası) "Yüngül idman geyimi geyinin və qaçışa çıxın."
// : Hava temperaturu 10-20°C arasındadırsa "Gödəkçə geyinin və gəzintiyə çıxın."
// : Əgər hava temperaturu 10°C-dən aşağıdırsa və axşam saatlarıdırsa (18-24 arası) "Qalın palto geyinin və evdə qalın."


let weather = Number(prompt("Hava durumunu daxil edin."))
let hour = Number(prompt("Saatı daxil edin."))

if (weather > 30 && hour >= 12 && hour <= 15) {
    console.log("Çimərlik geyimi geyinin və üzməyə gedin.");
}else if(weather <= 30 && weather >= 20 && hour <= 12 && hour >= 6){
    console.log("Yüngül idman geyimi geyinin və qaçışa çıxın.");
}else if(weather <= 20 && weather >= 10 && hour > 0){
    console.log("Gödəkçə geyinin və gəzintiyə çıxın.");
}else if(weather < 10 && hour <= 24 && hour >= 18){
    console.log("Qalın palto geyinin və evdə qalın.");
}else{
    console.log("Düzgün məlumat daxil edin");
}
