// 6. 
let students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
    { name: "Davud", scores: [100, 100, 100] } ];
//    6.1 tələbələr array-ində tələbələrin ortalaması ən yüksək olanı tapan proqram yazın.]
    let topResult = 0 
    let student = ""
    for( let i = 0; i < students.length; i ++){
       let scores = students[i].scores
       let sum = 0
       for(let j = 0; j < scores.length;j ++){
        sum += scores[j]
       }

       let average = sum / scores.length
    //    console.log(average);
       if (average > topResult) {
        topResult = average // Ən yüksək ortalama
        student = students[i].name // Ən yüksək ortalaması olan tələbə
       }
       if (average >= 90) {
        console.log(" Həm 90-dan yuxarı, həm də 90 bərabər olan ortalama balları " + average); // 90-dan yuxaro ortalama ballari  (6.2 sual) 
    }
    }
    console.log(topResult,student);
    
    
//    6.2 ortalaması 90-dan yuxarı olanları tapan proqram yazın.



    


    
