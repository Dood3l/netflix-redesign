import Movies from './Movies';
import './App.css';
import Contact from './contact'
import './contact.css'

import Accounts from './account';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountLoad from './accountLoading';
import Footer from './components/Footer';
import Shows from './shows';
import AccountLoads from './accountloading2';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Accounts />} />
        <Route path='/accountload' element={<AccountLoad />} />
        <Route path='/accountloads' element={<AccountLoads />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>

  );
}

export default App;
