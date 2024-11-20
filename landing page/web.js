
let card = document.querySelector(".trend")
let card2 = document.getElementById("trendsec")
let about = document.querySelector(".about")
let contact = document.querySelector(".contact")
let letter = document.querySelector(".letter")
let blog = document.querySelector(".trends")
let mainpage = document.querySelector(".main")
let signup = document.querySelector(".signup")
function homes(){
    mainpage.style.display= "flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display= "block";
    contact.style.display="none";
    letter.style.display="block";
    about.style.display="none";
    signup.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="rgb(5, 131, 131)";
    document.getElementById("shop").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";


}
function shops(){
    mainpage.style.display= "none";
    blog.style.display= "none";
    card.style.display="block";
    card2.style.display="block";
    contact.style.display="none"; 
    contact.style.display="none";
    letter.style.display="block";
    about.style.display="none";
    signup.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(5, 131, 131)";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";


}

function blogs(){
    mainpage.style.display= "none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display= "block";
    contact.style.display="none";
    letter.style.display="block";
    about.style.display="none";
    signup.style.display="none";

    document.getElementById("blog").style.color="rgb(5, 131, 131)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";

}

function abouts(){
    mainpage.style.display= "none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display= "none";
    contact.style.display="none";
    about.style.display="block";
    letter.style.display="block";
    signup.style.display="none";



    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="rgb(5, 131, 131)";

}

function contacts(){
    mainpage.style.display= "none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display= "none";
    about.style.display="none";
    contact.style.display="block";
    letter.style.display="block";
    signup.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="rgb(5, 131, 131)";


}

function addC(){
    alert("Item is added to cart")
}

function register(){
    mainpage.style.display= "none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display= "none";
    about.style.display="none";
    contact.style.display="none";
     letter.style.display="none";
     signup.style.display="block";

}