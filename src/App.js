import Admin from './component/admin';
import Home from './component/home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './component/user';
import Adminportal from './component/adminportal';
import Userportal from './component/userportal';
const App = () => {
  return (
    <div className='mainpage'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin-login' element={<Admin />} />
          <Route path='/user-login' element={<User />} />
          <Route path='/admin/*' element={<Adminportal/>}/>
          <Route path='/user/*' element={<Userportal/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;