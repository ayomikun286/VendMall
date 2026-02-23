import {API_URL} from "./config.js"
export async function requireVendor() {
    try {
        const token = localStorage.getItem("token");
            console.log(token)
        if (!token) {
            window.location.href = "../login.html";
            //  document.body.innerHTML = `
            //     <h2>Please verify your email first</h2>
            //     <p>Check your inbox for the verification link.</p>
            // `;
            
            return null;
        }

        const response = await fetch(`${API_URL}api/auth/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Not authorized");
        }

        const data = await response.json();
        
        console.log(data);

        return data; // return vendor safely

    } catch (error) {
        console.error("Auth error:", error.message);

        // Redirect if token invalid or expired
        window.location.href = "../login.html";
    }
}
