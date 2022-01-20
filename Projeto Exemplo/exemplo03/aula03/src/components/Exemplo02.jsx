import React, {useState, useEffect} from "react";
import Linha from "./Linha";

function Exemplo02() {
    const [pokemons, setPokemons] = React.useState([]);
    const [contador, setContador] = React.useState(0);
    const [trigger, setTrigger] = React.useState(0);

    useEffect(() => {
        carregarPokemons();
    }, [contador]);

    useEffect(() => {
      testeConsole();
    }, [trigger]);

    function testeConsole() {
      console.log("Trigger: " + trigger);
    }

    async function carregarPokemons() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        setPokemons(data.results);
          
    }

    function removerPokemon(name) {
     const newList = pokemons.filter((elemento) => elemento.name !== name);
     setPokemons(newList);
    }

    function recarregar() {
    setContador(contador + 1);
    }
    return (
    <div>
        <ul> 
            {pokemons.map((elemento, index) => (
                <Linha key={index} pokemon={elemento} remover={removerPokemon}/>
             ) )}
        </ul>
        <button onClick={() => recarregar()}>Recarregar Pokemons</button>
        <button onClick={() => testeConsole()}>Trigger</button>
    </div>
);
}

export default Exemplo02;