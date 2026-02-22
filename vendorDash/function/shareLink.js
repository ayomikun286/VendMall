export function shareStore(vendor){

    // Example vendor


// Your store link
const storeLink = `https://vend-mall.vercel.app/store.html?vendor=${vendor}`;

console.log(storeLink)
// Select button
const shareBtn = document.getElementById("share-store");

if(!shareBtn){
    return;
}
shareBtn.addEventListener("click", async () => {
  if (navigator.share) {
    // Use Web Share API
    try {
      await navigator.share({
        title: "Check out my store!",
        text: "Visit my store at Vend Mall",
        url: storeLink
      });
      console.log("Store shared successfully!");
    } catch (err) {
      console.error("Error sharing:", err);
    }
  } else {
    // Fallback: copy link to clipboard
    navigator.clipboard.writeText(storeLink)
      .then(() => alert("Store link copied to clipboard!"))
      .catch(err => console.error("Failed to copy link:", err));
  }
});

}