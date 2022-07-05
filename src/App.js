//import './App.css';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavbarApp from './components/NavBarApp/NavbarApp';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';


//import Logo from './assets/logo_nav2.png'


function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<ItemListContainer titulo={"INICIO"} />}></Route>
        <Route path="/Categoria/:categoriaId" element={<ItemListContainer />}></Route>

      </Routes>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
