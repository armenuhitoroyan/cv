import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loading";
import Navbar from "../components/header/Navbar";

import Homepage from "../pages/homepage/Homepage";
import Home2 from "../pages/homepage/Home2";
import Home3 from "../pages/homepage/Home3";
import Home4 from "../pages/homepage/Home4";
import Services from "../pages/services/Services";
import ServicesDetails from "../pages/services/ServicesDetails";
import Portfolio from "../pages/portfolio/Portfolio1";
import Portfolio2 from "../pages/portfolio/Portfolio2";
import Portfolio3 from "../pages/portfolio/Portfolio3";
import OurBlog from "../pages/blog/OurBlog";
import BlogDetails2 from "../pages/blog/BlogDetails2";
import BlogDetails1 from "../pages/blog/BlogDetails1";
import About from "../pages/pages/About";
import ErrorPage from "../pages/pages/Errorpage";
import PricingPlans from "../pages/pages/PricingPlans";
import Contact from "../pages/contact/Contact";

function AppRoutes(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    const wsStatus = messages.length > 0;
    setLoading(!(isOnline && wsStatus));

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline, messages]);

  return (
    <>
      {!isOnline || loading ? (
        <Loader />
      ) : (
        <Router>
          <div style={{ width: "100%", backgroundColor: "cyan" }}>
            <NavWrapper />
          </div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/index-2" element={<Home2 />} />
            <Route path="/index-3" element={<Home3 />} />
            <Route
              path="/index-4"
              element={
                <Home4 color="black" backgroundColor="white" title="index 4" />
              }
            />
            <Route
              path="/index-4-dark"
              element={
                <Home4
                  color="white"
                  backgroundColor="black"
                  title="index 4 dark"
                />
              }
            />
            <Route path="/service" element={<Services />} />
            <Route path="/service-details" element={<ServicesDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio-details" element={<Portfolio2 />} />
            <Route path="/portfolio-details-2" element={<Portfolio3 />} />
            <Route path="/blog-details-1" element={<BlogDetails1 />} />
            <Route path="/our-blog" element={<OurBlog />} />
            <Route path="/blog-details-2" element={<BlogDetails2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/pricing-plans" element={<PricingPlans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} /> {/* 404 էջերի համար */}
          </Routes>
        </Router>
      )}
    </>
  );
}

// ✅ Wrapper կոմպոնենտ՝ useLocation օգտագործելու համար
const NavWrapper = () => {
  const location = useLocation();
  return location.pathname !== "/index-4" &&
    location.pathname !== "/index-4-dark" ? (
    <div style={{ width: "100%", backgroundColor: "cyan" }}>
      <Navbar />
    </div>
  ) : null;
};

export default AppRoutes;
