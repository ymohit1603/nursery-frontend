import  { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Plants = lazy(() => import('./pages/Plants'));
const Medicines = lazy(() => import('./pages/Medicines'));
const ContactUs = lazy(() => import('./pages/contact'));
const Blogs = lazy(() => import('./pages/Blog'));
const IndoorPlant = lazy(() => import('./pages/Blog/indoor'));
const OutdoorPlant = lazy(() => import('./pages/Blog/outdoor'));
const OtherPlant = lazy(() => import('./pages/Blog/other'));
const SpecificIndoorPlant = lazy(() => import('./pages/Blog/indoor/byId'));
const PlantsById = lazy(() => import('./pages/Plants/plantsById'));
const Cart = lazy(() => import('./pages/cart'));

import { HomePage } from './pages/Home/HomePage';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/plant/:id" element={<PlantsById />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/indoor" element={<IndoorPlant />} />
            <Route path="/blog/indoor/:id" element={<SpecificIndoorPlant />} />
            <Route path="/blog/outdoor" element={<OutdoorPlant />} />
            <Route path="/blog/other" element={<OtherPlant />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
