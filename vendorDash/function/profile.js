export function profile(vendor) {
    const email = document.querySelectorAll('#email');
    const storeName = document.querySelectorAll('#storeName');
    const nAME = document.querySelectorAll('#nAME');

   
    if (!email || !nAME || !storeName ) {
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

}