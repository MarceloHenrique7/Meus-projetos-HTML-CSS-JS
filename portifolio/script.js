function cliquemenu() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}
function mudouTamanho() {
  if (window.innerWidth >= 768) {
      menu.style.display = 'block'
  }
  else {
      menu.style.display = 'none'
  }
}


function vermais () {

  let paragrafo = document.getElementById('vermais')

  if (pf.style.display == 'block') {
    pf.style.display = 'none'
    paragrafo.textContent = 'Ver Mais'
  } else {
    pf.style.display = 'block'
    paragrafo.textContent = 'Ver Menos'
    

  }
}

function vermaisp () {

  let ftElements = document.getElementsByClassName('ft')
  let paragrafo = document.getElementById('vermais-p')

  for (let i = 0; i < ftElements.length; i++) {
    let ft = ftElements[i];

  if (ft.style.display == 'inline-block') {
    ft.style.display = 'none'
    paragrafo.textContent = 'Ver Mais'
  } else {
    ft.style.display = 'inline-block'
    paragrafo.textContent = 'Ver Menos'
  }
}


  }

