import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Product from './components/Product'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="products" element={<Product />} exact />
      </Routes>
    </BrowserRouter>
  );
}
