import {message} from "./alert.js";
import {generateUniqueStoreSlug} from "./generateStoreName.js"
export function CreateVendor(){

    const formDivCreate = document.querySelector('#form-create');
    const Name = document.getElementById('Name');
    const StoreName = document.getElementById('StoreName');
    const Email = document.getElementById('Email');
    const Pass = document.getElementById('Pass');
    const confPass = document.getElementById('confPass');
    const agreeTerms = document.getElementById('agreeTerms');
    const loader = document.getElementById('loader');


    if(!formDivCreate || !Name || !StoreName ||  !Email || !Pass || !confPass || !agreeTerms || !loader ){
        return;
    }

    formDivCreate.addEventListener('submit', (e)=>{
        e.preventDefault();

        const name = Name.value.trim();
        const storeName = StoreName.value.trim();
        const email = Email.value.trim();
        const password = Pass.value.trim();
        const confirmPass = confPass.value.trim();

        if(!name || !storeName || !email || !password || !confirmPass){
            message("Fill the Feild", "error");
            loader.style.display = "none";
            return;
        }

        if(password !== confirmPass){
            message("Passwords do not match", "error");
            loader.style.display = "none";
            return;
        }
        if(!agreeTerms.checked){
            message("Agree to the Terms and Condition", "error");
            loader.style.display = "none"
            return;
        }

         loader.style.display = "flex"


        const storeSlug = generateUniqueStoreSlug(storeName)

        const newVendor = {
            name,
            email,
            password,
            storeName,
            storeSlug,
            confirmPass,
            products:[]
        };

        let vendors = JSON.parse(localStorage.getItem("vendors")) || [];

        vendors.push(newVendor);

        message("Account created successfull" , "success")

        localStorage.setItem("vendors", JSON.stringify(vendors));




        setTimeout(()=>{
            loader.style.display = "none";
            message("Account created successfull" , "success");
            formDivCreate.reset();
        },3000)

      

    });


     const dataSaved = JSON.parse(localStorage.getItem('vendors'));
     console.log(dataSaved)

}