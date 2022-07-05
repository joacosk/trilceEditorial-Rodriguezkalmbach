//import './App.css';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body/Body';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavbarApp from './components/NavBarApp/NavbarApp';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import Card from './components/Card/Card';
import ItemDetail from './components/ItemDetail/ItemDetail';


//import Logo from './assets/logo_nav2.png'


function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/home" element={<ItemListContainer />}></Route>
        <Route path="/carta" element={<Card />}></Route>
        <Route path="/detalle/:publicacionId" element={<ItemDetail />}></Route>

      </Routes>
      <ItemDetailContainer />
      <Body />
    </div>
  );
}

export default App;
