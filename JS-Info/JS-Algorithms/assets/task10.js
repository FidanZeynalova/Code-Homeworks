// 10. Bir function yazin, function bir herf ve bir reqem qebul edir ve gonderilen reqem qeder hemin herfi yazib return edir, meselen function-a arqument olaraq 3 ve b gonderilerse output bbb olmalidir.

function myFunc(eded,herf) {
    let netice =""
    for ( let i = 0; i < eded; i ++){
        netice += herf
        
    }
    return netice
}
console.log(myFunc(3,"a"));
