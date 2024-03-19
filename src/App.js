import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} /> 
          <Route path='/about' element={<About/>} /> 
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
