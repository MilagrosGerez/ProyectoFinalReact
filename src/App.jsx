import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/navBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailcontainer';
import Checkout from './components/CheckOut';
import { CartProvider } from './contexts/CartContex';
import './App.css';

function App() {
  return (
      <CartProvider>
          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/category/:categoryId" element={<ItemListContainer />} />
                  <Route path="/item/:id" element={<ItemDetailContainer />} />
                  <Route path="/cart" element={<CartWidget/>} />
                  <Route path="/checkout" element={<Checkout />} />
              </Routes>
          </BrowserRouter>
      </CartProvider>
  );
}

export default App;