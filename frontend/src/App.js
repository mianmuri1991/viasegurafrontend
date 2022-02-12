import './App.css';
import Cabecera from './components/Cabecera'
import Mapa from './components/Mapa';
import Tabla from './components/Tabla';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <div className='container-fluid' >
        <div className="row" >
          

          <div className="col-12 p-3" style={{ height: "400px" }}>
            <p className="text-start fw-bold fs-3">Información sobre siniestros en las vías principales de la ciudad</p>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Ingrese coordenadas</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <Mapa/>
          </div>
        </div>
        <div className="row" >
          <div className="col-4 p-3" style={{ height: "100px" }}></div>
          <div className="col-8 p-3 "></div>
        </div>
        <div className="row" >
          <div className="col-4 p-3"><img src="/cuadros.jpg" alt="" style={{ height: '220px' }}/></div>
          <div className="col-8 p-3 "><Tabla /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
