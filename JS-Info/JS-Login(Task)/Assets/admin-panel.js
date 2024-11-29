import BaseUrl from "./requests/baseUrl.js"
import { GetAllDatas, PostData } from "./requests/requets.js"



// Selectors
let addForm = document.querySelector(".add-form")
let model = document.querySelector("#model")
let brand = document.querySelector("#brand")
let operatingSystem = document.querySelector("#operatingSystem")
let year = document.querySelector("#year")
let price = document.querySelector("#price")
let image = document.querySelector("#image")
let tableForm = document.querySelector(".tbody")

addForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let productFile = image.files[0]
    if (productFile.type.includes("image/")) {
        let reader = new FileReader()
        reader.readAsDataURL(productFile)
        reader.onload = function () {


            let newPhone = {
                model: model.value,
                brand: brand.value,
                operatingSystem: operatingSystem.value,
                year: year.value,
                price: price.value,
                image: reader.result
            }
            PostData(`${BaseUrl}/products`, newPhone)
                .then(() => console.log("post olundu")
                )

        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Düzgün formatda qəbul etmirsiniz!"
        });

    }
    Clear()

})

async function GetPhones() {
    let allPhone = await GetAllDatas(`${BaseUrl}/products`)
    ShowPhones(allPhone.datas)
}
GetPhones()
function ShowPhones(allPhone) {
    tableForm.innerHTML = ``
    allPhone.forEach(({ id, model, brand, operatingSystem, price, year, image }) => {
        tableForm.innerHTML += `
        <tr>
                    <td>${id}</td>
                    <td>${model}</td>
                    <td>${brand}</td>
                    <td>${operatingSystem}</td>
                    <td>${year}</td>
                    <td>${price}$</td>
                    <td><img src="${image}" style="width: 180px;
    height: 130px;"></td>
                    <td>
                      <button><i class="fa-regular fa-pen-to-square"></i></button>
                    </td>
                    <td>
                      <button><i class="fa-solid fa-circle-info"></i></button>
                    </td>
                    <td>
                      <button><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>`

    });
}

function Clear() {
    id.value = "",
        model.value = "",
        brand.value = "",
        operatingSystem.value = "",
        year.value = "",
        price.value = ""
}