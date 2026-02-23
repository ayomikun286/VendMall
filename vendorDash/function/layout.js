
export function navFunction() {
    const Store = document.getElementById('Store');
    const logoIcon = document.getElementById('logoIcon');
    if(!Store || !logo){
        return;
    }
    let isOpen = false;
    document.getElementById('close').onclick = () => {
        const aside = document.getElementById('aside');
        if (!isOpen) {
            aside.classList.add('closeSide')
            Store.style.display = "none";
            logoIcon.src = "utils/images/favicon.png";
            logoIcon.style.width = "50px"
            isOpen = true;
        } else {
            aside.classList.remove('closeSide');
              Store.style.display = "flex";
                logoIcon.src = "utils/images/site_logo.png";
                 logoIcon.style.width = "200px"
              
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
          

    });


     const dashClick = document.getElementById('dashClick');
    const dashDrop = document.getElementById('dashDrop');
    let itShow = false;
    const dashARROW = document.getElementById('dashARROW');
    if(!dashClick || ! dashDrop || !dashARROW){
        return;
    }

    dashClick.addEventListener('click', ()=>{
        if(!itShow){
            dashDrop.classList.add('open')
            dashARROW.classList.add('fa-angle-up');
            dashARROW.classList.remove('fa-angle-down')
            itShow = true;
        }else{
            dashDrop.classList.remove('open');
              dashARROW.classList.remove('fa-angle-up');
            dashARROW.classList.add('fa-angle-down');
            itShow = false;
        }

    });

    const staffClick = document.getElementById('staffClick');
    const staffDrop = document.getElementById('staffDrop');
    const staffArrow = document.getElementById('staffArrow');
    let isShow = false;

    if(!staffClick || !staffDrop || !staffArrow){
        return;
    }

    staffClick.addEventListener('click', ()=>{
       if(!isShow){
         staffDrop.classList.add('open');
        staffArrow.classList.add('fa-angle-up');
        staffArrow.classList.remove('fa-angle-down');
        isShow = true
       }else{
         staffDrop.classList.remove('open');
        staffArrow.classList.remove('fa-angle-up');
        staffArrow.classList.add('fa-angle-down');
        isShow = false
       }

    });


    const shopDrop = document.getElementById('shopDrop');
    const shopClick = document.getElementById('shopClick');
    const shopArrow = document.getElementById('shopArrow');
    let isShoW = false;
    if(!shopArrow || !shopClick || !shopDrop){
        return;
    }
    
    shopClick.addEventListener('click', () =>{
        if(!isShoW){
            shopDrop.classList.add('open');
        shopArrow.classList.add('fa-angle-up');
        shopArrow.classList.remove('fa-angle-down');
        isShoW = true;
        }else{
            shopDrop.classList.remove('open');
        shopArrow.classList.remove('fa-angle-up');
        shopArrow.classList.add('fa-angle-down');
        isShoW = false;
        }
    })




}