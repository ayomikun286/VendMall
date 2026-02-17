import { message } from "./alert.js";
// import {generateUniqueStoreSlug} from "./generateStoreName.js"
export function CreateVendor() {

    const formDivCreate = document.querySelector('#form-create');
    const Name = document.getElementById('Name');
    const StoreName = document.getElementById('StoreName');
    const Email = document.getElementById('Email');
    const Pass = document.getElementById('Pass');
    const confPass = document.getElementById('confPass');
    const agreeTerms = document.getElementById('agreeTerms');
    const loader = document.getElementById('loader');


    if (!formDivCreate || !Name || !StoreName || !Email || !Pass || !confPass || !agreeTerms || !loader) {
        return;
    }

    formDivCreate.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = Name.value.trim();
        const storeName = StoreName.value.trim();
        const email = Email.value.trim();
        const password = Pass.value.trim();
        const confirmPass = confPass.value.trim();

        if (!name || !storeName || !email || !password || !confirmPass) {
            message("Fill the Feild", "error");
            loader.style.display = "none";
            return;
        }

        if (password !== confirmPass) {
            message("Passwords do not match", "error");
            loader.style.display = "none";
            return;
        }
        if (!agreeTerms.checked) {
            message("Agree to the Terms and Condition", "error");
            loader.style.display = "none"
            return;
        }

        loader.style.display = "flex";


        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, storeName })

            });

            const data = await res.json();

            if (!res.ok) {
                 loader.style.display = "none";
                message(data.message || "Registration failed", "error");
                return;

            }

            message("Registration successful! Check your email to verify.", "success");

            setTimeout(() => {
                window.location.href = "login.html";
                formDivCreate.reset();
            }, 2500);

        } catch (err) {
            loader.style.display = "none";
            message("Something went wrong. Try again.", "error");

        }

        // message("Account created successfull", "success");

        // setTimeout(() => {
        //     loader.style.display = "none";
        //     window.location.href = "vendorDash/index.html";
        //     formDivCreate.reset();

        // }, 3000)



    });


}