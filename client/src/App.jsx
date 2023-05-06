import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' 
import GoogleMaps from "./components/GoogleMaps";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <Services />
            <Recommend />
            <Testimonials />
            <Footer />
          </div>
        }>
        </Route>
        <Route path='/plan' element={<GoogleMaps/>}>
          <Route index path='flight' element={<GoogleMaps/>}/>
          <Route path='accomodation' element={<GoogleMaps/>}/>
          <Route path='activities' element={<GoogleMaps/>}/>
          <Route path='summary' element={<GoogleMaps/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
