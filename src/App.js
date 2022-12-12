import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import CategoriesPage from './components/CategoriesPage';
import CouponsPage from './components/CouponsPage';
import BrandsPage from './components/BrandsPage';
import SpecificBrandPage from './components/SpecificBrandPage';
import CategoryTitle from './components/CategoryTitle';
import useGlobal from './hooks/useGlobal'
import ContactUs from './components/ContactUs';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  const global = useGlobal();
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/brands' element={<BrandsPage/>}/>

        <Route path='/coupons' element={<CouponsPage searchQuery="dog"/>}>

          {global.categories.map((e,i) => {
            return <Route path={e.name.toLowerCase()} element={<CategoryTitle category={e}/>}/>
                
          })}
        </Route>
          
        <Route path='/brand1' element = {<SpecificBrandPage brand={"[BRAND]"}/>}/>
        <Route path='/contact-us' element = {<ContactUs/>}/>
        <Route path='/terms&conditions' element={<TermsAndConditionsPage/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      </Route>
    </Routes>
  );
}

export default App;
