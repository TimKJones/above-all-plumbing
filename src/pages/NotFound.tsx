import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-plumbing-700">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <a 
            href="/" 
            className="inline-block bg-plumbing-500 hover:bg-plumbing-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
