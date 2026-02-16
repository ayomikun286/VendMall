import {navFunction , mobileNavBTN} from "./layout.js";
import{dashControl} from "./dashboard.js";
import {profile} from "./profile.js";
import {requireVendor} from "./authGuard.js";

const vendor = requireVendor();
if(!vendor){
     throw new Error("No vendor found");
}

document.body.classList.remove("hidden")
dashControl();
profile(vendor)

mobileNavBTN();

navFunction();