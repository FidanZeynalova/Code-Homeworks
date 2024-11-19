let cardwrappers = document.querySelector(".cards-wrapper")
let searchInput = document.querySelector("#find")
let toAfromZ = document.querySelector(".start")
let toZfromA = document.querySelector(".end")



import {
    GetAllData,
    GetAllDataId,
    GetAllDataDelete,
    // GetAllPost,
    UpdateData
} from "./getdata.js";

import { BaseURL } from "./baseUrl.js";




GetAllData(BaseURL)
    .then(res => {
        const data = res.data
        data.forEach(cards => {
            cardwrappers.innerHTML += `
         <div class="card">
             <div class="content">
    "id": ${cards.id}, <br>
    "companyName": ${cards.companyName},<br>
    "contactName": ${cards.contactName},<br>
    "contactTitle": ${cards.contactTitle},<br>
    "address": {
      "street": ${cards.street},<br>
      "city": ${cards.city},<br>
      "region": ${cards.region},<br>
      "postalCode": ${cards.postalCode},<br>
      "country": ${cards.country},<br>
      "phone": ${cards.phone}<br>
    
             </div>
             <div class="buttons">
                <button id="details">Details</button>
                <button id="delete">Delete</button>
                <button id="edit">Edit</button>
             </div>
            </div>`

        });

        let sortButtonCount = 0
        toAfromZ.addEventListener("click", (e) => {
          e.preventDefault()
          sortButtonCount++
          if (sortButtonCount % 2 == 1) {
            let newDatas = data.toSorted((a, b) => b.childrenAge - a.childrenAge)
            Children(newChildrens)
        
          } else {
            Children(childrens);
        
          }
        })



        searchInput.addEventListener("keyup", () => {
            let letter = data.filter(value => value.companyName.toLowerCase().includes(`${searchInput.value}`.toLocaleLowerCase()))
            GetAllData(letter)
          })
        
    })

  







// GetAllDataId(BaseURL,1)
// .then(res => console.log(res.data))

// GetAllDataDelete(BaseURL,5)
// .then(res => console.log(res.data))

// let newData = {
//     address:"Xacmaz",
//     city: "10"
// }

// GetAllPost(BaseURL,newData)
// .then(res => console.log(res.data))



// UpdateData(BaseURL,4,updateDate)
// .then(res => console.log(res.data))