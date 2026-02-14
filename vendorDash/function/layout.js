



export function profile(){
    const profileDrop = document.getElementById('profileDrop');
    const profileSwich = document.getElementById('profileSwich');
   
    profileSwich.addEventListener('click', (e)=>{
       e.stopPropagation();
            profileDrop.classList.add('show');
    })
    document.addEventListener('click', () => {
         profileDrop.classList.remove('show');
    })
}




export function nameDisplay() {
    const email = document.querySelectorAll('#email');
    if (!email) {
        return;
    }
    const currentVendor = JSON.parse(localStorage.getItem('currentVendor')) || [];
    console.log(currentVendor);
    email.forEach(E => {
        E.textContent = currentVendor.email
    })
}






export function navFunction() {

    let isOpen = false;
    document.getElementById('close').onclick = () => {
        const aside = document.getElementById('aside');
        if (!isOpen) {
            aside.classList.add('closeSide')
            isOpen = true;
        } else {
            aside.classList.remove('closeSide');
            isOpen = false
        }
    }
}