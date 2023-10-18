import './App.css';
import Home from './Home'; 
import Home1 from './Home1'
import Nav from './Nav';
import Reg from './Reg';
import Book from './Book';
import Adm from './Adm';
import Add from './Add';
import Avai from './Avai';
import Upd from './Upd';
import View from './View';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';
import Avaiadd from './Avaiadd';
import Nav1 from './Nav1';
import Main from './Main';
import Avaih from './Avaih';
import Adnav from './Adnav';
import Adminpg from './Adminpg';
function App() {
  return (
    //The browseRouter is used to route the page while using project 
     <BrowserRouter>
       <Routes>
        {/* The '/' will navigate first when the project will open */}
        <Route path='/' element={<Main />}></Route> 
        <Route path='Home' element={<Home/>}></Route>
        <Route path='/Home1' element={<Home1 />}></Route> 
        <Route path='/Login'element={<Login/>}></Route>
        <Route path='/Reg' element={<Reg/>}></Route>
        <Route path='/Book' element={<Book />}></Route>
        <Route path='/Adm' element={<Adm/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
        <Route path='/Avai' element={<Avai />}></Route>
        <Route path='/Upd' element={<Upd/>}></Route>
        <Route path='/View' element={<View/>}></Route> 
        <Route path='/Nav1' element={<Nav1/>}></Route>
        <Route path='Nav' element={<Nav/>}></Route>
        <Route path='/Avaih' element={<Avaih/>}></Route>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/Adnav' element={<Adnav/>}></Route>
        <Route path='/Avaiadd' element={<Avaiadd/>}></Route>
        <Route path='Adminpg' element={<Adminpg/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
