// SHOW MENU
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav__close')

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER
const shadowHeader = () => {
    const header = document.getElementById('header')
    if (window.scrollY >= 50) header.classList.add('shadow-header')
    else header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// TESTIMONIAL SWIPER
let swiperTestimonial = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: true
});


// =============EMAIL JS====================
const contactForm=document.getElementById('contact-form'),
contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
    e.preventDefault()

    // Servoice Id -templateID -#form- public Key

    emailjs.sendForm('service_a9rhk5n','template_jtfldnu','#contact-form','8X81cznTA4H_FBCTM')
    .then(()=>{
        // Show sent message
        contactMessage.textContent='Message sent successfully.'

        // Remove msg after 5 seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)


        // clear input fields
        contactForm.reset() 
    },()=>{
        contactMessage.textContent='Message not sent (Service error). '

    })


}

contactForm.addEventListener('submit',sendEmail)

// SHOW SCROLL UP

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350 ?scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


// show section active link
const sections=document.querySelectorAll('section[id]')
const scrollActive=()=>{
    const scrollDown=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop - 58,
        sectionId=current.getAttribute('id'),
        sectionClass=document.querySelector('.nav__menu a[href*=' + sectionId + ']')


        if(scrollDown>sectionTop && scrollDown<= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}


// DARK LIGHT THEME
// const themeButton=document.getElementById('theme-button')
// const darkTheme='dark-theme'
// const iconTheme='ri-sun-line'

// const selectedTheme=localStorage.getItem('selected-theme')
// const selectedIcon=localStorage.getItem('selected-icon')

// const getCurrentTheme=()=>document.body.classList.contains(darkTheme)? 'dark' : 'light'

// const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'ri-moon-line' : 'ri-sun-line'

// if(selectedTheme){
//     document.body.classList[selectedTheme==='dark'?'add':'remove'](darktheme)
//     themeButton.classList[selectedIcon==='ri-moon-line'?'add':'remove'](iconTheme)
// }

// themeButton.addEventListener('click',()=>{
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme',getCurrentTheme)
//     localStorage.setItem('selected-icon',getCurrentIcon)
// })
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SCROLL REVEAL ANIMATION
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__perfil, .about__image .contact__mail, .certification__card`, {origin: 'right'})
sr.reveal(`.home__name,.about__container,.home__info,.section__title-1,.about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card,.projects__card`,{ interval: 100})