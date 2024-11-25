import { BaseUrl } from "../request/base.js";
import { SupplierById } from "../request/suppliers.js";

let id = new URLSearchParams(window.location.search).get("id")

let container = document.querySelector(".container")

SupplierById(BaseUrl,id)
.then(res =>
    container.innerHTML = `
        <h2>Categories Table Detail</h2>
            <div class="card">
            <p>Id:${res.suppliers.id}</p>
            <p>Name:${res.suppliers.name}</p>
            <p>Description:${res.suppliers.description}</p>
            <button><a href="main.html?id=${res.suppliers.id}">Go Back</a></button>
        </div>`
)

