// 8. Bir funksiya yazın. Bir ədədi parametr olaraq qəbul edir. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.

function myFunc(eded) {
    let count = 0
    if ( eded < 50){
    for ( i = 0; i <= eded; i ++){
      if ( i % 3 == 0){
        count ++
      }
   }
} else if(eded >= 50 && eded <= 100){
    for ( i = 0; i <= eded; i ++){
        if( i % 5 == 0){
          count ++
        }
      }
} else{
    for ( i = 0; i <= eded; i ++){
        if( i % 8 == 0){
          count ++
        }
      }
} 
    console.log(count);
}
myFunc(15)