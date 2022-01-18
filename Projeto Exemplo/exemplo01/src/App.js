function App() {
  return (
    <div>
      <form> {/* Formulário */}
        <input type="text" placeholder="Nome" />  {/* Nome do campo */}
        <textarea placeholder="Fale sobre vc..." /> {/* Descrição do campo */}
      </form>
      <ul> {/* Lista de itens */}
        <li> {/* Item da lista */}
          <section> 
            <header> 
              <h2> Titulo </h2> {/* Titulo do item */ }
            </header>
            <p> Fale sobre vc </p> {/* Descrição do item */}
            <img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png" alt="Imagem" /> {/* Imagem do item */}
          </section>
        </li>
      </ul>
    </div>
  );
}

export default App;
