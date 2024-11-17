// Header hissesi

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY
  let header = document.querySelector(".container")
  if (scrollPosition > 54) {
    header.style.position = "fixed"
    header.style.top = "0"
    header.style.backgroundColor = "rgba(188,81,72,0.6)"
    header.style.color = "white"
  } else {
    header.style.backgroundColor = "#f2f2f2"
    header.style.color = "black"
    header.style.position = "static"

  }

})

// Slayder hissesi

const sectionHero = [
  {
    image: "https://preview.colorlib.com/theme/adopted/img/slider-1.jpg.webp",
    childName: "Celine Richardson, 14 yrs. old",
    childH1: "Needs a Caring Parents",
    childButton: "Adopt Her Now!",
  },
  {
    image: "https://preview.colorlib.com/theme/adopted/img/slider-2.jpg.webp",
    childName: "Mark Rodriguez, 12 yrs. old",
    childH1: "Needs a Loving Parents",
    childButton: "Adopt Him Now!",
  }
];


let slide = document.querySelector(".slide");
let textWrapper = document.querySelector(".content")

let childName = document.querySelector("h2");
let h1 = document.querySelector(".content h1");
let heroButton = document.querySelector("button");

let arrowLeft = document.querySelector(".prev");
let arrowRight = document.querySelector(".next");

let count = 0;


function showImage(index) {
  childName.innerHTML = sectionHero[index].childName;
  h1.innerHTML = sectionHero[index].childH1;
  heroButton.innerHTML = sectionHero[index].childButton;
  document.querySelector(".image").src = sectionHero[index].image;
  if (index % 2 == 0) {
    textWrapper.style.color = "#000";
  } else {
    textWrapper.style.color = "#fff";
  }
}

arrowRight.addEventListener("click", () => {
  count = (count + 1) % sectionHero.length;
  showImage(count);
});

arrowLeft.addEventListener("click", () => {
  count = (count - 1 + sectionHero.length) % sectionHero.length;
  showImage(count);
});

showImage(count);



// Accordian hissesi

let accordians = document.querySelectorAll(".accordian-wrapper .accordian")
let heading = document.querySelector(".accordian-heading")

// let accordianHeading = document.querySelector(".accordian-heading")
accordians.forEach((acco) => {
  acco.onclick = () => {
    accordians.forEach((subcontent) => {
      subcontent.classList.remove("active")

    })
    acco.classList.add("active");
  }

})


// Children Sectionu

const oldChildrens = [
  {
    id: 1,
    image: "./assets/images/children_1.jpg.webp",
    childrenName: "Edward",
    childrenAge: 14,
    gender: "Male"
  },
  {
    id: 2,
    image: "./assets/images/children_2.jpg.webp",
    childrenName: "Mellisa",
    childrenAge: 6,
    gender: "Female"
  },

  {
    id: 3,
    image: "./assets/images/children_3.jpg.webp",
    childrenName: "Mark",
    childrenAge: 12,
    gender: "Male"
  },

]
let childrens = JSON.parse(localStorage.getItem("childrens")) || oldChildrens



let sortButton = document.querySelector("#sort")
let searchInput = document.querySelector("#search")

//Boyukden kiciye duzmek

let sortButtonCount = 0
sortButton.addEventListener("click", (e) => {
  e.preventDefault()
  sortButtonCount++
  if (sortButtonCount % 2 == 1) {
    let newChildrens = childrens.toSorted((a, b) => b.childrenAge - a.childrenAge)
    Children(newChildrens)

  } else {
    Children(childrens);

  }
})

//search hissesi

searchInput.addEventListener("keyup", () => {
  let letter = childrens.filter(value => value.childrenName.toLowerCase().includes(`${searchInput.value}`.toLocaleLowerCase()))

  Children(letter)
})



let childrenWrapper = document.querySelector(".children-wrapper")
let addForm = document.querySelector(".children-form")
let formWrapper = document.querySelector(".form-wrapper")
let name = document.querySelector("#name")
let age = document.querySelector("#age")
let image = document.querySelector("#img")
let submitButton = document.querySelector("#submit")




document.addEventListener("DOMContentLoaded", Children(childrens))


function Children(childrens) {
  childrenWrapper.innerHTML = ""
  childrens.forEach(value => {
    childrenWrapper.innerHTML += `<div class="children-card">
                            <img src="${value.image}" alt="" class="image">
                            <div class="children-content">
                                <p>${value.childrenName}, <span> ${value.childrenAge} yrs. old</span></p>
                                <div class="buttons">
                                    <button class="detail" data-id = ${value.id}>Detail</button>
                                    <button class="delete" data-id = ${value.id}>Delete</button>
                                    <button class="edit" data-id = ${value.id}>Edit</button>
                                </div>
                            </div>
                        </div>`


    childrenCard = document.querySelector(".children-card"),
      deleteButtons = document.querySelectorAll(".delete")
    deleteButtons.forEach(button => {
      button.addEventListener("click", () => {
        let id = button.getAttribute("data-id")


        // Sweet Alert
        Swal.fire({
          title: "Bu card-ı silmək üçün əminsən?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            let findedChildren = childrens.find(childrens => childrens.id == id)
            let index = childrens.indexOf(findedChildren)
            childrens.splice(index, 1)
            localStorage.setItem("childrens", JSON.stringify(childrens))
            Children(childrens)
            Swal.fire({
              title: "Deleted!",
              text: "Uğurla silindi.",
              icon: "success"
            });
          }
        });
      })
    })


    //Detail hissesi

    let detailButtons = document.querySelectorAll(".detail")
    detailButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        let modal = document.querySelector(".modal")
        let overlay = document.querySelector(".overlay")

        modal.style.display = "flex",
          overlay.style.display = "block"

        let id = button.getAttribute("data-id")
        let findedChildren = childrens.find(childrens => childrens.id == id)
        e.preventDefault()
        modal.innerHTML = `<div class="image">
                          <img src="${findedChildren.image}" alt="">
                      </div>
                   <div class="content">
                      <div class="card-title">Children Name: ${findedChildren.childrenName}</div>
                      <div class="card-text">Children Age : ${findedChildren.childrenAge} yrs. old</div>
                      <div class="card-gender">Children Gender:${findedChildren.gender}</div>
                   </div>
                   <button class="icon">
                      ❌
                   </button>
                  `

        let xButton = document.querySelector(".icon")
        xButton.addEventListener("click", () => {
          modal.style.display = "none",
            overlay.style.display = "none"
        })

      })
    })

    // Edit modulu

    let editBtns = document.querySelectorAll(".edit")
    let editForm = document.querySelector(".edit-form")
    let editChildrenForm = document.querySelector(".children-form")
    let overlay = document.querySelector(".overlay")
    let editName = document.querySelector("#editName")
    let editAge = document.querySelector("#editAge")
    let editImage = document.querySelector("#editImg")



    editBtns.forEach(editBtn => {
      editBtn.addEventListener("click", () => {
        let id = editBtn.getAttribute("data-id")

        editChildrens(id)

        let closeButton = document.querySelector(".icon")
        closeButton.addEventListener("click", () => {
          editForm.style.display = "none",
            overlay.style.display = "none"
        })

        function editChildrens(id) {

          editForm.style.display = "flex",
            overlay.style.display = "block"

          let findedChildren = childrens.find(childrens => childrens.id == id)
          let findedChildrenIndex = childrens.indexOf(findedChildren)
          editName.value = findedChildren.childrenName
          editAge.value = findedChildren.childrenAge
          editImage.value = findedChildren.image

          editForm.addEventListener("submit", (e) => {
            
            e.preventDefault()
        

              if (editName.value.trim() !== "" && editAge.value.trim() !== "" && editImage.value.trim() !== "") {
                let newEditChildrens =
                {
                  id: id,
                  image: editImage.value,
                  childrenName: editName.value,
                  childrenAge: editAge.value

                }
                childrens.splice(findedChildrenIndex,1,newEditChildrens)
                    editForm.style.display = "none",
            overlay.style.display = "none"
               Children(childrens)
               localStorage.setItem("childrens",JSON.stringify(childrens))
              

              }

          })

        }

      })
    })
  });
}


addForm.addEventListener("submit", (e) => {
  if (name.value.trim() !== "" && age.value.trim() !== "" && image.value.trim() !== "") {
    // Random IDler verir
    let id = crypto.randomUUID();
    let newChildren = {
      id: id,
      image: image.value,
      childrenName: name.value,
      childrenAge: age.value
    }
    childrens.push(newChildren)
    localStorage.setItem("childrens", JSON.stringify(childrens))
    Children(childrens)
    Clear()

    // Succes sweetAlerti
    Swal.fire({
      icon: "success",
      title: `${name.value} succesfully added`,
      showConfirmButton: false,
      timer: 2000
    });



  } else {
    // Error SweetAlerti
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
  e.preventDefault()

})

function Clear() {
  image.value = ""
  name.value = ""
  age.value = ""
}




// Featured sectionu
document.addEventListener("DOMContentLoaded", FeaturedCards)


const oldFeaturedCardsInfo = [
  {
    image: "./assets/images/work_thumb_1.jpg.webp",
    parag: "Being loved has taought me how too love"
  },
  {
    image: "./assets/images/work_thumb_2.jpg.webp",
    parag: "Being loved has taought me how too love"
  },
  {
    image: "./assets/images/work_thumb_3.jpg.webp",
    parag: "Home Sweet home"
  }
]

let featuredCards = document.querySelector(".featured-cards")
let featuredCardsInfo = JSON.parse(localStorage.getItem("oldFeaturedCardsInfo")) || oldFeaturedCardsInfo


function FeaturedCards() {
  featuredCardsInfo.forEach(value => {
    featuredCards.innerHTML += `<div class="feature-container">
                        <img src="${value.image}" alt="" class="image">
                        <div class="info">
                            <div class="plus">+</div>
                            <span>January 31, 2018</span>
                            <p>${value.parag}</p>
                        </div>
                    </div>`
  });
}


