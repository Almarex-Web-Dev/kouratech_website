// Naviguer vers le haut (Fonctionalite)
const boutonRemonter = document.querySelector('.back_to_top')
window.addEventListener('scroll', function () {
  fromTop = window.pageYOffset
  if (fromTop > 500) {
    boutonRemonter.classList.add('show')
  } else {
    boutonRemonter.classList.remove('show')
  }
})
