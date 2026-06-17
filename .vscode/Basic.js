const first = 1;
const second = 2;
console.log("first: ", first);
console.log("second: ", second);
const Fruits = ["Apple","Banana","Grapes"];
console.log("Fruits[0]:");
console.log(Fruits[0]);
console.log("Fruits[1]:");
console.log(Fruits[1]);
console.log("Fruits[2]:");
console.log(Fruits[2]);
const arr = [1,"name",false,2,4]
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
const fourth = document.getElementById("ptag");
fourth.innerHTML = "This is a paragraph";


function newfunction(){

}
const input = document.getElementById("eventListener");
const output = document.getElementById("ptag");
input.addEventListener("input", function(){
    output.innerHTML = input.value;
});
const newvar = document.createElement("hi");
newvar.textcontent = "New paragraph";
document.body.appendChild(newvar);
newvar.removeChild();



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});




const promise = new Promise((resolve, reject) => {
    const success = true;
    if(Success){
        Console.log("Done");
    }
    else{
        Console.log("Error");
    }
promise.then(res=>{console.log(res)}).catch(err=>{console.log(err)});


const example1 = ()=>{
    console.log("Hello");
}