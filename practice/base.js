console.log("Hello World from Base.js");
document.getElementById("myButton").addEventListener("click", onButtonClicked);
function onButtonClicked() {
    console.log("I’m in the button click event");
};

function onButtonClicked() {
    console.log("I'm in the button click event");
    console.log(Number(document.getElementById("inputVal").value)+1);
}; 
document.getElementById("myButton").addEventListener("click", onButtonClicked);

function size(a) {
    if (a < 10) {
    return "small";
    }  else if (a >= 10 && a < 20) {
        return "med";
    } else {
        return "large";
    };
};
document.getElementById("myButton").addEventListener("click", size);



