import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/navbar/navbar.js';
import {Items} from './components/foodlist/item.js';
import {Slider} from './components/selectpanel/slider.js';
import {Detail} from './components/detail/detail.js';
import {Routes, Route} from 'react-router-dom';
import {Favourite} from './components/favouriteList/favourite.js';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Slider/>
           
      <Routes>
        <Route path="/items" element={<Items/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/favorite" element={<Favourite/>} />
     
      </Routes>
    
    
      
    </div>
  );
}

export default App;
