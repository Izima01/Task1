import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
