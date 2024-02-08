let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')

menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
}

const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : false,
})



sr.reveal('.myimageabout',{delay:350, origin:'left'})
sr.reveal('.about-text-content',{delay:350, origin:'right'})
sr.reveal('.home-image',{delay:150, origin:'left'})
sr.reveal('.home-text-content',{delay:350, origin:'right'})

sr.reveal('.quality-content',{delay:350, origin:'left'})
sr.reveal('.quality-image',{delay:350, origin:'right'})
sr.reveal('.gallery-image',{delay:350, origin:'top'})
sr.reveal('.food-main-content',{delay:350, origin:'left'})

sr.reveal('.menu-food-content',{delay:350, origin:'top'})
sr.reveal('.menu-food-text',{delay:350, origin:'bottom'})
sr.reveal('.dine',{delay:550, origin:'bottom'})

sr.reveal('.main-home',{delay:550, origin:'bottom'})
sr.reveal('.social1',{delay:350, origin:'right'})
sr.reveal('.social2',{delay:950, origin:'right'})
sr.reveal('.social3',{delay:1650, origin:'right'})
