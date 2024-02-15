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
let projectSection = document.getElementById("project-section");

projectLink.addEventListener("click", function (event){
    event.preventDefault();
    projectSection.scrollIntoView({behavior: "smooth"});
})

let projects = document.querySelectorAll('.project');
projects.forEach(function(e, index){
    e.addEventListener('click', function(){
        let gitHubLink = ['https://github.com/Pavanrp2/Grid-Components',
                          'https://github.com/Pavanrp2/amazon-clone',
                          'https://github.com/Pavanrp2/paytm-clone',
                          'https://github.com/Pavanrp2/screen_mode',
                          'https://github.com/Pavanrp2/Counter',
                          'https://github.com/Pavanrp2/Registration_Form',
                          'https://github.com/Pavanrp2/calculator_app'];
        window.open(gitHubLink[index], '_blank');
    })
})


// ------------contact section--------
let contactLink = document.getElementById("contact-link");
let contact = document.getElementById("contact-section");

contactLink.addEventListener("click", function(event){
    event.preventDefault();
    contact.scrollIntoView({behavior:"smooth"});
})


