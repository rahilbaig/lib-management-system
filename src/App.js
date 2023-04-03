import Admin from './component/admin';
import Home from './component/home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './component/user';
const App = () => {
  return (
    <div className='mainpage'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin-login' element={<Admin />} />
          <Route path='/user-login' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;