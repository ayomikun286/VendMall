import {message} from "./alert.js";
import {API_URL} from "./config.js";

export function loginVendor(){

    const formLogin = document.getElementById('form-login');
    const EmailLogin = document.getElementById('EmailLogin');
    const  PassLogin = document.getElementById('PassLogin');
     const loader = document.getElementById('loader');

    if(!formLogin || !EmailLogin || !PassLogin){return;}

    formLogin.addEventListener('submit', async (e)=>{

        e.preventDefault();


        const email = EmailLogin.value.trim();
        const password = PassLogin.value.trim();

        if(!email || !password){
            message("Fill the Feild", "error");
            return;
        }

        loader.style.display = "flex";


        
        try {

            const res = await fetch (`${API_URL}api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              body: JSON.stringify ({email, password})

            });


            const data = await res.json();
            console.log("Login response:", res.status, data);

            if(!res.ok){
                  loader.style.display = "none"
                   message(data.message || "fail to fetch", "error");
                    return;
            }

             localStorage.setItem("token", data.token);

             
                message("Login successful", "success");
        
        setTimeout(()=>{
            loader.style.display = "none"
             window.location.href = "vendorDash/dashboard.html";
        },2000);



        }catch(err){
                 loader.style.display = "none"
             message(err.message || "fale to fetch", "error");

        }
       



        


        // if(!vendor){
        //     loader.style.display = "none"
        //     message("Invalid email or password", "error");
        //     return;
        // }

      
        





       



    })

}