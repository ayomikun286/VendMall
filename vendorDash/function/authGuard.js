export function requireVendor (){

    const vendor = JSON.parse(localStorage.getItem("token"));

    if(!vendor){
        window.location.replace("../login.html");
        return null ;
    }

    return vendor;
}