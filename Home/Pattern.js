function attach(School){
}

function detach(School){
    let newobservers = []
    for (let i of observers){
        if (i !== School){
            newobservers.push(i)
        }
    }
    observers = newobservers
}
function notify(){
    for (let i of observers){
        console.log(i + ":notified")
    }
}

attach("Holiday")
attach("Exam")
attach("Fest")
notify()

