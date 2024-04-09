import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/accounts/Register";
import Login from "./Components/accounts/Login";
import Home from "./Pages/Home";

function App() {
  return (
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
        </Routes>
        </div>
      </BrowserRouter>
    // <Router>
      // <Route 
      //         path="/" 
      //         element={<Login />} 
      // />
      // <Route 
      //         path="/login" 
      //         element={<Login />} 
      // />
      // <Route 
      //         path="/register" 
      //         element={<Register />} 
      // />

    // </Router>
    
  )
}

export default App;
