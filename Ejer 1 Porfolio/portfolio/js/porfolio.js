document.addEventListener("DOMContentLoaded", function () {
    // Selecciona los elementos del DOM que necesitamos
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const cards = document.querySelectorAll(".card");
  
    // Agrega un evento de clic al botón de búsqueda
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      // Itera a través de las tarjetas y muestra u oculta según el término de búsqueda
      cards.forEach(card => {
        const languages = card.getAttribute('data-language').toLowerCase().split(',');
  
        // Comprueba si alguna etiqueta coincide con el término de búsqueda
        if (languages.includes(searchTerm)) {
          card.style.display = 'block'; // Muestra la tarjeta
        } else {
          card.style.display = 'none'; // Oculta la tarjeta
        }
      });
    });
  });
  