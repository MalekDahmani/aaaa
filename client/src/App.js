import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import {useAuthContext} from './hooks/useAuthContext'

import Home from './routes/Home/Home'
import Login from './routes/login/Login'
import Signup from './routes/signUp/signup'
import About from './routes/about/about'
import Nutrition from './routes/nutrition/nutrition'



function App() {

  const {user} = useAuthContext()

  return (
    <div className="app">
      <BrowserRouter>
       <Navbar/>
       <div className='page'>
        <Routes>
          <Route
          path="/"
          element={<Home/> }
          />
          <Route
          path="/login"
          element={!user ? <Login/> :<Navigate to="/"/>}
          />
          <Route
          path="/signup"
          element={!user ? <Signup/> : <Navigate to="/"/>}
          />
          <Route
          path="/signup"
          element={!user ? <Signup/> : <Navigate to="/"/>}
          />
          <Route path="/about"
          element={<About/>}>
          </Route>
          <Route path="/nutrition" element={<Nutrition/>}></Route> 
         </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
