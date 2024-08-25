import { Route, Routes } from 'react-router-dom';
import Navbar from './navbarComponents/Navbar';
import HomePage from './pages/HomePage';

import './App.css';

const App = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;