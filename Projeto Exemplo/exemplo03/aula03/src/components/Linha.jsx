import React from "react";
function Linha({pokemon, remover}) {
    return (
        <div>
                    <li >
                    {pokemon.name}
                    <button onClick={() => remover(pokemon.name)}>Remover</button>
                    </li>
        </div>
    );
}

export default Linha;