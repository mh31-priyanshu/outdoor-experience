import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/accounts/Register";
import Login from "./Components/accounts/Login";
import Home from "./Pages/Home";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Sinhagad } from "./Pages/Treks/Sinhagad";
import {Visapur} from "./Pages/Treks/Visapur"
import { Rajgad } from "./Pages/Treks/Rajgad";
import { Lohagad } from "./Pages/Treks/Lohagad";
import { Harish } from "./Pages/Treks/Harish";
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
                path="/sinhagad" 
                element={<Sinhagad />} 
        />
        <Route 
                path="/visapur" 
                element={<Visapur />} 
        />
        <Route 
                path="/rajgad" 
                element={<Rajgad />} 
        />
        <Route 
                path="/lohagad" 
                element={<Lohagad />} 
        />
        <Route 
                path="/harishchandragad" 
                element={<Harish />} 
        />
        </Routes>
        
        </div>
      </BrowserRouter>
    </ParallaxProvider>
    
    
  )
}

export default App;
