const submitEl = document.getElementById("submit");
const inputField =document.getElementById('listInput'); // creates a variable and lists the inputfield within it
const listCont = document.getElementById('list-container') //creates a variable and stores the list-container element within it

const ol = document.createElement("ol")

submitEl.addEventListener("click", function (){  
    // const span = document.createElement("span")
    // const cross = document.createTextNode("X")
    // const exit = span.appendChild(cross);
    // listItem.appendChild(exit);
    const btn = document.createElement("button")
    btn.innerHTML = "Clear item"

    // Creates an if else statement checking the condition of the input field
    if(inputField.value === "" || inputField.value === null){
        window.alert("Please enter an item") // alerts user that they need to input an item
    } else {
    let listItem = document.createElement('li') //creates the variable listItem and creates/stores the tag 'li' within it
    listCont.appendChild(ol); // attaches the 'ol' as a child to the list-container 
    listItem.innerHTML = inputField.value;
    ol.append(listItem);
    listItem.append(btn);
    // creates variable with new time stored
    // const time = new Date()
    // time.setFullYear.fontSize = "12px";
    // listItem.append(time)

    inputField.value = '';
    }
    

    btn.addEventListener("click", function(event){
        event.target.parentNode.remove()
        removeItem.removeEventListener()
    })

})

// const box = document.querySelector("#box")

// box.addEventListener("onkeydown", (event) => {
//     switch(event.keycode){
//         case 37:
//         box.style.position = "relative";
//         box.style.left = "-100px";
//         break
//     }
// })










