import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './components/Menu';
import Home from './pages/Home';
import MenuModal from './components/MenuModal';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage'; 

function App() {
  return (
    <Router>
      <Navbar/>
      <MenuModal/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/" element={<ProductsPage/>} />
        <Route path="/products/:id" element={<SingleProductPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
 