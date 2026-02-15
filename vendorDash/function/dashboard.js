export function dashControl(){

     const profileDrop = document.getElementById('profileDrop');
    const profileSwich = document.getElementById('profileSwich');
    const profileArrow = document.getElementById('profileArrow');
    const logout = document.getElementById('logout');
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

    logout.addEventListener('click', ()=>{
        localStorage.removeItem('currentVendor');
        window.location.href = " ../login.html";
    })

}
