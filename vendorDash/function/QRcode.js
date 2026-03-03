// export function Qcode(vendor){

// console.log(vendor)
// // Your store link// 
//         const storeLink = `https://vend-mall.vercel.app/store.html?vendor=${vendor.storeSlug}`;

// // Generate QR code
//             const qrcode = new QRCode(document.getElementById("qrcode"), {
//             text: storeLink,
//             width: 150,      // QR code width
//             height: 150,     // QR code height
//             colorDark: "#000000",
//             colorLight: "#ffffff",
//             correctLevel: QRCode.CorrectLevel.H
//             });

// }


export function generateQRCode(vendorSlug) {
  const qrcode = document.getElementById('qrcode');
  if(!qrcode) return;
  qrcode.innerHTML = ""; // Clear previous
  
  new QRCode(qrcode, {
    text: `https://vend-mall.vercel.app/store.html?vendor=${vendorSlug}`,
    width: 130,
    height: 130
  });
}

// Example usage
