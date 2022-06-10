
import './App.css';
// import Sign from './components/sign';
import { Form } from './components/form';
import Login from './components/login';
import Sign from './components/sign';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/form" element={<Form />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
