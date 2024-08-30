

const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');

registerLink.addEventListener('click',(e)=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',(e)=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',(e)=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',(e)=>{
    wrapper.classList.remove('active-popup');
});

// Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Coffee shop website loaded');

//     // Add smooth scrolling for internal links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100); // Stagger the fade-in effect for each card
    });
});
