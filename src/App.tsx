import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Auth//Signup"
import Signin from "./pages/Auth/Signin"
import { HomePage } from "./pages/Home/HomePage";
import { Plants } from "./pages/Plants";
import { Medicines } from "./pages/Medicines";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/medicines" element={<Medicines />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
