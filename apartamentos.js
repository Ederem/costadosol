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
  perView: 3,
  focusAt: 'center',
  breakpoints: {
    700: {
      perView: 2
    }
  }
}
new Glide('.glide', config).mount()
new Glide('.glide1', config).mount()
new Glide('.glide2', config).mount()
new Glide('.glide3', config).mount()

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

/* botao de reserva */
const whatsappButton = document.querySelector('.whatsapp')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 150) {
    whatsappButton.classList.add('show')
  } else {
    whatsappButton.classList.remove('show')
  }
})
