let container = document.createElement("div");
container.className = "container";
container.style.width = "960px"
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.justifyContent = "center"
container.style.alignItems = "center"
container.style.margin = "120px auto"


let largeBox = document.createElement("div")
largeBox.className = "largeBox"
largeBox.textContent = "960 x 360"
largeBox.style.width = "100%"
largeBox.style.height = "360px"
largeBox.style.backgroundColor = "#333333"
largeBox.style.color = "white"
largeBox.style.fontSize = "40px"
largeBox.style.display = "flex"
largeBox.style.justifyContent = "center"
largeBox.style.alignItems = "center"
largeBox.style.margin = "0px auto"
container.appendChild(largeBox)


let smallBoxes = document.createElement("div")
smallBoxes.className = "smallBoxes"
smallBoxes.style.width = "100%"
smallBoxes.style.display = "flex"
smallBoxes.style.margin = "2%"
smallBoxes.style.gap = "30px"


for(let i = 0; i < 3; i ++){
let smallBox = document.createElement("div")
smallBox.className = "smallBox"
smallBox.textContent = "290 x 180"
smallBox.style.width = "100%"
smallBox.style.height = "180px"
smallBox.style.backgroundColor = "#333333"
smallBox.style.color = "white"
smallBox.style.fontSize = "20px"
smallBox.style.display = "flex"
smallBox.style.justifyContent = "center"
smallBox.style.alignItems = "center"
smallBoxes.appendChild(smallBox)
}

let textBoxes = document.createElement("div")
textBoxes.className = "textBoxes"
textBoxes.style.display = "flex"
textBoxes.style.gap = "30px"


for(let i = 0; i < 3; i ++){

let textBox = document.createElement("div")
textBox.className = "textBox"
textBox.style.display = "flex"
textBox.style.flexDirection = "column"

let h3 = document.createElement("h3")
h3.textContent = "Lorem, ipsum dolor"
h3.style.fontStyle = "italic"
h3.style.margin = " 0px"

let p = document.createElement("p")
p.textContent = "Lorem ipsum dolor sit amet consectetur  ore adipisicing elit. Laboriosam, quia."
p.style.margin = "10px 0px"


let a = document.createElement("a")
a.setAttribute("href","#")
a.textContent = "Read More ~"
a.style.color = "red"
a.style.textDecoration = "none"
a.style.textAlign = "right"


textBox.append(h3,p,a)
textBoxes.appendChild(textBox)
}


container.append(smallBoxes,textBoxes)

document.body.appendChild(container)