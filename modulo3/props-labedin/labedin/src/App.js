import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './img/foto-joao2.jfif';
import LogoFiat from './img/fca.jfif';
import LogoMiquelanti from './img/miquelanti.jpg';
import ImagemEndereco from './img/endereco.png';
import ImagemEmail from './img/email.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Foto}
          nome="João Vitor Resende"
          descricao="Oi, eu sou o João Vitor. Sou aluno da Labenu. Gosto de filmes, açaí e claro, o mais importante, amo programar!"
        />

        <div>
            <label for="clicar" className="botao-clicar">
                <img src="https://cdn-icons-png.flaticon.com/512/271/271210.png"/>
                <p>Ver mais</p>
            </label>             
        </div>
      </div>
      <input type="checkbox" id="clicar"></input>   

      <div className='escondido'>
        
        <div className="page-section-container">
          <CardPequeno
            imagem={ImagemEmail}
            titulo="E-mail:"
            texto="joaovitorglr@gmail.com."
          />

          <CardPequeno
            imagem={ImagemEndereco}
            titulo="Endereço:"
            texto="Belo Horizonte/MG."
          />
        </div>

        <div className="page-section-container">
          <h2>Experiências profissionais</h2>
          <CardGrande
            imagem={LogoFiat}
            nome="FCA Fiat Chrysler Automobiles"
            descricao="Estagiário na área de ferramentas de usinagem, aplicando os conhecimentos adquiridos no curso de Engenharia Mecânica."
          />

          <CardGrande
            imagem={LogoMiquelanti}
            nome="Miquelanti"
            descricao="Vendedor Técnico de equipamentos usados na mineração (válvulas, separadores magnéticos, peneiras de alta frequência, eletroímã e dragas)."
          />
        </div>

        <div className="page-section-container">
          <h2>Minhas redes sociais</h2>
          <ImagemButton
            rede="https://www.facebook.com/joaovitor.resende.9"
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            rede="https://twitter.com/?lang=pt-br"
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
