const first = 1;
const second = 2;
console.log("first: ", first);
console.log("second: ", second);

const Fruits = ["Apple", "Banana", "Grapes"];
console.log("Fruits[0]:", Fruits[0]);
console.log("Fruits[1]:", Fruits[1]);
console.log("Fruits[2]:", Fruits[2]);

const arr = [1, "name", false, 2, 4];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const fourth = document.getElementById("ptag");
if (fourth) {
    fourth.innerHTML = "This is a paragraph";
}

function newfunction() {
    // Function body
}

const input = document.getElementById("eventListener");
const output = document.getElementById("ptag");
if (input && output) {
    input.addEventListener("input", function () {
        output.innerHTML = input.value;
    });
}

// Fixed HTML tag "h1" and property "textContent"
const newvar = document.createElement("h1"); 
newvar.textContent = "New paragraph";
document.body.appendChild(newvar);
newvar.removeChild();