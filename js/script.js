/*--------------- Menu Show ---------------*/
const showMenu=(toggleId, navId) =>{
   const toggle=document.getElementById(toggleId),
         nav=document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')

       
   })
}

showMenu('nav-toggle','navMenu')


/* ------ Evitar Artefacto visual do menu ------ */
let resizeTimer; /*variável de timer*/

window.addEventListener('resize', () => {  /*quando a janela está a ser resized*/
  document.body.classList.add('is-resizing'); /*adiciona a classe .is-resizing ao body*/

  clearTimeout(resizeTimer); /*cancela o timer anterior, para estar sempre em effeito o timer mais recente*/

  resizeTimer = setTimeout(() => { /*é establecido que a variável começa um timer*/
    document.body.classList.remove('is-resizing'); /*remove a classe .is-resizing ao body*/
  }, 200); /*depois de 200ms*/      
});

/*Basicamente, equanto forem detetados inputs de resize, é começado um timer de 200ms em que a animação é feita inativa,
então só quando o utilizador para de fazer resize, o ultimo timer de 200ms passa, e ao passar, é removida a classe .is-resizing*/

  
/* ------ Cards Hover ------ */
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  const info = card.querySelector(".project-card-info");

  let lastMouseEvent = null;

  function moveInfo(e) {
    const rect = card.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    const infoWidth = info.offsetWidth;
    const gap = 20;

    if (e.clientX + infoWidth + gap > window.innerWidth) {
      x -= infoWidth + gap;
    } else {
      x += gap;
    }

    info.style.left = `${x}px`;
    info.style.top = `${y}px`;
  }

  card.addEventListener("mousemove", (e) => {
    lastMouseEvent = e;
    moveInfo(e);
  });

  window.addEventListener("scroll", () => {
    if (lastMouseEvent) {
      moveInfo(lastMouseEvent);
    }
  });
});


/* ------ Footer Year Update ------ */

document.getElementById("current-year").textContent =   /*encontra o elemento com o id 'current-year' (está no footer) e o texto dentro dele*/
  new Date().getFullYear();  /*dá set do texto para o ano atual*/