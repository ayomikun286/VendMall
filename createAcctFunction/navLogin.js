export function navLogin() {
    const navMobile = document.getElementById('navMobile');
    const navLink = document.getElementById('navLink');
    let isOpen = false;

      if(!navMobile || !navLink){
            return;
        }

    navMobile.addEventListener('click', () => {
        if (!isOpen) {
            navLink.style.display = "flex";
            isOpen = true;
        } else {
            navLink.style.display = "none";
            isOpen = false;
        }
    });
}