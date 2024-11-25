import BaseUrl from "./requests/baseUrl.js"
import { GetAllDatas } from "./requests/requets.js"

// Selectors
let loginForm = document.querySelector(".login-form")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    GetAllDatas(`${BaseUrl}/users`)
    .then(res =>{
        let users = res.datas
        let findUser = users.find(user => user.email == email.value && user.password == password.value)
        console.log(findUser);
        
        if(findUser){
            localStorage.setItem("UserInfo",JSON.stringify(findUser.id))
            window.location.href = "main.html"
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Parol yaxud Email addressi düzgün daxil edilməyib!"
              })
        }
    }
     )

})