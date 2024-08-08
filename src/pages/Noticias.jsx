import './Noticias.css';
import img from './R.jpg';
function Noticias() {
 
  return (
    <>
      <br />
      <div className="busca">
      <div className="buscar">
          <input type="text" id='buscar-input'/>
          <button id='buscar-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
          </div>
          </div>
      <h1 id='recados-title'>RECADOS</h1>
      <br />
      <div className="recados">
       
       {[...Array(6)].map((_, index) => (
         <div id="card-recado" key={index}>
           <br />
           <img src={img} />
           <h1>"NOTÍCIA"</h1>
           <p id='p'>Quisque ligula magna, suscipit in finibus id, sodales sed erat. Nullam a tempus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus augue, maximus at blandit vitae, vestibulum quis tellus. Duis quam felis, venenatis sit amet porta venenatis, mattis fringilla est. Quisque semper ante ut diam varius, ac tincidunt sapien tempus. Suspendisse varius nisl vitae nibh interdum varius. Donec commodo ullamcorper eros, ut tristique diam laoreet in. Suspendisse volutpat augue a eros viverra finibus.</p>
            <br />
         
         </div>
       ))}
          
     </div>
     <br />
     <br />

    </>
  );
}

export default Noticias;
