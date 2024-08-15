import React, { useState, useEffect, useRef } from 'react';
import './ebook.css';
import tigre from './tigre.jpg';
import iguana from './iguana.jpg';
import PDFObject from 'pdfobject';

import tigrePdf from './a.pdf';

function Ebook() {
  const [showModal, setShowModal] = useState(false);
  const pdfContainerRef = useRef(null);

  const handleOpenPdf = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal && pdfContainerRef.current) {
      PDFObject.embed(tigrePdf, pdfContainerRef.current);
    }
  }, [showModal]);

  return (
    <div>
      <div className="busca">
        <div className="user">
          <img src={iguana} id='iguana' alt="" />
          <p>USUARIO</p>
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
            <button id='btn-card' onClick={handleOpenPdf}>Abrir</button>
          </div>
        ))}
      </div>
      <br />
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="pdf-viewer" ref={pdfContainerRef} style={{ width: '100%', height: '100%' }}>
              {/* PDFObject will embed the PDF here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ebook;
