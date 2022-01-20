import React,{ useState } from "react";

function Exemplo01() {
    const [livros, setLivros] = React.useState([ // useState retorna um array com 2 posições, o primeiro é o valor inicial e o segundo é uma função para atualizar o valor
        {id:1, nome:"React"}, 
        {id:2, nome:"Angular"},
        {id:3, nome:"Java"},
    ]); 

    function addLivro () {
        const novoLivro = {id: Math.random(), nome: "NodeJS"};
        setLivros([...livros, novoLivro]); // ...livros é um operador spread que pega todos os elementos do array e coloca dentro de um novo array
    }
    return (
        <div>
           <ul> 
               {livros.map((elemento) => (
                   <li key={elemento.id}>{elemento.nome}</li>
               ))}
           </ul>
           <button onClick={() => addLivro()}>Adicionar Livros</button>
            </div>
    );
}

export default Exemplo01;