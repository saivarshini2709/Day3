// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// let x = [...ele];
// x.map(element=>{
//     element.style.backgroundColor="orange"
// })

// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// ele.id = "demo";
// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// document.body.apppendChild(ele);
// document.body.appendChild(image)
let form = document.querySeclector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");
form.addEventListner("submit",(event)=>{
    event.preventDefault();
    let uname = username.ariaValueMax;
    let uemail = mail.ariaValueMax;
    let upass = psw.value;
    let uderDetails={
        uname , uemail, upass
    }
    console.log(userDetails);
    localStorage.setItem("userData" , JSON.stringify(userDetails))
     
})