import React, { useEffect } from "react";

function Exemplo03() {
    const [livros, setLivros] = React.useState([ // useState retorna um array com 2 posições, o primeiro é o valor inicial e o segundo é uma função para atualizar o valor
        {id:1, nome:"React"}, 
        {id:2, nome:"Angular"},
        {id:3, nome:"Java"},
    ]); 
useEffect(() => {
    console.log("Montando componete");
    return () => console.log("Desmontando componete");
}
, []);
    
    
    return (
        <div>
           <ul> 
               {livros.map((elemento) => (
                   <li key={elemento.id}>{elemento.nome}</li>
               ))}
           </ul>
            </div>
    );
 }
export default Exemplo03;