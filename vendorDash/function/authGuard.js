import {API_URL} from "./config.js"
export async function requireVendor() {
    const loaderDiv = document.getElementById('loaderDiv');
    try {
        const token = localStorage.getItem("token");
            console.log(token)
        if (!token) {
            window.location.href = "../login.html";
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

        loaderDiv.style.display = "none";
        const data = await response.json();
        
        console.log(data);

        return data; // return vendor datas

    } catch (error) {
        console.error("Auth error:", error.message);

        // Redirect if token invalid or expired
        window.location.href = "../login.html";
    }
}
