    // 4.Array daxilindəki ən uzun sözü tapan alqoritm yazın.

    let fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"]  
    let longestWord = " "
    for (let i = 0 ; i < fruits.length; i++){
    let trimFruit = fruits[i].trim()
        if (trimFruit.length > longestWord.length) {
            longestWord = trimFruit
        }
    }

    console.log( "cavab " + longestWord + " sözün uzunluğu isə " + longestWord.length);
    


