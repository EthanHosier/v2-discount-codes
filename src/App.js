import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Homepage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
