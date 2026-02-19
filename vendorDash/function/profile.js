export function profile(vendor) {
    const email = document.querySelectorAll('#email');
    const storeName = document.querySelectorAll('#storeName');
    const nAME = document.querySelectorAll('#nAME');
    const sliceName = document.querySelectorAll('#sliceName');
   
    if (!email || !nAME || !storeName  || !sliceName) {
        return;
    }
    console.log(vendor);
    email.forEach(E => {
        E.textContent = vendor.email
    });
   storeName.forEach(SN => {
     SN.textContent = vendor.storeName
   });

   nAME.forEach(NM =>{
    NM.textContent = vendor.name;
   })

   const initails = vendor.name.slice(0,2).toUpperCase();



   console.log(initails)

   sliceName.forEach(slName =>{
     slName.textContent = initails
   })

}