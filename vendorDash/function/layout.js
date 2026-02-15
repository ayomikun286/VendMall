
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

export function mobileNavBTN(){
    const navmoblieBTN = document.getElementById('navmoblieBTN');
    const aside = document.getElementById('aside');
   const closrMnav = document.getElementById('closrMnav');
    if(!navmoblieBTN || !aside || !closrMnav){
            return;
    }

    navmoblieBTN.addEventListener('click', ()=>{
            aside.classList.add('openMobileNav');
    })

    closrMnav.addEventListener('click', ()=>{
         aside.classList.remove('openMobileNav');

    })



}