function Informativa() {
  document.getElementById("root").innerHTML = `
    <section class="infografia">
      <div class="infografia-header">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20210907044555/Logo_Pok%C3%A9mon_Presents.png" 
             alt="Logo Pokémon Presents" 
             class="infografia-logo">
      </div>

      <div class="infografia-texto">
        <h1>Pokédex Interactiva</h1>
        <p>
          Esta aplicación te permite explorar de manera visual e intuitiva el universo Pokémon. 
          Aquí podrás consultar información detallada sobre cada criatura: su tipo, estadísticas, 
          altura, peso y habilidades principales.
        </p>

        <h2>Explora el Mundo Pokémon</h2>
        <p>
          Busca tus Pokémon favoritos o filtra por tipo elemental. Aprende sobre sus características 
          y cómo se relacionan con otros Pokémon dentro de sus ecosistemas naturales.
        </p>

        <h2>Captura y Colecciona</h2>
        <p>
          Descubre Pokémon al azar en la sección de capturas. Cada intento genera cuatro nuevas 
          criaturas, listas para unirse a tu Pokédex personal.
        </p>

        <h2>Favoritos</h2>
        <p>
          Guarda tus Pokémon preferidos y accede a ellos rápidamente desde la pestaña de favoritos. 
          Una forma sencilla de mantener tu propia selección dentro del universo Pokémon.
        </p>
      </div>

      <footer class="infografia-footer">
        <p>Información obtenida de <strong>PokéAPI</strong> — Proyecto educativo sin fines de lucro</p>
      </footer>
    </section>
  `;
}
