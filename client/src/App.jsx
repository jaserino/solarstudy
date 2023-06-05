import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
