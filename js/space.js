const button = document.getElementById("btnBuscar");
const input = document.getElementById("inputBuscar");
const container = document.getElementById("contenedor");

button.addEventListener("click", () => {
  // Elimina anteriores resultados
  container.innerHTML = "";

  const url = `https://images-api.nasa.gov/search?q=${input.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.collection.items.forEach((item) => {
        console.log(item);
        const card = document.createElement("article");
        card.classList.add("card");
        card.classList.add("bg-dark");
        card.innerHTML = `
            <img src="${item.links[0].href}" class="card-img-top" alt="${item.data[0].title}">
            <div class="card-body">
                <h5 class="card-title">${item.data[0].title}</h5>
                <p class="card-text">${item.data[0].description}</p>
                <p class="card-footer"><small class="text-muted">${item.data[0].date_created}</small></p>
            </div>
          `;
        container.appendChild(card);
      });
    });
});
