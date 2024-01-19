import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

import Seller from './components/Seller';

function App() {
  return (
    <Routes>

      <Route path='/' element = {<Seller/>}/>

    </Routes> 
  );
}

export default App;
