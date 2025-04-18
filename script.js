let slideAtual = 0;
    const slides = document.querySelectorAll(".slide");

    function mostrarSlide(index) {
      if (index < 0) slideAtual = slides.length - 1;
      else if (index >= slides.length) slideAtual = 0;
      else slideAtual = index;

      const offset = -slideAtual * 100;
      document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
    }

    function moverSlide(direcao) {
      mostrarSlide(slideAtual + direcao);
    }

    // Slide automático a cada 5 segundos
    setInterval(() => moverSlide(1), 5000);
    