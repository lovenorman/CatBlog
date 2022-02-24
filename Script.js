const hamburgerMenu = document.getElementById('hamburgermenu')
const menuClose = document.getElementById('menuclose')
const navMenu = document.querySelector('.navmenu');

hamburgerMenu.addEventListener("click",  () => {
    hamburgerMenu.style.display = 'none';
    menuClose.style.display = 'inline-block';
    navMenu.classList.toggle('active');
});


menuClose.addEventListener("click",  () => {
    menuClose.style.display = 'none';
    hamburgerMenu.style.display = 'inline-block';
    navMenu.classList.toggle('active');
});