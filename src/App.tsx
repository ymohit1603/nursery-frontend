import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import { NavBar } from "./components/NavBar";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<NavBar />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={ <Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
