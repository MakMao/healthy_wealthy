import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage'; 
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Sidebar from './components/Sidebar'
import { useFilterContext } from './context/Filters_context';
import CheckoutPage from './pages/CheckoutPage';
import About from './pages/About';
import FAQ from './pages/Faq';
import SidebarMenu from './components/SidebarMenu';
import { useProductsContext } from './context/Products_context';

function App() {
  const {modal_open} = useFilterContext()
  const {open_menu} = useProductsContext()
  return (
      <Router>
        {!modal_open && !open_menu ? <Navbar/> : null}
        <Sidebar/>
        <SidebarMenu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/" element={<ProductsPage/>}/>
          <Route path="/products/:id" element={<SingleProductPage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </Router>
  )
}


export default App;
 