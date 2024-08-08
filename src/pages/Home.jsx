import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import img from './folha.png';

function Home() {
  return (
    <div className="home-container">
      <div className="esq">
        <img src={img} alt="Folha" id="folha" />
      </div>
        
      <div className="dir">
        <div className="conteudo-dir">
          <h1 id="title-home">E-BOOK</h1>
          <p id="subtitulo">Aqui você encontra os melhores e-books de Biologia!</p>
          <br />
          <Link to="/ebook">
            <button id="button">ENCONTRAR!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
