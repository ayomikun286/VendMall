export function navBar(){
    const navBTN = document.querySelectorAll('#navMObile');
const navLinks = document.querySelector('.navLinks');
const closeNav = document.querySelectorAll('#closeNav');
let isOpen = false;

navBTN.forEach(btn =>{
    
   btn.addEventListener('click', () => {
   if (!isOpen) {
      navLinks.classList.add('openNav');
      isOpen = true;
   } else {
      navLinks.classList.add('openNav');
      isOpen = false;
   }
});
});

closeNav.forEach(clos =>{
   clos.addEventListener('click', () => navLinks.classList.remove('openNav'));
})

}