//import './App.css';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavbarApp from './components/NavBarApp/NavbarApp';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartWidgetCounter from './components/CartWidget/CartWidgetCounter/CartWidgetCounter';
import Cart from './components/Cart/Cart'
import CartItem from './components/CartItem/CartItem';

//import Logo from './assets/logo_nav2.png'


function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>      
        <Route path="/categorias/:categoriaId" element={<ItemListContainer />}></Route>        
        <Route path="/detalle/:publicacionId" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>      
    </div>
  );
}

export default App;
