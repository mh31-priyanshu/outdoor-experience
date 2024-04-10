import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/accounts/Register";
import Login from "./Components/accounts/Login";
import Home from "./Pages/Home";
import { ParallaxProvider } from 'react-scroll-parallax';
import Temp from "./Components/Temp";
function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className="">
          <Routes>
        <Route 
                path="/" 
                element={<Home />} 
        />
        <Route 
                path="/login" 
                element={<Login />} 
        />
        <Route 
                path="/register" 
                element={<Register />} 
        />
        <Route 
                path="/temp" 
                element={<Temp />} 
        />
        </Routes>
        </div>
      </BrowserRouter>
    </ParallaxProvider>
    
    
  )
}

export default App;
