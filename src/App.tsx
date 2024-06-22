import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import { HomePage } from "./pages/HomePage";
import { Plants } from "./pages/Plants";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/plants" element={<Plants />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
