let openMenu = document.querySelector('#show-menu');
let closeMenu= document.querySelector('#hide-menu');
let sideMenu = document.querySelector('#nav-menu');
let openFilter = document.querySelector('#filter-option');

openMenu.addEventListener('click',function(){
    sideMenu.classList.add('active');
})

closeMenu.addEventListener('click', function(){
    sideMenu.classList.remove('active');
})

openFilter.addEventListener('click',function(){
    openFilter.classList.add('active');
})

