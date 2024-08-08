import React from 'react';
import './ebook.css';
import tigre from './tigre.jpg';
import iguana from './iguana.jpg';

function Ebook() {
  return (
    <div>
      <br />
      <div className="busca">
        <div className="user">
          <img src={iguana} id='iguana' alt="" srcset="" />
        </div>
        <div className="buscar">
          <input type="text" id='buscar-input'/>
          <button id='buscar-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
        </div>
      </div>
      <h1 id='titulo-ebook'>BIOLOGIA E-BOOKS</h1>
      <br />
      <div className="ebooks">
       
        {[...Array(10)].map((_, index) => (
          <div className="card" key={index}>
            <br />
            <img src={tigre} alt="Tigre" id='tigre-img'/>
            <h1>"TUDO SOBRE O TIGRE"</h1>
            <br />
            <button id='btn-card'>Baixar</button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default Ebook;
