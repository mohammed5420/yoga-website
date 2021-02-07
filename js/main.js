const body = document.body;
const humberger = document.querySelector('.humberger');
const navBar = document.querySelector('.nav-bar');
const span = document.querySelector('.humberger > span');
humberger.addEventListener('click',  function() {
    humberger.classList.toggle('humberger-active');
    navBar.classList.toggle('open');
    body.classList.toggle('over-flow');
});
