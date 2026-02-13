import { FAQ } from "./FAQ.js";
import {navBar} from "./nav.js"

document.addEventListener("DOMContentLoaded", () => {
  navBar();
  FAQ();

    document.getElementById('goCreate').addEventListener('click', ()=>{
    window.location.href = "create-Account.html";
  });

  document.getElementById('goLogin').onclick = () =>{
    window.location.href = "login.html";
  }

});





