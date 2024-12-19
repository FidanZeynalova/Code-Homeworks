import { PostData,GetAllDatas } from "./requests/requets.js";
import BaseUrl from "./requests/baseUrl.js"

// Selectors
let registerForm = document.querySelector(".register-form");
let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newUser = {
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value,
        isAdmin: false,
        favorites: []
    }

    // Emailin databasede yoxlanmasi eger tekrar emaildirse giris olunmamalidir.    
    GetAllDatas(`${BaseUrl}/users`)
    .then(res => {
        let users = res.datas
       let findedUser = users.find(user => user.email == email.value)
       if (findedUser) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Bu email artıq qeydiyyatdan keçmişdir!"
          });
       }else{
        PostData(`${BaseUrl}/users`,newUser)
        .then(() =>{
            window.location.href="login.html"
        })
       }
        
    })


  
});


