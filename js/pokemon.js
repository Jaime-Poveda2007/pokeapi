async function Detalle(h) {
    var root = document.getElementById("root");
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${h}`);
    const data = await res.json();

    // Revisar si este Pokémon ya está en favoritos
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let esFavorito = favoritos.some(poke => poke.name === data.name);

    // Construir tipos
    let tipos = data.types.map(t => t.type.name).join(", ");

    // Plantilla
    const detalle = `
        <section class="c-detalle">
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" 
                alt="${data.name}" 
                height="120" 
                width="auto"
            />
            <p>${data.name}</p>
            <p>ID: ${data.id}</p>
            <p>Tipo: ${tipos}</p>
            <p>Altura: ${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
            <p>HP: ${data.stats[0].base_stat}</p>
            <p>Velocidad: ${data.stats[5].base_stat}</p>
            <p>Ataque: ${data.stats[1].base_stat} | Defensa: ${data.stats[2].base_stat}</p>
            <p>Ataque Especial: ${data.stats[3].base_stat} | Defensa Especial: ${data.stats[4].base_stat}</p>
            <button onClick="toggleFavorito(${data.id}, '${data.name}')">
                <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
            </button>
        </section>
    `;
    
    root.innerHTML = detalle;
}
async function Pokemon() {
  const root = document.getElementById("root");
  root.innerHTML = "<h1>Pokédex</h1>";

  for (let i = 1; i <= 50; i++) { // Puedes ajustar la cantidad
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();

    const card = `
      <div class="card" onclick="Detalle(${data.id})">
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
        <h3>${data.name}</h3>
        <span>#${data.id}</span>
      </div>
    `;

    root.innerHTML += card;
  }
}
