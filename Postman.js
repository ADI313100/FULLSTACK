fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PUT",
    headers: {
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        id: 1,
        title: "Mypost",
        body: "learning fetch API",
        userId: 1
    })
}
)
.then((response) => response.json())
.then((data) => {
    console.log(data);
})