import {navFunction , mobileNavBTN} from "./layout.js";
import{dashControl} from "./dashboard.js";
import {profile} from "./profile.js";
import {requireVendor} from "./authGuard.js";
import {chartFunction} from "./orderChart.js";
import {generateQRCode} from "./QRcode.js";
import {shareStore} from "./shareLink.js";

async function initDashboard() {
    const vendor = await requireVendor(); // wait for the API

    if (!vendor) return; // requireVendor() already handles unauthorized

    document.body.classList.remove("hidden");
    
    dashControl();
    profile(vendor);
    mobileNavBTN();
    navFunction();
    chartFunction();
    // Qcode(vendor);
    console.log(vendor.storeSlug)
    generateQRCode(vendor.storeSlug);
    shareStore(vendor.storeSlug)
}

initDashboard();
