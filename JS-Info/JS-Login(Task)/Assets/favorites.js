import BaseUrl from "./requests/baseUrl.js"
import { GetDataById,GetAllDatas,UpdateData } from "./requests/requets.js"



// Selectors
let cardWrapper = document.querySelector(".card-wrapper")


let userId = JSON.parse(localStorage.getItem("UserInfo"))
function GetFavorites() {
    GetDataById(`${BaseUrl}/users`,userId)
    .then(res =>{
        // Userin Fav arrayi(id-lerle)
        let myFavs = res.data.favorites
        GetAllDatas(`${BaseUrl}/users`)
        .then(res =>{
            // Mehsullarin butun datalari olan arraydir
            let products = res.datas
            
            let myFavoriteProducts = products.filter(product=>myFavs.includes(product.id))
            console.log(myFavs);
            
            
            
          if (myFavoriteProducts.length > 0) {
            myFavoriteProducts.forEach(myFavoriteProduct => {
                cardWrapper.innerHTML += `
                   <div class="card">
                <div class="image"> <img src="${myFavoriteProduct.image}" alt=""></div>
                <div class="content">
                    <p>${myFavoriteProduct.name}</p>
                    <p>${myFavoriteProduct.description}</p>
                    <p>${myFavoriteProduct.price}$</p>
                  <div class="icons">
                    <i class="fa-solid nofav fa-trash " data-id = ${myFavoriteProduct.id}></i>
                    <i class="fa-solid fa-cart-shopping" data-id = ${myFavoriteProduct.id}></i>
                  </div>
                </div>
            </div>`

            // let noFavs = document.querySelectorAll(".nofav")
            //     noFavs.forEach(noFav =>{
            //         noFav.addEventListener("click",()=>{
            //             let noFavId = noFav.getAttribute("data-id")
            //              let findedNoFav = myFavs.find(myfav => myfav == noFavId)
            //              let noFavIndex = myFavs.indexOf(findedNoFav)
            //              myFavs.splice(noFavIndex,1)
            //              UpdateData(`${BaseUrl}/users`,userId,res.datas)
            //              .then(() => GetFavorites())
            //         })
            //     })
            });
          } 
          else {
            cardWrapper.innerHTML = `<div class = "content"><span class = "emptyFavorites">Sizin favorilər hal hazırda boşdur elə indi qeydiyyatdan keçin və əyləncəli alış-verişin dadını çıxarın.</span>
            <button id = "emptyFavorites"><a href = "main.html">Go Shopping</a></button></div>`
          }
            
        })
    })
}
GetFavorites()