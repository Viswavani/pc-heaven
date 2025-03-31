import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './pages/Product';
import Shopping from './pages/Shopping';
import Payment from './pages/Payment';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Product' element={<Product/>} />
          <Route path='/Shopping' element={<Shopping/>} />
          <Route path='/Payment' element={<Payment/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
