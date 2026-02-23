import { message } from "./alert.js";
import {API_URL} from "./config.js";
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
    const resendButton = document.getElementById('resendButton');

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
            const res = await fetch( `${API_URL}api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, storeName })

            });

            const data = await res.json();

            if (!res.ok) {
                 loader.style.display = "none";
                message(data.message || "Registration failed", "error");
                return;

            }

           if (res.ok) {
             const verifyCard = document.getElementById('verifyCard');
                formDivCreate.style.display = "none";
                verifyCard.style.display = "flex"
                // message("Registration successful! Check your email to verify.", "success");
                 loader.style.display = "none";
                    localStorage.setItem('currentVendorEmail', email)
                const token = data.token;
            // let verificationStarted = false;
                const interval = setInterval(async () => {
                    try {
                    const checkRes = await fetch(`${API_URL}api/auth/me`, {
                        headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                        }
                    });

                    if (!checkRes.ok) return;

                    const vendor = await checkRes.json();

                    console.log("Polling... Verified:", vendor.isVerified);

                    if (vendor.isVerified) {
                        clearInterval(interval);
                                if (resendButton) {
                                resendButton.disabled = true;
                                resendButton.textContent = "Email Verified";
                                 }
                             verifyCard.innerHTML =`
                             <div class="envilop done">
                                    <i class="fa-solid fa-check"></i>

                                </div>
                                <div class="messs">
                                <h2>Email Verified Successfully</h2>
                                    <p>You will be redirected to your dashboard shortly.</p>
                            </div>
                                                            
                             `
                             setTimeout(()=>{
                                localStorage.setItem("token", token);
                                window.location.href = "vendorDash/dashboard.html";
                             },1500);
                        // loader.style.display = "none";
                    }

                    } catch (err) {
                    clearInterval(interval);
                    console.log("Error checking verification:", err);
                    }
                }, 3000);
                }


        } catch (err) {
            loader.style.display = "none";
            message(err.message || "Something went wrong. Try again.", "error");

        }

       

    });



 function resendMail() {
    const resendBtn = document.getElementById("resendMaill");
    const email = localStorage.getItem("currentVendorEmail");

    if (!resendBtn || !email) return;

    resendBtn.onclick = async () => {
        resendBtn.disabled = true;
        loader.style.display = "flex";

        try {
            const res = await fetch(`${API_URL}api/auth/resend-verification`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (!res.ok) {
                message(data.message || "Failed to resend verification email", "error");
                resendBtn.disabled = false;
                return;
            }

            message(data.message || "Verification email resent successfully", "success");

            resendBtn.textContent = "Email Sent";
            setTimeout(() => {
                resendBtn.disabled = false;
                resendBtn.textContent = "Resend Email";
            }, 30000); // cooldown

        } catch (err) {
            console.error(err);
            message("Network error. Try again.", "error");
            resendBtn.disabled = false;
        } finally {
            loader.style.display = "none";
        }
    };
}


resendMail()
}