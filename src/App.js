
import './App.css';
import Navbar from './components/Navbar/Navbar';
import logo from './images/logo.png'
import Grid from './components/Grid/Grid'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <div className='colorbox'></div>
      <img src={logo} className='logo'></img>
      <Grid/>
      

      
      

      </div>
    </div>
  );
}

export default App;
