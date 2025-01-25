let users = ["varshini" , "sai"];
let x = users.forEach((user)=>{
    return user;
});
console.log(x);

let usersDetails = [
    {
        name:"Ramya",
        city:"Guntur"
    },
    {
        name:"Sai varshini",
        city:"HYD"
    }
];
usersDetails.map((x)=>{
    console.log(x.name);
})

let userDetails ={
    name: "varsh",
    age:21
};
console.log

function fetchUsers()
{
    let response = fetch("https://jsonplaceholder.typicode.com/users ")
    response.then(result=>{
        return result.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            console.log(store);
            data.map(user=>{
                store.innerHTML +=
                `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.Email}</td>
                    <td>${user.company.name}</td>
                </tr>`
            })
        })
    })
    .catch(err=>console.log(err))

}
fetchUsers();

