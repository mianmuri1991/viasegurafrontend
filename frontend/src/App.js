import './App.css';
import Cabecera from './components/Cabecera'

function App() {
  return (
    <div className="App">
      <Cabecera />
      <div className='container-fluid'>
        <div className="row row-cols-2">
          <div className="col-4">Column</div>
          <div className="col-8">Column</div>
          <div className="col-4">Column</div>
          <div className="col-8">Column</div>
        </div>
      </div>
    </div>
  );
}

export default App;
