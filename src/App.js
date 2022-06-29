//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body/Body';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavbarApp from './components/NavBarApp/NavbarApp';


//import Logo from './assets/logo_nav2.png'


function App() {
  return (
    <div className="App">
      <NavbarApp />
      <ItemDetailContainer />
      <Body />
    </div>
  );
}

export default App;
