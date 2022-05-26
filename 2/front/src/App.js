import './App.css';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Cabinet from './pages/Cabinet';
import Card from './pages/Card';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cabinet' element={<Cabinet/>}/>
        <Route path='/cart' element={<Card/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
