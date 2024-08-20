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
          <p>Ana Vitória</p>
        </div>
        <div className="buscar">
         
         
        </div>
      </div>
      <h1 id='titulo-ebook'>BIOLOGIA E-BOOKS</h1>
      <br />
      <div className="ebooks">
        {[...Array(10)].map((_, index) => (
          <div className="card" key={index}>
            <br></br>
            <div className="esquerda">

              <div className='btn-card-0'>
            <a href={tigrePdf} download="Tigre.pdf">
              <button id='btn-download'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
        </svg></button>
            </a>

            <button id='visto'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg></button>
            </div>
            </div>


            <br />
            <div className="centro">
            <img src={tigre} alt="Tigre" id='tigre-img'/>
            <h1>"TUDO SOBRE O TIGRE"</h1>
            <br />
            <button id='btn-card' onClick={handleOpenPdf}>Abrir</button>
            <br></br>
            
          </div></div>
        ))}
      </div>
      <br />
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="pdf-viewer" ref={pdfContainerRef} style={{ width: '100%', height: '100%' }}>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ebook;
