export function message(message, type , duration=3000){
    const msg = document.getElementById('msg');

    if(!msg){
        return;
    }

    if(type === "error"){
        msg.style.display = "flex"
        msg.textContent = message
        msg.classList.add('errorMsg');
    }
    if(type === "success"){
        msg.style.display = "flex"
           msg.textContent = message
            msg.classList.add('successMsg');
    }

    setInterval(()=>{
        msg.style.display = "none"
        msg.classList.remove('successMsg');
        msg.classList.remove('errorMsg');

    }, duration)


}