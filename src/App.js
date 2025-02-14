import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './pages/Product';
import Shopping from './pages/Shopping';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <Product/>
      <Shopping/>
    </div>
  );
}

export default App;
