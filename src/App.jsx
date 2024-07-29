import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacta/Contacts';
import NotFound from './pages/NotFound';
import ProductList from './pages/admin/products/ProductList';
import CreateProduct from './pages/admin/products/CreateProduct';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='outlet-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/admin/productList' element={<ProductList />} />
          <Route path='/admin/products/create' element={<CreateProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
