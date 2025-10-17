import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tableta() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        if (!response.ok) {
          throw new Error("Error al cargar los Pokémon");
        }
        const data = await response.json();
        setPokemons(data.results); // ✅ “results” con s
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  if (loading) return <div>Cargando Pokémon...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lista de Pokémon</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemons.map((pokemon, index) => (
          <li
            key={index}
            style={{ cursor: "pointer", textTransform: "capitalize" }}
            onClick={() => navigate(`/pokemon/${pokemon.name}`, { state: pokemon })}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tableta;
