import BaseUrl from "./requests/baseUrl.js"
import { GetDataById, GetAllDatas, UpdateData } from "./requests/requets.js"



// Selectors
let cardWrapper = document.querySelector(".card-wrapper")
let basket = JSON.parse(localStorage.getItem("basket")) || []

let userId = JSON.parse(localStorage.getItem("UserInfo"))
function GetFavorites() {
  GetDataById(`${BaseUrl}/users`, userId)
    .then(res => {
      // Userin Fav arrayi(id-lerle)
      let user = res.data
      let myFavs = res.data.favorites

      GetAllDatas(`${BaseUrl}/products`)
        .then(res => {
          // Mehsullarin butun datalari olan arraydir
          let products = res.datas


          let myFavoriteProducts = [];

          myFavs.forEach(myFav => {
            myFavoriteProducts.push(products.find((product) => myFav == product.id))
          })
          console.log(myFavoriteProducts)
          if (myFavoriteProducts.length > 0) {
            myFavoriteProducts.forEach(myFavoriteProduct => {
              cardWrapper.innerHTML += `
                   <div class="card">
                <div class="image"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkT9O_Sa_8B9L4gz3Xrj2MZ0hMgrzJstJvA&s" alt=""></div>
                <div class="content">
                    <p>${myFavoriteProduct.brand}</p>
                    <p>${myFavoriteProduct.model}</p>
                    <p>${myFavoriteProduct.operatingSystem}</p>
                    <p>Year: ${myFavoriteProduct.year}</p>
                    <p>${myFavoriteProduct.price}$</p>
                  <div class="icons">
                    <i class="fa-solid nofav fa-trash " data-id = ${myFavoriteProduct.id}></i>
                    <i class="fa-solid fa-cart-shopping" data-id = ${myFavoriteProduct.id}></i>
                  </div>
                </div>
            </div>`


              let noFavs = document.querySelectorAll(".nofav")
              noFavs.forEach(noFav => {
                noFav.addEventListener("click", () => {
                  let noFavId = noFav.getAttribute("data-id")
                  let findedNoFav = myFavs.find(myfav => myfav == noFavId)
                  let noFavIndex = myFavs.indexOf(findedNoFav)
                  myFavs.splice(noFavIndex, 1)
                  UpdateData(`${BaseUrl}/users`, userId, user)

                })
              })

              let goBaskets = document.querySelectorAll(".fa-cart-shopping")
              goBaskets.forEach(goBasket => {
                goBasket.addEventListener("click",()=>{
                  let productId = goBasket.getAttribute("data-id")
                  AddBasket(productId)

                  
                })
              })

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

function AddBasket(productId) {
  let findedBasketProduct = basket.find(product => product.id == productId)
  if (findedBasketProduct) {
      findedBasketProduct.count++
  } else {
      findedBasketProduct = { id: productId, count: 1 }
      basket.push(findedBasketProduct)
      localStorage.setItem("basket", JSON.stringify(basket))
  }
}