var addButton = document.getElementById("add") 
var rootPop = document.getElementsByClassName("root-popup")[0] 
const oldPage = document.getElementsByClassName("old-page")[0]
const newPage = document.getElementsByClassName("new-page")[0]
const  dropZone = document.getElementsByClassName("flex-container")[0] 
const newPopup = document.getElementsByClassName("new-popup")[0]
var currentElement  ;
const showNewPopup = (e) => {
   newPopup.style.display = "flex" 
   currentElement = e
}
const addNewItem = () =>{
    let newValue = document.getElementById("head1").value ///it takes the second input value for storing the list itemsand prints
    oldPage.style.filter="none";
    let div = document.createElement("div")
    div.innerText = newValue 
    div.style.padding="10px"
    let button = document.createElement("button")
    button.innerText = "MARK"
    button.style.border="none"
    button.style.borderRadius="10px"
    button.style.backgroundColor="blue"
    button.addEventListener("click" , (e) => {  //it is used for the line through to the list items
        e.target.style.display = "none"
        e.target.parentNode.style.textDecoration = "line-through" 
    })
    div.append(button)
    currentElement.append(div) 
    newPopup.style.display = "none" 
}
  
const showNewPage = (card) =>{
    oldPage.style.display = "none"
    console.log(card)
    newPage.append(card)
    newPage.style.display = "block"
}
// card is created here 
const createCard = (heading) => {
    var cardElement = document.createElement("div")
    cardElement.className = "card" 
    let h4 = document.createElement("h4")
    h4.innerText = heading 
    h4.addEventListener("click" , (e)=>{   //it is for clicking on the heading show a new popup in a new page having the back arrow
        showNewPage(e.target.parentNode)
    })
    let hr = document.createElement("hr")
    let d = document.createElement("span") 
    d.className = "delete material-icons"
    d.innerText = "delete" 
    let add = document.createElement("span")
    add.className = "material-icons"
    add.innerText = "add" 
    add.addEventListener("click" , (e) =>{  //add button is pressed newpopup gets and takes the input for list items
        showNewPopup(e.target.parentNode)
        oldPage.style.filter="blur(4px)";
       
    })
    d.addEventListener("click" , (e) =>{   //it is for the delete the whole contanier in one click
        deleteCard(e)
    })
    cardElement.append(h4)
    cardElement.append(hr)
    cardElement.append(d)
    cardElement.append(add) 
    dropZone.append(cardElement) 
    rootPop.style.display = "none" 
}


const arrowBack=document.getElementsByClassName("arrow")[0]//it is used to get back to old page

arrowBack.addEventListener('click',function(){
    oldPage.style.display="block"
    newPage.style.display="none"
})





//to get the input box to enter the trip name

addButton.addEventListener("click" , () => {
    rootPop.style.display = "flex" 
    oldPage.style.filter="blur(4px)";
})

const deleteCard = (e) =>{ 
   e.target.parentNode.style.display = "none" 
}


//input value is stored in heading
const addCard = () => {
    let inputValue = document.getElementById("head").value ;
    createCard(inputValue);
    oldPage.style.filter="none";
}

//cancel the popup
const cancelCard=document.getElementsByClassName("btn2")[0]
cancelCard.addEventListener('click',function(){
    rootPop.style.display="none"
    oldPage.style.filter="none";
})


//cancel the popup
const cancelCard2=document.getElementsByClassName("btn4")[0]
cancelCard2.addEventListener('click',function(){
    newPopup.style.display="none"
    oldPage.style.filter="none";
})