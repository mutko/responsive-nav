const navButton = document.querySelector('.hamb-btn');
const navList = document.querySelector('.nav-list');

navButton.addEventListener('click', function() {
    navList.classList.toggle('active');
})