// 4.Bir funksiya yazın. Bu funksiya bir cümləni parametr kimi qəbul etsin və daxil edilmiş cümlə daxilində sait səslərin sayını return olunsun console.log(findVowels("salam necesen?"))
// Expected Output:
// 5

const findVowels = function(cumle){
    // let vowel = ( "a","ı","o","u","e","ə","i","ö","ü")
    let vowel = ("a,ı,o,u,e,ə,i,ö,ü")
    let count = 0
    for( i = 0; i < cumle.length; i++){
        if (vowel.includes(cumle[i].toLowerCase())) {
        count ++    
        }
    }
    return count
}
console.log(findVowels("salam necesen? Mən Fidan"))