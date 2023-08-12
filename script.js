const addButton = document.querySelector(".addButton")
const icon  = document.querySelector("i")
const colorSlider = document.querySelector(".colorSlider")
const colorDiv = document.querySelectorAll(".colorDiv")

const noteContainer = document.querySelector(".noteContainer")
const note = document.querySelector(".note")

const startingPoint = 32; // Adjust this value based on your starting point
const distanceToMove = 32; // Adjust this value based on the distance you want to move each element

let isPressed = true

let colorChoosen = null

const colorObject = {
    red : "#f69679",
    orange : "#fdc689",
    green : "#82ca9c",
    blue : "#6dcff6",
    purple : "#8393ca"
}

function noteAnimations(){
    if(isPressed){
        colorDiv.forEach((div, index) => {
            colorSlider.style.display = "flex"
            div.style.top = `${startingPoint + (index * distanceToMove)}px`;
            div.style.position = 'absolute';
            div.style.transition = 'top 0.5s ease-in-out , scale 0.2s ease ';
        });
   
        icon.style.transform = `rotate(180deg)`
    }
    else{
        colorDiv.forEach((div) => {
        div.style.top = `${startingPoint -64 }px`;
        icon.style.transform = `rotate(0deg)`

        })
    }
    isPressed = !isPressed;
}


function chooseColor(){
    colorDiv.forEach((element, index)=>{
        element.addEventListener("click", ()=>{
            let divsName = element.className
            if(divsName.includes("red")){
                colorChoosen = colorObject.red
                addNote()
            }
            
            if(divsName.includes("orange")){
                colorChoosen = colorObject.orange
                addNote()
            }
            if(divsName.includes("green")){
                colorChoosen = colorObject.green
                addNote()
            }
            if(divsName.includes("blue")){
                colorChoosen = colorObject.blue
                addNote()
            }
            if(divsName.includes("purple")){
                colorChoosen = colorObject.purple
                addNote()
            }
            console.log(colorChoosen)

        })
    })
}

function addNote(){
    const newNote = document.createElement("div")
    const newNoteText = document.createElement("p")

    const newDeleteButton = document.createElement("button")
    const newDeleteButtonIcon = document.createElement("i")

    const newEditButton = document.createElement("button")
    const newEditButtonIcon = document.createElement("i")

    newNote.classList.add("note")
    newNoteText.textContent = ""
    newNoteText.setAttribute("contenteditable", true)   
    newNoteText.classList.add("editable")

    newDeleteButton.classList.add("deleteButton")
    newDeleteButtonIcon.classList.add("fas")
    newDeleteButtonIcon.classList.add("fa-trash")

    newEditButton.classList.add("editButton")
    newEditButtonIcon.classList.add("fas")
    newEditButtonIcon.classList.add("fa-check")

    newNote.appendChild(newDeleteButton)
    newDeleteButton.appendChild(newDeleteButtonIcon)

    noteContainer.appendChild(newNote)
    newNote.appendChild(newNoteText)


    newNote.appendChild(newEditButton)
    newEditButton.appendChild(newEditButtonIcon)

    newNote.style.backgroundColor = colorChoosen
    editNote()
}

function editNote(){
    const allNotes = document.querySelectorAll(".note")
    console.log(allNotes)

    allNotes.forEach((item,index)=>{
        item.children[2].children[0].addEventListener("click", ()=>{
            if(item.children[1].className.includes("editable")){
            
                item.children[2].children[0].classList.remove("fa-check")
                item.children[2].children[0].classList.add("fa-pen")

                item.children[1].setAttribute("contenteditable", false)  

                item.children[1].classList.toggle("editable")
                console.log(allNotes)
             }
             
            else{
                item.children[2].children[0].classList.remove("fa-pen")
                item.children[2].children[0].classList.add("fa-check")

                item.children[1].setAttribute("contenteditable", true)  

                item.children[1].classList.toggle("editable")
                console.log("ğ")
            }
        }) 
        
        item.children[0].children[0].addEventListener("click", ()=>{
            noteContainer.removeChild(item)
        })
    })
}



chooseColor()


addButton.addEventListener("click", noteAnimations)