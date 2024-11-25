import { BaseUrl } from "../request/base.js";

import {
    GetAllSuppliers,
    PostSupplier,
    DeleteSupplier,
    SupplierById,
    EditSupplier
} from "../request/suppliers.js";


function GetSuppliers() {
    GetAllSuppliers(BaseUrl)
        .then(res => ShowSuppliers(res.suppliers))
}
GetSuppliers()

//Selectors
let table = document.querySelector(".categories-table")
let addForm = document.querySelector(".add-form")
let name = document.querySelector("#name")
let description = document.querySelector("#description")
let editForm = document.querySelector(".edit-form")
let overlay = document.querySelector(".overlay")
let editName = document.querySelector("#editName")
let editDescription = document.querySelector("#editDescription")
let closeButtons = document.querySelectorAll(".fa-x")



function ShowSuppliers(array) {
    table.innerHTML = ``
    array.forEach(element => {
        table.innerHTML += `
          <tr>
          <td>${element.name}</td>
          <td>
            <button class="edit" data-id=${element.id}>Edit</button>
            <button class="details" data-id =${element.id}><a href="detail.html?id=${element.id}">Details</a></button>
            <button class="delete" data-id=${element.id}>Delete</button>
          </td>
        </tr>`


        // Edit
        let editBtns = document.querySelectorAll(".edit")
        editBtns.forEach(editBtn => {
            editBtn.addEventListener("click", () => {
                let id = editBtn.getAttribute("data-id")
                editForm.style.display = "block"
                overlay.style.display = "block"

                SupplierById(BaseUrl, id)
                    .then(res => {
                        editName.value = res.suppliers.name,
                        editDescription.value = res.suppliers.description
                    })
                editForm.addEventListener("submit", (e) => {
                    e.preventDefault()
                    let newSupplier = {
                        name: editName.value,
                        description: editDescription.value
                    }
                    editForm.style.display = "none"
                    overlay.style.display = "none"

                    EditSupplier(BaseUrl, id, newSupplier)
                        .then(res => GetSuppliers())
                })

                

            })
        })

        // Delete
        let deleteBtns = document.querySelectorAll(".delete")
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", () => {
                let id = deleteBtn.getAttribute("data-id")
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        DeleteSupplier(BaseUrl, id)
                            .then(res => GetSuppliers())
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });
            })
        })


    });
}

// Add
addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (name.value.trim() != "" && description.value.trim() != "") {
        let newSupplier = {
            name: name.value,
            description: description.value
        }
        PostSupplier(BaseUrl, newSupplier)
            .then(res => GetSuppliers())
            Swal.fire({
                icon: "success",
                title: `${name.value} uğurla əlavə olundu`,
                showConfirmButton: false,
                timer: 1500
              });
        Clear()
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });
        }
})
// Clear
function Clear() {
    name.value = ""
    description.value = ""
}