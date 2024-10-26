// JAVASCRIPT-ilk tasklar


// Task-1
// Daxil edilən yaşa görə istifadəçinin pensiya yaşına çatıb-çatmadığını tapan proqram yazın.
// Ədəd müsbət və 125-dən balaca olmalıdır.


// let age=(prompt("Yaşınızı daxil edin."))

// if (age > 0 && age <= 125) {
//     alert("Pensiya yaşınız çatır")
// } else {
//     alert("Pensiya yaşınız çatmır")
// }



// Task-2
// Daxil edilən 3 rəqəmə əsasən üçbucağın tərəfinə görə hansı növü olduğunu müəyyənləşdirən proqram yazın.Hər üç rəqəm müsbət olmalıdır.

// let a=(prompt("üçbucağın 1-ci tərəfini daxil edin."))
// let b=(prompt("üçbucağın 2-ci tərəfini daxil edin."))
// let c=(prompt("üçbucağın 3-ci tərəfini daxil edin."))

// if (a==b && b==c && c==a) {
//     alert("Üçbucağınız bərabərtərəflidir.")
// } else if(a==b || b==c && a==c || b==c && a==c || a==b ){
//     alert("Üçbucağınız bərabəryablıdır.")   
// }
// else{
//     alert("Üçbucağınız müxtəliftərəflidir.")
// }



// Task-3
// Daxil edilən rəqəmin cüt yoxsa tək olmasını tapın.Ədəd müsbət olmadır.

// let number=(prompt("Ədədinizi daxil edin."))

// if (number>0 && number % 2 == 0) {
//     alert("sizin ədədiniz müsbət və cütdür.")
// } else if (number>0 && number % 2 == 1){
//     alert("sizin ədədiniz müsbət və təkdir.")
// }
// else{
//     alert("Düzgün ədəd daxil edin.")
// }



// Task 4:

// Daxil edilən 1-12 arasındakı müsbət rəqəmlərdən hər hansı birinə uyğun olan ayın adını yazan proqram yazın. Məsələn 2 daxil edilsən Fevral yazılmalıdır.(switch ilə yazılmalıdır.)

// let month=Number(prompt("Ayın rəqəmini daxil edin."))

// switch (month) {
//     case 1:
//            alert("Yanvar")
//            break;
//     case 2:
//            alert("Fevral")
//            break;
//     case 3:
//            alert("Mart")
//            break;
//     case 4:
//            alert("Aprel")
//            break;
//     case 5:
//            alert("May")
//            break;
//     case 6:
//            alert("Iyun")
//            break;
//     case 7:
//            alert("Iyul")
//            break;
//     case 8:
//            alert("Avqust")
//            break;
//     case 9:
//            alert("Sentyabr")
//            break;
//     case 10:
//           alert("Oktyabr")
//           break;
//     case 11:
//           alert("Noyabr")
//           break;
//     case 12:
//           alert("Dekabr")
//           break;

//     default:
//         alert("Düzgün ayın rəqəmini daxil edin.")
//         break;
// }



// Task-5

// Daxil edilən müsbət ədədin 3 və 5 ədədinə eyni anda bölünüb-bölünmədiyini tapan proqram yazın.

// let number=Number(prompt("Ədəd daxil edin."))

// if (number % 3 == 0 && number % 5 == 0 && number > 0) {
//     alert(`${number} ədədiniz 3 və 5-ə qalıqsız bölünür və müsbətdir.`)
// } else if (number % 3 == 0 && number % 5 == 0 && number < 0){
//     alert(`${number} ədədiniz 3 və 5-ə qalıqlı bölünür və mənfidir.`)
// } else {
//     alert("Daxil etdiyiniz ədəd 3 və 5ə eyni anda bölünmür.")
// }



// Task 6:

// Daxil edilən müsbət ədədin 2-yə tam bölünüb-bölünmədiyini tapan proqram yazın. Əgər tam bölünürsə, consolda bölündü yazılsın,tam bölünmürsə qalıq hesablanıb yazılsın.

// let number=Number(prompt("Ədəd daxil edin."))

// if (number > 0 && number % 2 == 0) {
//     alert(` ${number} ədəd 2-yə tam bölünür və müsbətdir.`)
// } else if(number < 0 && number % 2 == 0){
//     alert(` ${number} ədəd 2-yə tam bölünür və mənfidir.`) 
// } else{
//     alert("Daxil etdiyiniz ədəd səhvdir.")
// }



// Task 7:

// Daxil edilən müsbət ədədin 1-100 arasında olub-olmadığını tapan proqram yazın.

// let number=Number(prompt("Ədəd daxil edin"))

// if (number < 100 && number > 0) {
//     alert(` ${number} 1 və 100 arasındadır.`)
// }else if(number == 100 && number > 0 ){
//     alert(` ${number}  100-ə bərabərdir.`)
// } 
// else {
//     alert(` ${number} 1 və 100 arasında deyil.`)
// }


// Task 8:

// Daxil edilən 3 müsbət ədədin ən böyüyünü tapan proqram yazın.

// let a=Number(prompt("1-ci ədədi daxil edin."))
// let b=Number(prompt("2-ci ədədi daxil edin."))
// let c=Number(prompt("3-ci ədədi daxil edin."))

// if (a > 0 && b > 0 && c > 0 ) {
//     if (a > b && a > c ) {
//         z=`Ən böyük ədəd ${a} yəni a-dır.`
//     alert(z)
//   } else if(b > a && b > c) {
//       z=`Ən böyük ədəd ${b} yəni b-dir.`
//     alert(z)     
// } else if (c > a && c > b)
//       z=`Ən böyük ədəd ${c} yəni c-dir.`
//     alert(z)     
// }else{
//     z="düzgün rəqəm daxil edin. "
//     alert(z)     
// }

// Task - 9

// Düzgün üçbucaq qurmaq üçün proqram yazın.
// let a=Number(prompt("1-ci ədədi daxil edin."))
// let b=Number(prompt("2-ci ədədi daxil edin."))
// let c=Number(prompt("3-ci ədədi daxil edin."))

// if (a > 0 && b > 0 && c > 0 ) {
//     if ((a+b)>c && Math.abs(a-b)<c) {
//         if (a==b && b==c && c==a) {
//             alert("Üçbucağınız bərabərtərəflidir.")
//         } else if((a==b || b==c) || (a==c || b==c) || (a==c || a==b) ){
//             alert("Üçbucağınız bərabəryablıdır.")   
//         }
//         else{
//             alert("Üçbucağınız müxtəliftərəflidir.")
//         }
//     } 
//     else if((a+c)>b && Math.abs(a-c)<b){
//         if (a==b && b==c && c==a) {
//             alert("Üçbucağınız bərabərtərəflidir.")
//         } else if((a==b || b==c) || (a==c || b==c) || (a==c || a==b) ){
//             alert("Üçbucağınız bərabəryablıdır.")   
//         }
//         else{
//             alert("Üçbucağınız müxtəliftərəflidir.")
//         }
//     }
    
//     else if((c+b)>a && Math.abs(c-b)<a){
//         if (a==b && b==c && c==a) {
//             alert("Üçbucağınız bərabərtərəflidir.")
//         } else if((a==b || b==c) || (a==c || b==c) || (a==c || a==b) ){
//             alert("Üçbucağınız bərabəryablıdır.")   
//         }
//         else{
//             alert("Üçbucağınız müxtəliftərəflidir.")
//         }
//     }
//     else{
//         alert("qurmaq olmaz(dusturu)")
//     }
// }


// else {
//     alert("sehvdi(Duzgun formatda deyil)")
// }



// Task-10
// Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.

// let mark=Number(prompt("Aldiginiz bali daxil edin."))

// if (mark >= 100 ) {
//     alert(`sizin ${mark} baldir ve imtahan neticeniz A-dir`)
// } else if(mark > 80 && mark < 90 ){
//     alert(`sizin ${mark} baldir ve imtahan neticeniz B-dir`)
// } else if(mark > 70 && mark < 80){
//     alert(`sizin ${mark} baldir ve imtahan neticeniz C-dir`)
// }else if(mark > 60 && mark < 70 ){
//     alert(`sizin ${mark} baldir ve imtahan neticeniz D-dir`)
// }else if(mark > 0 && mark < 60){
//     alert(`sizin ${mark} baldir ve imtahan neticeniz F-dir`)
// }else{
//     alert("Duzgun balinizi daxil edin.")
// }



// Task-11
// Daxil edilən x və y ədədlərinin aşağıdakı şərtlərinə görə hesablamasını edən proqram yazın.

// Əgər x>0 və y<0 isə 4x+2y+4 ifadəsini hesablayın.
// Əgər x>0 və y=0 isə 2x-y+3 ifadəsini hesablayın.
// Əgər x<0 və y>0 isə 3x+4y+3 ifadəsini hesablayın.

// let x = Number(prompt("X ededini daxil edin"))
// let y = Number(prompt("Y ededini daxil edin"))

// if (x > 0 && y < 0) {
//     let z =4 * x + 2 * y + 4
//     alert(z)
// } else if (x > 0 && y == 0){
//     let z =2 * x -  y + 3
//     alert(z)
// }else if (x < 0 && y > 0 ){
//     let z =3 * x + 4 * y + 3
//     alert(z)
// }else{
//     alert("ededler yalnisdir")
// }

