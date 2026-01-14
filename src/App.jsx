import { Route, Routes, Navigate } from "react-router-dom"
import LandingPage from './pages/landingpage.jsx'

import 'swiper/css';

function App(){
  return (<>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
   </Routes></>
  )
}
export default App