console.log("A");
setTimeout(()=>{
    console.log("B");
}, 1000);
console.log("C");
setTimeout(()=>{
    console.log("D");
}, 3000);

const examples = () =>{
    Console.log("Hello")
}
const promise = new Promise((resolve, reject) => {
    setTimeout(example1, 2000);
    setTimeout(example1, 4000);
});
promise.then(res=>{console.log(res)}).catch(err=>{console.log(err)});

