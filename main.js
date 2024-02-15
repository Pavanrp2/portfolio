// ------------home section--------
let homeLink = document.getElementById("home-link");
let home = document.getElementById("home-section");

homeLink.addEventListener("click", function(event){
    event.preventDefault();
    home.scrollIntoView({behavior:'smooth'});
})

// ------------About section--------
let aboutLink = document.getElementById("about-link");
let about = document.getElementById("about-section");

aboutLink.addEventListener("click", function(event){
    event.preventDefault();
    about.scrollIntoView({behavior:'smooth'});
})

// ------------project section--------
let projectLink = document.getElementById("project-link");
let project = document.getElementById("project-section");

projectLink.addEventListener("click", function (event){
    event.preventDefault();
    project.scrollIntoView({behavior: "smooth"});
})


// ------------contact section--------
let contactLink = document.getElementById("contact-link");
let contact = document.getElementById("contact-section");

contactLink.addEventListener("click", function(event){
    event.preventDefault();
    contact.scrollIntoView({behavior:"smooth"});
})


