import {message} from "./alert.js"

export function loginVendor(){

    const formLogin = document.getElementById('form-login');
    const EmailLogin = document.getElementById('EmailLogin');
    const  PassLogin = document.getElementById('PassLogin');
     const loader = document.getElementById('loader');

    if(!formLogin || !EmailLogin || !PassLogin){return;}

    formLogin.addEventListener('submit', (e)=>{

        e.preventDefault();


        const email = EmailLogin.value.trim();
        const password = PassLogin.value.trim();

        if(!email || !password){
            message("Fill the Feild", "error");
            return;
        }

        loader.style.display = "flex";

        let vendors = JSON.parse(localStorage.getItem("vendors")) || [];


        const vendor = vendors.find(v => v.email === email && v.password === password);


        if(!vendor){
            loader.style.display = "none"
            message("Invalid email or password", "error");
            return;
        }

        localStorage.setItem("currentVendor", JSON.stringify(vendor));

          message("Login successful", "success");
        
        setTimeout(()=>{
            loader.style.display = "none"
            window.location.href = "vendorDash/index.html";
        },2000);

       



    })

}