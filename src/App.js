import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tableta from "./table";
import PokemonDetail from "./pokemonDetail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra la lista de Pokémon */}
        <Route path="/" element={<Tableta />} />
        {/* Ruta para detalles del Pokémon */}
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
