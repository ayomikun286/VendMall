import { FAQ } from "./FAQ.js";
import {navBar} from "./nav.js"

document.addEventListener("DOMContentLoaded", () => {
  navBar();
  FAQ();

    document.getElementById('hide-create').addEventListener('click', ()=>{
    window.location.href = "create-Account.html";
  });

  document.getElementById('hide-login').onclick = () =>{
    window.location.href = "login.html";
  }

});





