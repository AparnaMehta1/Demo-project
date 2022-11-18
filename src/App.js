import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Cart from './Component/Cart/Cart';
import Delivery from './Component/Delivery/Delivery';

function App() {
  return (
    <div className="App">
      <Cart />
      <Delivery />
    </div>
  );
}

export default App;
