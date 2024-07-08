import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Auth//Signup"
import Signin from "./pages/Auth/Signin"
import { HomePage } from "./pages/Home/HomePage";
import { Plants } from "./pages/Plants";
import { Medicines } from "./pages/Medicines";
import { ContactUs } from "./pages/contact";
import Blogs from "./pages/Blog";
import IndoorPlant from "./pages/Blog/indoor";
import OutdoorPlant from "./pages/Blog/outdoor";
import OtherPlant from "./pages/Blog/outdoor";
import SpecificIndoorPlant from "./pages/Blog/indoor/byId"
import PlantsById from "./pages/Plants/plantsById";
import Cart from "./pages/cart";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/plant/:id" element={<PlantsById />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/indoor" element={<IndoorPlant />} />
          <Route path="/blog/indoor/:id" element={<SpecificIndoorPlant  />} />
          <Route path="/blog/outdoor" element={<OutdoorPlant />} />
          <Route path="/blog/other" element={<OtherPlant />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
