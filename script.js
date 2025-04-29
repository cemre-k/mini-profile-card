const btn = document.getElementById("contact");
const body = document.querySelector("body");

btn.addEventListener("click" , ()=>{
    prompt("Enter your e-mail here and wait for magic to happen:");
})

const visibilityBtn = document.getElementById("toggle-visibility");

visibilityBtn.addEventListener("click" , ()=> {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        visibilityBtn.textContent = "Activate eye hazard"
    }
    else{
        visibilityBtn.textContent = "Activate Peaceful Mode"
    }
})