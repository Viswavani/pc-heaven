import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1 className='text-red-500 text-4xl'>Hello World</h1>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
