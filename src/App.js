import Admin from './component/admin';
import Home from './component/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './component/user';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adminlogin' element={<Admin />} />
          <Route path='/userlogin' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;