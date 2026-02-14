



export function profile(){
    const profileDrop = document.getElementById('profileDrop');
    const profileSwich = document.getElementById('profileSwich');
    const profileArrow = document.getElementById('profileArrow');
    profileSwich.addEventListener('click', (e)=>{
       e.stopPropagation();
            profileDrop.classList.add('show');
            profileArrow.classList.add('fa-angle-up')
            profileArrow.classList.remove('fa-angle-down')
    });
    document.addEventListener('click', () => {
         profileDrop.classList.remove('show');
          profileArrow.classList.add('fa-angle-down')
           profileArrow.classList.remove('fa-angle-up')
    });


    const StorePop = document.getElementById('StorePop');
    const popUp = document.getElementById('popUp');
    const storeArrow = document.getElementById('storeArrow')
    StorePop.addEventListener('click', (e)=>{
         e.stopPropagation();
         popUp.classList.add('show');
         storeArrow.classList.add('fa-angle-up');
          storeArrow.classList.remove('fa-angle-down')
    });
     
    document.addEventListener('click', ()=>{
        popUp.classList.remove('show');
         storeArrow.classList.remove('fa-angle-up');
          storeArrow.classList.add('fa-angle-down')
    });

}




export function nameDisplay() {
    const email = document.querySelectorAll('#email');
    const storeName = document.querySelectorAll('#storeName');
    const nAME = document.querySelectorAll('#nAME');
    if (!email || !nAME || !storeName ) {
        return;
    }
    const currentVendor = JSON.parse(localStorage.getItem('currentVendor')) || [];
    console.log(currentVendor);
    email.forEach(E => {
        E.textContent = currentVendor.email
    });
   storeName.forEach(SN => {
     SN.textContent = currentVendor.storeName
   });

   nAME.forEach(NM =>{
    NM.textContent = currentVendor.name;
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