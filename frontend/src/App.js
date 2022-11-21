
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import ShowVehiculos from './components/ShowVehiculos';
import CreateVehiculo from './components/CreateVehiculo';
import EditVehiculo from './components/EditVehiculo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ShowVehiculos/> } />
        <Route path='/create' element={ <CreateVehiculo/> } />
        <Route path='/edit/:id' element={ <EditVehiculo/> } />
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
