// Task-1

// 1.  Console-da ad yaz.

// let name = ("Fidan")
// let say = 4
// for(i = 0; i < say; i++){
//     console.log(name);
// }    

// Task-2

// 2. 1-dən 10 və 100ə qədər ədədləri yazdır( həmçinin indeksini göstər.) (həmçinin 3-3 artıraraq yaz.)

//  for (i = 0; i <= 10 ; i+=3){
//     console.log({i},i);
//  }

// Task-3

// 3. geriden yazdir.

// for(i=3;i>=0;i--){
//  console.log(i);
// }


// Task-4
// 4. 1-dən 100-ə qədər ancaq cütlər

// 1-ci üsul

// for(i = 0;i <= 100;i += 2){
//     console.log(i);
// }
// 2-ci üsul

// for(i = 0;i <= 100;i++){
//     if (i % 2 == 0) {
//         console.log(i);    
//     }
// }
// Task-5
// 5. 1-100 arasında rəqəmlərdən 3-ə bölünənlər üçün konsola Fizz, 5-ə bölünənlər üçün Buzz, hər ikisinə bölünənlər üçünsə FizzBuzz yazdırın.

// for(i = 1; i <= 100;i ++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
// }else if (i % 3 == 0) {
//         console.log("Fizz");    
//     }else if(i % 5 == 0){
//         console.log("Buzz");    
//     }
// }



// Task-6
// 6.Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
// let num = 345
// let stringNum = String(num)
// let cem = 0
// let hasil = 1
// let edediOrta

// for (let i = 0;i < stringNum.length;i++){
//     cem = Number(cem) + Number(stringNum[i]);
//     hasil = hasil * stringNum[i]
//     edediOrta = cem / stringNum.length
 
// }
// console.log(cem);
// console.log(hasil);
// console.log(edediOrta);  
// Task-7
// 7. Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// let num = 35
// for( i = 0;i <= num; i++){
//     if (num % i == 0) {
//         console.log(i);  
//     }
// }

// Task-8

// 8. 1-dən 100-ə qədər ədədlərin cəmini göstər.

// let sum = 0
// for(let i = 1;i <= 100;i++){
//     sum += i    
// }
// console.log(sum);


// Task-9

// 9. Daxil edilən ədədin faktorialını tapmağı yaz.

// let num = 10;
// let faktorial = 1
// for(i = 1; i <= num;i++){
//     faktorial *= i    
// }
// console.log(faktorial);



// Task-10

// 10. Ədədin sadə və ya mürəkkəb olmasını desin.

// let num = 13;
// let sade = true
// for(let i = 2 ; i <= num-1; i++){
//     if(num%i ==0){
//         console.log("murekkebdir");
//         sade = false
//         break;
//     }
// }
// if (sade) {
//     console.log("sadedir")
// }

// Task-11

// 11. Stringlərdə hərfin tək-tək göstərilməsi

// let name = String("Fidan")
// for(i = 0;i <= name.length-1;i ++){
//     console.log(i,name[i]);  
// }


// Task-12
// 12. Stringlərdə hansısa hərfin tapılması


// Task-13
// 13. Stringlərdə neçə dənə sait olması.(iki forlu nümunədir.)

// Task-14
// 14.Bir funksiya yazın string şəklində bir parametr qəbul etsin. Bu sözün palindrom olub olmamasını tapın.Palintrom tərsdən oxunduqda da eyni olan sözlərə deyilir.

// Task-15
// 15. Arraylərdə elementi tək-tək yazdırmaq.

// Task-16
// 16. Geridən yazdırmaq.

// Task-17
// 17. Tək yerdə daynanlarla cüt yerdə dayananların hasilini tapmaq.

// Task-18
// 18. Arraydəki ən böyük və ən kiçik elementi tapmaq (2 forlu nümunə)

// Task-19
// 19. Arraydəki ədədlərin ədədi ortasını tapmaq.

// Task-20
// 20. Arraydəki elementlərdən cüt olanların sayını tapmaq.