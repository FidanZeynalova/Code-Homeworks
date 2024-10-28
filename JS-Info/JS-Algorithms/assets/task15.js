// 15. Bir istifadəçinin yaşına və gəlirinə görə mənzil krediti üçün uyğun olub-olmadığını müəyyən edin. Şərtlər bir qədər mürəkkəbdir.
// : Əgər istifadəçi 25-40 yaş arasındadırsa və gəliri 5000 TL-dən çoxdursa, müraciət uyğundur.
// : Əgər istifadəçi 40 yaşdan böyükdürsə və gəliri 7000 TL-dən çoxdursa, uyğun sayılır.
// : Əgər istifadəçi 25 yaşdan kiçikdirsə, amma 10000 TL-dən çox gəliri varsa, uyğun sayılır.
// : Bu şərtlərdən heç biri yerinə yetirilmirsə, müraciət rədd edilir.


let age = Number("25") //Yaşınızı daxil edin.
let salary = Number("-5100") //Maaşınızı daxil edin.

if (age >= 25 && age <= 40) {
    if (salary > 5000) {
        console.log("Mənzil krediti uyğundur.");  
    } else {
        console.log("Mənzil krediti uyğun deyil.");
    }
} else if (age > 40) {
    if (salary > 7000 && salary > 0) {
        console.log("Mənzil krediti uyğundur.");
    } else {
        console.log("Mənzil krediti uyğun deyil.");
    }
} else if (age < 25 && age > 0) {
    if (salary > 10000) {
        console.log("Mənzil krediti uyğundur.");
    } else {
        console.log("Mənzil krediti uyğun deyil.");
    }
} else {
    console.log("Müraciət uyğun deyil.");
}



