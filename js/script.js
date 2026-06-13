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
então só quando o utilizador para de fazer resize, o ultimo timer de 200ms passa, e ao passar, é removida a classe .is-resizing, deixando a animação dar*/

  
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


/* --- Copy email Button --- */

/* guarda as variaveis do copyBtn e copyImg no butão e na imagem lá dentro*/
const copyButtons = document.querySelectorAll(".copy-contact");
console.log(copyButtons);

copyButtons.forEach(copyBtn => {
  const copyImg = copyBtn.querySelector("img");

  let resetTimer;

  /* no click do butão, põe o texto gustavo.camoes@gmail.com no clipboard */
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("gustavo.camoes@gmail.com");

    /* reset da animação: remove a class .copied, avisa o browser, e adiciona outra vez a classe*/
    copyBtn.classList.remove("copied");
    void copyBtn.offsetWidth;
    copyBtn.classList.add("copied");

    /* muda o svg para o svg com check */
    copyImg.src = "imagens/copy_desktop_check.svg";

    /* define variavel pop, cria um <span> com "email copied!" dentro */
    const pop = document.createElement("span");
    pop.classList.add("copy-pop");
    pop.textContent = "email copied!";

    /* cria variaveis js randomização dos valores de animação do texto email copied */
    const rotation = Math.random() * 20 - 10; // -10deg to +10deg
    const duration = 700 + Math.random() * 500; // 700-1200ms
    const height = 1.5 + Math.random() * 1.5; // 1.5rem-3rem

    /* equivale as variáveis js a novas variaveis CSS - estav variáveis estãoa atribuídas na animação no documento CSS */
    pop.style.setProperty("--rotation", `${rotation}deg`);
    pop.style.setProperty("--duration", `${duration}ms`);
    pop.style.setProperty("--height", `${height}rem`);

    copyBtn.appendChild(pop); /* Depois de estar tudo sobre o <span> definido, esta linha, com a função appendChild, coloca o span dentro do copyBtn*/

    /* remove o <span> quando a animação acaba */
    pop.addEventListener("animationend", () => {
      pop.remove();
    });

    /* serve para cancelar o timer anterior, para estar sempre em efeito o timer mais recente */
    clearTimeout(resetTimer);

    /* cria um timer de 2000ms. Remove a classe "copied" e muda a imagem para a default. Mudando o butão para o seu estado original. */
    resetTimer = setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyImg.src = "imagens/copy_desktop.svg";
    }, 2000);
  });
});

/* ------ Footer Year Update ------ */

document.getElementById("current-year").textContent =   /*encontra o elemento com o id 'current-year' (está no footer) e o texto dentro dele*/
  new Date().getFullYear();  /*dá set do texto para o ano atual*/