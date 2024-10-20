document.addEventListener('DOMContentLoaded', function() {
  const allButton = document.querySelector('#all-btn');
  allButton.classList.remove('active');

  const categorias = document.querySelector('.boton__container');
  const botones = categorias.querySelectorAll('.boton');

  botones.forEach(boton => {
    boton.addEventListener('click', function() {
      const filter = this.getAttribute('onclick').match(/'([^']+)'/)[1];
      console.log(filter);

      botones.forEach(seleccion => {
        seleccion.classList.remove('active');
      });

      if (filter !== 'all-btn') {
        allButton.classList.remove('active');
      }

      this.classList.add('active'); 

      const cards = document.querySelectorAll('.card'); 
      cards.forEach(card => {
        card.style.transform = 'scale(0)';
      });

      setTimeout(function() {
        cards.forEach(card => {
          if (card.classList.contains(filter) || filter === 'all-btn') {
            card.style.display = 'block';
            card.style.transform = 'scale(1)';
          } else {
            card.style.display = 'none';
          }
        });
      }, 400);
    });
  });

  
  allButton.addEventListener('click', function() {
    setTimeout(function() {
      const cards = document.querySelectorAll('.card'); 
      cards.forEach(card => {
        card.style.display = 'block';
        card.style.transform = 'scale(1)';
      });
    }, 400);
  });
});