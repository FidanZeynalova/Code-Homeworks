import BaseUrl from "./requests/baseUrl.js";
import { GetAllDatas } from "./requests/requets.js";


let basket = JSON.parse(localStorage.getItem("basket")) || []
let cardWrapper = document.querySelector(".card-wrapper")
let clearBasket = document.querySelector(".clear-basket")

async function ShowBasketProducts(){
    cardWrapper.innerHTML = ``
    let products = await GetAllDatas(`${BaseUrl}/products`)
    for(let product of basket){
        let basketProduct = products.datas.find(value => value.id == product.id)
        
        cardWrapper.innerHTML += `
        <div class="card">
                    <div class="image"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkT9O_Sa_8B9L4gz3Xrj2MZ0hMgrzJstJvA&s" alt=""></div>
                    <div class="content">
                        <p>${basketProduct.brand}</p>
                        <p>${basketProduct.model}</p>
                           <p>${basketProduct.operatingSystem}</p>
                    <p>Year: ${basketProduct.year}</p>
                    <p>${basketProduct.price}$</p>
                      <div class="icons">
                        <i class="fa-solid fa-plus" data-id = ${basketProduct.id}></i>
                        <p>${product.count}</p>
                        <i class="fa-solid fa-minus" data-id = ${basketProduct.id}></i>
                        <i class="fa-solid fa-delete-left" data-id = ${basketProduct.id}></i>
                      </div>
                </div>
            </div>` 
            let incs = document.querySelectorAll(".fa-plus")
            incs.forEach(inc =>{
                inc.addEventListener("click",()=>{
                    let id = inc.getAttribute("data-id")
                    IncreaseBasket(id)
                })
            })

            let decs = document.querySelectorAll(".fa-minus")
            decs.forEach(dec =>{
                dec.addEventListener("click",()=>{
                    let id = dec.getAttribute("data-id")
                    DecreaseBasket(id)
                })
            })
            let deleteBtns = document.querySelectorAll(".fa-delete-left")
            deleteBtns.forEach(deleteBtn => {
                deleteBtn.addEventListener("click",()=>{
                    let id = deleteBtn.getAttribute("data-id")
                    DeleteBasket(id)
                })
            })
    }
}
ShowBasketProducts()

 function IncreaseBasket(id){
    let findedProduct = basket.find(x => x.id == id) 
    findedProduct.count++
    localStorage.setItem("basket",JSON.stringify(basket))
    ShowBasketProducts()
}
function DecreaseBasket(id){
    let findedProduct = basket.find(x => x.id == id) 

    if (findedProduct.count!=1) {
        findedProduct.count--
    }else{
        let index = basket.indexOf(findedProduct)
        basket.splice(index,1)
    }
   
    localStorage.setItem("basket",JSON.stringify(basket))
    ShowBasketProducts()

}
function DeleteBasket(id){
    let findedProduct = basket.find(x => x.id == id) 
    let index = basket.indexOf(findedProduct)
    basket.splice(index,1)

    localStorage.setItem("basket",JSON.stringify(basket))
    ShowBasketProducts()
}
  
 function ClearBasket(){
    clearBasket.addEventListener("click",()=>{
        localStorage.removeItem("basket")
        basket = []
        ShowBasketProducts(basket)
        
    })
 }
 ClearBasket()