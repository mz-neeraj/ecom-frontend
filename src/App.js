import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddCategory from './components/AddCategory';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className='container'>      
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Register/>}></Route>
        <Route path='/admin' element={<h1>Admin's Dash Board</h1>}></Route>
        <Route path='/logout' element={<h1>Logout</h1>}></Route>
        <Route path='/addCatagory' element={<AddCategory/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
);
}

export default App;
