let input = document.getElementById("userInput");
let button = document.getElementById("idEnter");
let ul = document.querySelector("ul");//try id
let listItems = document.getElementsByTagName("li")//try classname

function inputLength() {
    return input.value.length;
};
//TO CREATE NEW ELEMENT
function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";//wipes input field after element is added

    //TO CREATE NEW DELETE BUTTON BESIDE THE NEW LI ITEM
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.onclick = removeParent;
};

function addListOnClick() {
    if (inputLength() > 0) { //try input.value.length
        createListElement();
    }
};

function addListOnKeypress(e) {
    if (inputLength() > 0 && event.keyCode === 13) { //event.keyCode is deprecated
    //if (inputLength() > 0 && e.key === "Enter") { //e.key is the preferred method. remember to pass "e" as the parameter
        createListElement();
    }
};
button.addEventListener("click", addListOnClick);
input.addEventListener("keypress", addListOnKeypress);

ul.onclick = function(event) {
    let target = event.target;
    target.classList.toggle("done");
};

function listLength() {
    return listItems.length;
};

// TO CREATE DELETE BUTTONS FOR THE EXISTING LIST ITEMS
function deleteButton() {
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
};
for (i = 0; i < listLength(); i++) {
    deleteButton();
};

function removeParent(event) {
    event.target.parentNode.remove();
};

