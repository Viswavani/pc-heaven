import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <Product/>
    </div>
  );
}

export default App;
