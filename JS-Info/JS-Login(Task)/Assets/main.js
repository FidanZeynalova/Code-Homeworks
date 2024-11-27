import { GetDataById, GetAllDatas, UpdateData } from "./requests/requets.js"
import BaseUrl from "./requests/baseUrl.js"



// Selectors
let auth = document.querySelector(".auth")
let cardWrapper = document.querySelector(".card-wrapper")
let favPage = document.querySelector(".fav")
let basketPage = document.querySelector(".basket")
let basket = JSON.parse(localStorage.getItem("basket")) || []

function GetLocalId() {
    let userId = JSON.parse(localStorage.getItem("UserInfo"))
    if (userId) {
        GetDataById(`${BaseUrl}/users`, userId)
            .then(res => {
                let userName = res.data.name

                auth.innerHTML = `
            <span>Welcome, ${userName}!</span>
            <button class="logout">Log Out</button>`


                let logOut = document.querySelector(".logout")
                logOut.addEventListener("click", () => {
                    localStorage.removeItem("UserInfo")
                    GetLocalId()

                })
            })

    } else {
        auth.innerHTML = `
        <button class="login">Login In</button>`
        let logIn = document.querySelector(".login")
        logIn.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    }

}
GetLocalId()

function GetProducts() {
    GetAllDatas(`${BaseUrl}/products`)
        .then(res => {

            // Search
            let searchInput = document.querySelector("#search")
            searchInput.addEventListener("input", (e) => {
                let searchFilter = res.datas.filter(({ model }) => model.toLowerCase().startsWith(e.target.value.trim().toLowerCase()));
                console.log(searchFilter);
                ShowProducts(searchFilter)
            })

            // Sort
            let sortSelect = document.querySelector(".form-select")
            sortSelect.addEventListener("change", (e) => {
                let sortSelectData;
                switch (e.target.value) {
                    case "firstCheap":
                        sortSelectData = res.datas.toSorted((a, b) => a.price - b.price)
                        break;
                    case "firstExpensive":
                        sortSelectData = res.datas.toSorted((a, b) => b.price - a.price)
                        break;
                    case "fromAtoZ":
                        sortSelectData = res.datas.toSorted((a, b) => a.model.localeCompare(b.model))
                        break;
                    case "fromZtoA":
                        sortSelectData = res.datas.toSorted((a, b) => b.model.localeCompare(a.model))
                        break;
                    default:
                       sortSelectData = [...res.datas]
                }
                ShowProducts(sortSelectData)
            })
            ShowProducts(res.datas)
        })
}


function ShowProducts(products) {
    cardWrapper.innerHTML = ``
    products.forEach(product => {
        cardWrapper.innerHTML += `
                <div class="card"  data-id="${product.id}">
                <div class="image"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkT9O_Sa_8B9L4gz3Xrj2MZ0hMgrzJstJvA&s" alt=""></div>
                <div class="content">
                    <p>${product.brand}</p>
                    <p>${product.model}</p>
                    <p>${product.operatingSystem}</p>
                    <p>Year: ${product.year}</p>
                    <p>${product.price}$</p>
                  <div class="icons">
                    <i class="fa-regular fa-heart" data-id = "${product.id}"></i>
                    <i class="fa-solid fa-cart-shopping" data-id ="${product.id}"></i>
                  </div>
                </div>
            </div>`


        let cards = document.querySelectorAll(".card")
        cards.forEach(card => {
            card.addEventListener("click", () => {
                console.log(card.dataset.id);

                window.location = "./detail.html?id=" + Number(card.dataset.id);
            })
            let favBtns = document.querySelectorAll(".fa-heart")
            favBtns.forEach(favBtn => {
                favBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                })
            })

            let basketBtns = document.querySelectorAll(".fa-cart-shopping")
          basketBtns.forEach(basketBtn => {
            basketBtn.addEventListener("click", () => {
                let userInfo = JSON.parse(localStorage.getItem("UserInfo"))
                if (!userInfo) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Login olmadığınız üçün məhsulu səbətinizə əlavə edə bilməzsiniz!",
                    }).then(function () {
                        window.location.href = "login.html";
                    });
                } else {
                    let productId =basketBtn.getAttribute("data-id")
                    let userId = userInfo
                    AddProductBasket(userId, productId)
                }
            })
        })
        })

        let favBtns = document.querySelectorAll(".fa-heart")
        favBtns.forEach(favBtn => {
            favBtn.addEventListener("click", () => {
                let userInfo = JSON.parse(localStorage.getItem("UserInfo"))
                if (!userInfo) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Login olmadığınız üçün məhsulu favorilərə əlavə edə bilməzsiniz!"
                    }).then(function () {
                        window.location.href = "login.html";
                    });
                } else {
                    let productId = favBtn.getAttribute("data-id")
                    let userId = userInfo
                    AddFavorites(userId, productId)
                }
            })
        })

        let baskets = document.querySelectorAll(".fa-cart-shopping")
        baskets.forEach(basket => {
            basket.addEventListener("click", () => {
                let productId = basket.getAttribute("data-id")
                AddBasket(productId)

            })
        })
    });
}
function AddFavorites(userId, productId) {
    GetDataById(`${BaseUrl}/users`, userId)
        .then(res => {

            if (!res.data.favorites.includes(productId)) {
                res.data.favorites.push(productId)
                UpdateData(`${BaseUrl}/users`, userId, res.data)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Bu məhsul artıq favorilərinizdə var!"
                });
            }


        })
}
function AddProductBasket(userId, productId) {
    GetDataById(`${BaseUrl}/users`, userId)
        .then(res => {

            if (!res.data.favorites.includes(productId)) {
                res.data.favorites.push(productId)
                UpdateData(`${BaseUrl}/users`, userId, res.data)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Bu məhsul artıq səbətinizdə var!"
                });
            }


        })
}


favPage.addEventListener("click", () => {
    window.location.href = "favorites.html"
})
basketPage.addEventListener("click", () => {
    window.location.href = "basket.html"
})
GetProducts()

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