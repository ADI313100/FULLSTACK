// Create an array to store observers
let Observers = [];

function attach(Observer) {
    Observers.push(Observer);
}

function detach(Observer) {
    let newObservers = [];

    for (let i of Observers) {
        if (i !== Observer) {
            newObservers.push(i);
        }
    }

    Observers = newObservers;
}

function notify() {
    for (let i of Observers) {
        console.log(i + ": notified");
    }
}

// Driver Code
attach("A");
attach("B");

notify();

attach("C");
detach("B");

notify();



//conditional rendering
const age=21
if(age < 18){
    console.log("Not Eligible")
} else {
    console.log("Eligible")
}
else{
    console.log("Eligible")
}