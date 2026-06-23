console.log("vis.js loaded"); 

function updateActiveNav() {
    const navLinks = document.querySelectorAll('header nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'visualizations.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === currentPath);
    });
}

window.addEventListener('load', () => {
    updateActiveNav();
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('header nav a').forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

let foodContainer = document.querySelector(".Food"); 
let panCircle = document.querySelector("#pan");
let centerText = document.getElementById("centerText");

foodColors = {
    Sandwich:"#f4a261",
    Steak: "#e76f51",
    Sushi: "#2a9d8f",
    Tacos: "#e9c46a",
    CurryChicken: "#f4a261"
};

foodCalorie ={
    Sandwich:"235 Calories",
    Steak: "270 Calories /100g",
    Sushi: "90 Calories /100g",
    Tacos: "226 Calories /100g",
    CurryChicken: "109 Calories /100g"
};

foodContainer.addEventListener("click", function(event) 
{ 
    let clicked = event.target;
    let color = foodColors[clicked.id];
    if (clicked.id === "Sandwich") { 
        panCircle.setAttribute("fill",color);
        centerText.textContent = foodCalorie[clicked.id];
        angle =0;
        angleRotateSpeed = 0.1;
    } 
    else if (clicked.id === "Steak") { 
        panCircle.setAttribute("fill",color);
        centerText.textContent = foodCalorie[clicked.id];
        angle =0;
        angleRotateSpeed = 0.15; 
    } 
    else if (clicked.id === "Sushi") { 
        panCircle.setAttribute("fill",color);
        centerText.textContent = foodCalorie[clicked.id];
        angle =0;
        angleRotateSpeed = 0.2; 
    } 
    else if (clicked.id === "Tacos") {
        panCircle.setAttribute("fill",color);
        centerText.textContent = foodCalorie[clicked.id];
        angle =0;
        angleRotateSpeed = 0.13;  
    } 
    else if (clicked.id === "CurryChicken") {
        panCircle.setAttribute("fill",color);
        centerText.textContent = foodCalorie[clicked.id];
        angle =0;
        angleRotateSpeed = 0.1;   
    } 
});

let angle = 0;
let angleRotateSpeed = 0;
function rotateText() {
    angle += angleRotateSpeed; 
    centerText.setAttribute("transform", `rotate(${angle},380,380)`);
    requestAnimationFrame(rotateText);
}
rotateText();