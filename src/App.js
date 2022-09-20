import logo from './React0.png';
import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">

      <img src={logo} className="logo" alt="logo" />
      <Nav/>
    <Footer/>
      </header>

    
  
    </div>
  );
}

export default App;

 