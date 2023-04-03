import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header';
import Home from './components/Home';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
