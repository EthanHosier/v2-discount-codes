import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import CategoriesPage from './components/CategoriesPage';
import CouponsPage from './components/CouponsPage';
import BrandsPage from './components/BrandsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/brands' element={<BrandsPage/>}/>
        <Route path='/coupons' element={<CouponsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
