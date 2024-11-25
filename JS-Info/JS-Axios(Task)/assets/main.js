import { 
    GetAllCategories,
    PostCategories,
    DeleteCategory,
    CategoriesById,
    EditCategory
 } from "../Request/categories.js";
import { BaseUrl } from "../Request/baseUrl.js";


//Selectors
let cardWrappers = document.querySelector(".cards-wrapper")
let addForm = document.querySelector(".add-form")
let name = document.querySelector("#name")
let description= document.querySelector("#description")
let editWrapper = document.querySelector(".edit-wrapper")
let editForm = document.querySelector(".edit-form")
let overlay = document.querySelector(".overlay")
let editName = document.querySelector("#editName")
let editDescripton = document.querySelector("#editDescription")
let searchInput = document.querySelector("#search")
let closeButtons = document.querySelectorAll(".fa-x")
let az = document.querySelector("#az")
let za = document.querySelector("#za")



function GetCategory(){
    GetAllCategories(BaseUrl)
    .then(res => {
        ShowCategories(res.categories)
  


        //Search
          searchInput.addEventListener("input", () => {
            let findText = res.categories.filter(value => {
                let findName = (value.name.toLowerCase())
                let inputText = (searchInput.value.toLowerCase())
                return findName.startsWith(inputText);
            });
            ShowCategories(findText);
});

        // Z-dən A-ya
        let sortAZCount = 0;
        az.addEventListener("click", (e) => {
            e.preventDefault();
            sortAZCount++;
            if (sortAZCount % 2 == 1) {
                let newDataAZ = res.categories.toSorted((a, b) => a.name.localeCompare(b.name));
                ShowCategories(newDataAZ);
                
            } else {
                ShowCategories(res.categories);
            }
        });
         // A-dan Z-yə
         let sortZACount = 0;
         za.addEventListener("click", (event) => {
             event.preventDefault();
             sortZACount++;
             if (sortZACount % 2 == 1) {
                 let newDataAZ = res.categories.toSorted((a, b) => b.name.localeCompare(a.name));
                 ShowCategories(newDataAZ);
 
             } else {
                 ShowCategories();
             }
         });

        
    })


}
GetCategory()

function ShowCategories(array){
    cardWrappers.innerHTML = ``
    array.forEach(element => {
        cardWrappers.innerHTML += `
                    <div class="card">
                <span>id:${element.id}</span><br>
                <span>${element.name}</span><br>
                <span>${element.description.slice(0,20)}</span><br>
            
            <div class="btns">
                <button id="details" data-id=${element.id}><a href = "details.html?id=${element.id}">Details</a></button>
                <button id="edit" data-id=${element.id}>Edit</button>
                <button id="delete" data-id=${element.id}>Delete</button>
            </div>
        </div>`
  


        let editButtons = document.querySelectorAll("#edit")
        editButtons.forEach(editButton => {
            editButton.addEventListener("click",()=>{
                let id = editButton.getAttribute("data-id")
                overlay.style.display = "block"
                editWrapper.style.display = "block"
                
                CategoriesById(BaseUrl,id)
                .then(res => {
                    editName.value = res.categories.name
                    editDescripton.value = res.categories.description
                })
                
                editForm.addEventListener("submit",(e)=>{
                    e.preventDefault()
                    let newCategory = {
                        name: editName.value,
                        description: editDescripton.value
                    }
                overlay.style.display = "none"
                editWrapper.style.display = "none"
                    EditCategory(BaseUrl,id,newCategory)
                    .then(res => GetCategory())
                    
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
                })
                closeButtons.forEach(closeButton =>{
                    closeButton.addEventListener("click",()=>{
                overlay.style.display = "none"
                editWrapper.style.display = "none"
                    })
                })


            
            })
        })

        let deletebuttons = document.querySelectorAll("#delete")
        deletebuttons.forEach(deletebutton =>{
            deletebutton.addEventListener("click",()=>{
                let id = deletebutton.getAttribute("data-id")
                Swal.fire({
                    title: "Silməyə əminsinizmi?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        DeleteCategory(BaseUrl,id)
                        .then(res => GetCategory())
                      Swal.fire({
                        title: "Deleted!",
                        text: "Uğurla silindi!",
                        icon: "success"
                      });
                    }
                  });
            })
        })
    })


}


addForm.addEventListener("submit",(e)=>{
    e.preventDefault()
   if (name.value.trim()!="" && description.value.trim()!="") {
    let newCategory = {
        name:name.value,
        description: description.value
    }
    PostCategories(BaseUrl,newCategory)
    .then(res => GetCategory())
    Swal.fire({
        icon: "success",
        title: `${name.value} uğurla əlavə olundu.`,
        showConfirmButton: false,
        timer: 1500
      });
      Clear()

   }else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
   }
})

function Clear(){
    name.value = "",
    description.value = ""
}


