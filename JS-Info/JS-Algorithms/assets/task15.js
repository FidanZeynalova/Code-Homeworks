// 15. Bir istifadəçinin yaşına və gəlirinə görə mənzil krediti üçün uyğun olub-olmadığını müəyyən edin. Şərtlər bir qədər mürəkkəbdir.
// : Əgər istifadəçi 25-40 yaş arasındadırsa və gəliri 5000 TL-dən çoxdursa, müraciət uyğundur.
// : Əgər istifadəçi 40 yaşdan böyükdürsə və gəliri 7000 TL-dən çoxdursa, uyğun sayılır.
// : Əgər istifadəçi 25 yaşdan kiçikdirsə, amma 10000 TL-dən çox gəliri varsa, uyğun sayılır.
// : Bu şərtlərdən heç biri yerinə yetirilmirsə, müraciət rədd edilir.


let age = Number(prompt("Yaşınızı daxil edin."));
let salary = Number(prompt("Maaşınızı daxil edin."));

if (age >= 25 && age <= 40) {
    if (salary > 5000) {
        alert("Mənzil krediti uyğundur.");  
    } else {
        alert("Mənzil krediti uyğun deyil.");
    }
} else if (age > 40) {
    if (salary > 7000) {
        alert("Mənzil krediti uyğundur.");
    } else {
        alert("Mənzil krediti uyğun deyil.");
    }
} else if (age < 25) {
    if (salary > 10000) {
        alert("Mənzil krediti uyğundur.");
    } else {
        alert("Mənzil krediti uyğun deyil.");
    }
} else {
    alert("Müraciət uyğun deyil.");
}



