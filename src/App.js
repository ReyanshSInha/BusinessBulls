import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Regiter';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Login/>
      <Register/>

    </div>
  );
}

export default App;
