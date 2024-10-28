// 9.  Bir function yazin bir reqem parametri Qebul edir ve hemin reqeme uygun olan ayin adini qaytarir, meselen 5 daxil olunsa function "May" return etmelidir, eger 12-den boyuk ve ya menfi olan bir deyer daxil olunsa invalid input return etmelidir.

function myFunc(ay) {
    switch (ay) {
        case 1:
            console.log("Yanvar");
            break;
        case 2:
            console.log("Fevral");
            break;
        case 3:
            console.log("Mart");
            break;
            case 4:
                console.log("Aprel");
                break;
            case 5:
                console.log("May");
                break;
            case 6:
                console.log("Iyun");
                break;
            case 7:
                console.log("Iyul");
                break;
            case 8:
                console.log("Avqust");
                break;
            case 9:
                console.log("Sentyabr");
                break;
            case 10:
                console.log("Oktyabr");
                break;
            case 11:
                console.log("Noyabr");
                break;
            case 12:
                console.log("Dekabr");
                break;
    
        default:
            console.log("Invalid Input");
            break;
    }
}
myFunc(5)