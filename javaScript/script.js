const trigger = document.querySelector('.menu-trigger'),
        addclass = document.querySelector('.site');
trigger.addEventListener('click', function(){
    addclass.classList.toggle('showmenu');
    document.body.classList.toggle('overflowme')
})

//show submenu
const submenu = document.querySelectorAll('.titulos')
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle() {
    submenu.forEach((item) => item != this ? item.classList.remove('expand') : null);
    if (this.parentNode.classList != 'expand') {
        this.parentNode.classList.toggle('expand')
    }
}

//header
const nav = document.querySelector('.site > header');
function fixednav(){
    //
    if (window.scrollY > 1000) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed')
    }
}
window.addEventListener('scroll', fixednav)

//search form
const search = document.querySelector('.search-trigger'),
        close = document.querySelector('.search-close'),
        theclass = document.querySelector('.site');
        search.addEventListener('click', function(){
            theclass.classList.toggle('showsearch')
        })
close.addEventListener('click', function(){
    theclass.classList.remove('showsearch')
})