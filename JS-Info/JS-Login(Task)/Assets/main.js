import { GetDataById,GetAllDatas,UpdateData } from "./requests/requets.js"
import BaseUrl from "./requests/baseUrl.js"



// Selectors
let auth = document.querySelector(".auth")
let cardWrapper = document.querySelector(".card-wrapper")
let favPage = document.querySelector(".fav")
let BasketPage = document.querySelector(".basket")


function GetLocalId(){
    let userId = JSON.parse(localStorage.getItem("UserInfo"))
    if(userId){
        GetDataById(`${BaseUrl}/users`,userId)
        .then(res => {
            let userName = res.data.name
            auth.innerHTML = `
            <span>${userName}</span>
            <button class="logout">Log Out</button>`
            let logOut = document.querySelector(".logout")

            logOut.addEventListener("click",()=>{
                localStorage.removeItem("UserInfo")
                GetLocalId()
    
            })
        })
      
    }else{
        auth.innerHTML = `
        <button class="login">Login In</button>`
        let logIn = document.querySelector(".login")
        logIn.addEventListener("click",()=>{
            window.location.href = "login.html"
        })
    }
    
}
GetLocalId()

function GetProducts(){
    GetAllDatas(`${BaseUrl}/products`)
    .then(res => ShowProducts(res.datas))
}
function ShowProducts(products) {
    cardWrapper.innerHTML = ``
    products.forEach(product => {
        cardWrapper.innerHTML += `
                <div class="card">
                <div class="image"> <img src="${product.image}" alt=""></div>
                <div class="content">
                    <p>${product.name}</p>
                    <p>${product.description}</p>
                    <p>${product.price}$</p>
                  <div class="icons">
                    <i class="fa-regular fa-heart" data-id = ${product.id}></i>
                    <i class="fa-solid fa-cart-shopping" data-id = ${product.id}></i>
                  </div>
                </div>
            </div>`

            let favBtns = document.querySelectorAll(".fa-heart")
            favBtns.forEach(favBtn =>{
                favBtn.addEventListener("click",()=>{
                    let userInfo = JSON.parse(localStorage.getItem("UserInfo"))
                    if(!userInfo){
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Login olmadığınız üçün məhsul favorilərə əlavə edə bilməzsiniz!"
                          });
                    }else{
                        let productId = favBtn.getAttribute("data-id")
                       let userId = userInfo
                        AddFavorites(userId,productId)
                    }
                })
            })

            // let baskets = document.querySelectorAll(".fa-cart-shopping")
            // baskets.forEach(basket =>{
            //     basket.addEventListener("click",()=>{
            //         let productId = basket.getAttribute("data-id")
            //         console.log(userId.pr);
                    
            //     })
            // })
    });
}

function AddFavorites(userId,productId) {
    GetDataById(`${BaseUrl}/users`,userId)
    .then(res => {

     if(!res.data.favorites.includes(productId)){
         res.data.favorites.push(productId)
         UpdateData(`${BaseUrl}/users`,userId,res.data)
     }else{
         Swal.fire({
             icon: "error",
             title: "Oops...",
             text: "Bu məhsul artıq favorilərinizdə var!"
           });
     }
    
     
    })
}





favPage.addEventListener("click",()=>{
    window.location.href = "favorites.html"
})

GetProducts()