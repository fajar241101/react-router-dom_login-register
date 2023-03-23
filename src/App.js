import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import input from './components1/atoms/Input';
import Home from './components1/Home';
import Login from './components1/Login';
import Register from './components1/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;