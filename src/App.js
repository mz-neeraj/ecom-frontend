import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className='container'>      
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<h1>Login</h1>}></Route>
        <Route path='/registration' element={<h1>Registration</h1>}></Route>
        <Route path='/admin' element={<h1>Admin's Dash Board</h1>}></Route>
        <Route path='/logout' element={<h1>Logout</h1>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
);
}

export default App;
