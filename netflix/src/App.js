import Movies from './Movies';
import './App.css';
import Contact from './contact'
import './contact.css'
import Accounts from './account';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountLoad from './accountLoading';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Accounts />} />
        <Route path='/accountload' element={<AccountLoad />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
