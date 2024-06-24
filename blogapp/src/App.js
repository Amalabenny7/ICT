import logo from './logo.svg';
import './App.css';
import Blogform from './Components/Blogform';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Blogform/>}/>
      </Routes>
    </div>
  );
}

export default App;
