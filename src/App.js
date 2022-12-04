
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Shoe from './pages/Shoe';
import Footer from './components/Footer';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/shoe' element={<Shoe />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
