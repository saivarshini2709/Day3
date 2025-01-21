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