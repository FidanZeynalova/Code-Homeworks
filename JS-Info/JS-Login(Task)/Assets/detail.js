import { GetDataById } from "./requests/requets.js";
import BaseUrl from "./requests/baseUrl.js";


let container = document.querySelector(".container")
let id = new URLSearchParams(window.location.search).get("id");
// console.log(id);

 function GetDetails() {
        GetDataById(`${BaseUrl}/products`,id)
        .then(res =>{

        container.innerHTML = `
         <div class="card">
                <div class="image"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkT9O_Sa_8B9L4gz3Xrj2MZ0hMgrzJstJvA&s" alt=""></div>
                <div class="content">
                    <p>${res.data.brand}</p>
                    <p>${res.data.model}</p>
                    <p>${res.data.operatingSystem}</p>
                    <p>Year: ${res.data.year}</p>
                    <p>${res.data.price}$</p>
                  <div class="icons">
                    <i class="fa-regular fa-heart" data-id = ${res.data.id}></i>
                    <i class="fa-solid fa-cart-shopping" data-id = ${res.data.id}></i>
                </div>
            </div>
        </div> `


    })
    }
GetDetails()