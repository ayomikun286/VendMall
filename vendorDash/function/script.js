import {navFunction , mobileNavBTN, pageNavigation} from "./layout.js";
import{dashControl} from "./dashboard.js";
import {profile , greetings} from "./profile.js";
import {requireVendor} from "./authGuard.js";
import {chartFunction} from "./orderChart.js";
import {generateQRCode} from "./QRcode.js";
import {shareStore} from "./shareLink.js";
import {fromcontrole} from "./form.js";
async function initDashboard() {
    const vendor = await requireVendor(); // wait for the API

    if (!vendor) return; // requireVendor() already handles unauthorized

    document.body.classList.remove("hidden");

    dashControl();
    profile(vendor);
    mobileNavBTN();
    navFunction();
    pageNavigation();
    chartFunction();
    greetings();
   fromcontrole();
   
    console.log(vendor.storeSlug)
    generateQRCode(vendor.storeSlug);
    shareStore(vendor.storeSlug)
}

initDashboard();
