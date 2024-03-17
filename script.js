const wrapper = document.querySelector('.wrapper');
const wrapper1 = document.querySelector('.wrapper1');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
// const home = document.querySelector('.home');
// const home = document.querySelector("home.html").addEventListener("click", () => {
//     alert("This page will be active when you log in your account.");
//   });

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

// home.addEventListener('click', ()=> {
//     wrapper1.classList.add('active');
// })