import './App.css';
import foto from './img/foto-joao.jpg';

function App() {
  const clicar = () => {
    alert("Boa noite!");
  }
  return (
    <div className="container">
      <h1>Olá, Eu sou o João Vitor!</h1>
      <img className='foto' src={foto} />
      <p><b>Este é meu primeiro site React!</b></p>
      <button onClick={clicar}>Clique aqui!</button>
    </div>
  );
}

export default App;
