import { Route, Routes, Navigate } from "react-router-dom"
import LandingPage from './pages/landingpage.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App(){
  return (<>
   <Routes>
    <Route path="/" element={<LandingPage/>} />
   </Routes></>
  )
}
export default App