import { BaseUrl } from "./baseUrl.js";
import { CategoriesById } from "./categories.js";

let id = new URLSearchParams(window.location.search).get("id")

let container = document.querySelector(".container")

CategoriesById (BaseUrl,id)
.then(res => 
    container.innerHTML = `
    <div class="card">
                <span>id:${res.categories.id}</span><br>
                <span>${res.categories.name}</span><br>
                <span>${res.categories.description}</span><br>
                <button id="details" data-id=${res.categories.id}><a href = "main.html?id=${res.categories.id}">Go Back</a></button>
            </div> `
)