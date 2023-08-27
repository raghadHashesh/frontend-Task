//open menu in small devices
let menu = document.querySelector('.bx-menu');
let nav = document.querySelector('.right-nav');
menu.onclick = () => {
    nav.classList.toggle('open');
}

//activate the navbar items
let navItems = document.querySelectorAll('.right-nav ul li');
navItems.forEach((ele) => {
    ele.onclick = () => {
        navItems.forEach(ele => {
            ele.classList.remove('active');
        });
        ele.classList.add('active');
    }
});


//scroll to pages
function scrollTo(element) {
    element.forEach((ele) => {
        ele.addEventListener('click', (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
scrollTo(navItems);