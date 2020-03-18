console.log("Hello World from basic.js");

document.getElementById("clickButton").addEventListener("click", onButtonClicked);

function onButtonClicked() {
    console.log("I'm in the button click event");
    console.log(Number(document.getElementById("inputValue").value)+1);
    console.log(size(Number(document.getElementById("inputValue").value)));
}; 

function size(a) {
    if (a < 10) {
    return "small";
    }  else if (a >= 10 && a < 20) {
        return "med";
    } else if(a >= 20){
        return "large";
    };
};

//This is an alternate code but not complete.
/**function onButtonClicked() {
    console.log("I'm in the button click event");
};**/

/**let inputValue=document.getElementById("inputValue");
let clickButton=document.getElementById("clickButton");
function getInputValue(){
console.log(Number(inputValue.value)+1);
}
clickButton.addEventListener("click", getInputValue);**/
