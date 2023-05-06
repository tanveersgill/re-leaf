import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flight from "./pages/Flight";
import Accommodation from "./pages/Accommodation";
import Activities from "./components/Activities";
import Plan from "./components/Plan";
// import Summary from "./components/Summary";

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
        <Route
          path="/"
          element={
            <div>
              <ScrollToTop />
              <Navbar />
              <Hero />
              <Services />
              <Recommend />
              <Testimonials />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/plan" element={<Plan />}>
          <Route index path="flight" element={<Flight />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="activities" element={<Activities />} />
          {/* <Route path="summary" element={<Summary />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
