import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
<<<<<<< HEAD
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'





export default function App() {
  return (
<BrowserRouter>
<Header />
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/sign-in' element={<SignIn />}/>
  <Route path='/sign-up' element={<SignUp />}/>
  <Route path='/profile' element={<Profile />}/>

  
  </Routes>
</BrowserRouter>  )
=======
import About from './pages/About'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  )
>>>>>>> 0c3a565863514dd807ab80e5801e108d082f72e4
}
