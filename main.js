/* - Abre e fecha menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header de sombreamento quando a pagina rolar */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*  GLIDE   */
const config = {
  type: 'carousel',
  perView: 2,
  breakpoints: {
    500: {
      perView: 1
    }
  }
}
new Glide('.glide', config).mount()

/* testimonials swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true,
  breakpoints: {
    800: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scroll reveal (mostrar elementos quando dar scroll na pagina) */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  '#home .text, #home .image, #about .text, #about .image, #apartments header, #apartments .cards, #testimonials header, #testimonials .swiper-container, #contact .text, #contact .links',
  { interval: 100 }
)

const whatsappButton = document.querySelector('.whats')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 150) {
    whatsappButton.classList.add('show')
  } else {
    whatsappButton.classList.remove('show')
  }
})

const arrowUpButton = document.querySelector('.arrowUp')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 250) {
    arrowUpButton.classList.add('show')
  } else {
    arrowUpButton.classList.remove('show')
  }
})

/* menu ativo conforme secao visivel da pagina */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})
