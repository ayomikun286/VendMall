import {message} from "./alert.js"
export function profile(vendor) {
    const email = document.querySelectorAll('#email');
    const storeName = document.querySelectorAll('#storeName');
    const nAME = document.querySelectorAll('#nAME');
    const sliceName = document.querySelectorAll('#sliceName');
    const vendName = document.getElementById('vendName');
   const copyLink = document.getElementById('copyLink');
    if (!email || !nAME || !storeName  || !sliceName || !vendName || !copyLink) {
        return;
    }

   
    console.log(vendor);

     const firstName = vendor.name.split(" ")[0];
    email.forEach(E => {
        E.textContent = vendor.email
    });
   storeName.forEach(SN => {
     SN.textContent = vendor.storeName
   });

   nAME.forEach(NM =>{
    NM.textContent = firstName;
   })

   const initails = vendor.name.slice(0,2).toUpperCase();



   console.log(initails)

   sliceName.forEach(slName =>{
     slName.textContent = initails
   })

   vendName.textContent = firstName;

   copyLink.addEventListener('click', ()=>{
       const storeLink = `https://vend-mall.vercel.app/store.html?vendor=${vendor.storeSlug}`;
       console.log(storeLink)
      navigator.clipboard.writeText(storeLink)
      .then(() => message("Link copied", "success"))
      .catch(err => console.error("Failed to copy", err));  
   })


}