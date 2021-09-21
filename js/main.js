const navMobile = document.querySelector('.nav-mobile');
const allNavLink = document.querySelectorAll('.nav__link');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');



const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

    allNavLink.forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active');
        })
    })



}



navBtn.addEventListener('click', handleNav);




const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear()