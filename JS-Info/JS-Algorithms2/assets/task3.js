// 3. 
let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// 3.1 sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

let boslug = 0
for (let i = 0; i < sampleNews.length; i ++){
    if(sampleNews[i] == " "){
        boslug ++
    }
}
console.log(boslug);

// 3.2 sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın.

let noqte = 0
let vergul = 0
for(let i = 0; i < sampleNews.length;i ++){
    if (sampleNews[i] == ".") {
        noqte ++
    }
    if (sampleNews[i] == ",") {
        vergul ++
    }
}
console.log(noqte + " nöqtə, " + vergul + " vergül var");

// 3.3 sampleNews mətnində neçə hərf olduğunu tapan proqram yazın(vergül ve boşluqlar nezere alınmasın.)

let letterCount = 0
for (let i = 0; i < sampleNews.length;i ++){
    if ( sampleNews !== "," && sampleNews !== " ") {
        letterCount ++
    }
}
console.log(letterCount);


// 3.4 sampleNews mətnində neçə söz olduğunu tapan proqram yazın.

let splitSampleNews= sampleNews.split( " " )
console.log(splitSampleNews.length);




