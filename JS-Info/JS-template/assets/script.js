



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
    // point1.style.color = "#BC5148";
    // point2.style.color = "#fff";
  } else {
    textWrapper.style.color = "#fff";
    // point1.style.color = "#fff";
    // point2.style.color = "#BC5148";
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

let childrens = [
  {
    id: 1,
    image: "./assets/images/children_1.jpg.webp",
    childrenName: "Edward",
    childrenAge: "14 ",
    gender: "Male"
  },
  {
    id: 2,
    image: "./assets/images/children_2.jpg.webp",
    childrenName: "Mellisa",
    childrenAge: "6",
    gender: "Female"
  },

  {
    id: 3,
    image: "./assets/images/children_3.jpg.webp",
    childrenName: "Mark",
    childrenAge: "12",
    gender: "Male"
  },
  // {
  //   id: 4,
  //   image: "./assets/images/children_4.jpg.webp",
  //   childrenName: "Jessa",
  //   childrenAge: "13",
  //   gender: "Female"
  // },
  // {
  //   id: 5,
  //   image: "./assets/images/children_5.jpg.webp",
  //   childrenName: "Ben",
  //   childrenAge: "14",
  //   gender: "Female"
  // }
]


let childrenWrapper = document.querySelector(".children-wrapper")
let addForm = document.querySelector(".children-form")
let formWrapper = document.querySelector(".form-wrapper")
let name = document.querySelector("#name")
let age = document.querySelector("#age")
let image = document.querySelector("#img")
let submitButton = document.querySelector("#submit")




document.addEventListener("DOMContentLoaded", Children)


function Children() {
  childrenWrapper.innerHTML = ""
  childrens.forEach(value => {
    childrenWrapper.innerHTML += `<div class="children-card">
                            <img src="${value.image}" alt="" class="image">
                            <div class="children-content">
                                <p>${value.childrenName}, <span> ${value.childrenAge} yrs. old</span></p>
                                <div class="buttons">
                                    <button class="detail">Detail</button>
                                    <button class="delete" data-id = ${childrens.id}>Delete</button>
                                </div>
                            </div>
                        </div>`


       childrenCard = document.querySelector(".children-card"),
       deleteButtons = document.querySelectorAll(".delete")
    deleteButtons.forEach(button => {
      button.addEventListener("click", () => {
        let id = button.getAttribute("data-id")
        let findedChildren = childrens.find(childrens => childrens.id== id)
        console.log(findedChildren);
        
        // childrenCard.remove()
      })
    })

    // let detailButton = document.querySelectorAll(".detail")

  });
}

addForm.addEventListener("submit", (e) => {
  if (name.value.trim() !== "" && age.value.trim() !== "" && image.value.trim() !== "") {
    // Random IDler verir
    let id = crypto.randomUUID();
    let newChildren = {
      id: id,
      image: image.value,
      name: name.value,
      age: age.value
    }
    childrens.push(newChildren)
    Children(childrens)
    Clear()

    // Succes sweetAlerti
    Swal.fire({
      icon: "success",
      title: `${childrens.childrenName} succesfully added`,
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


const featuredCardsInfo = [
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


