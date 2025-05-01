
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Sakabaka Afrika Safaris</title>
        <meta name="description" content="The page you were looking for could not be found." />
      </Helmet>
      
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-safari-50 py-32">
        <div className="text-center max-w-xl mx-auto px-4">
          <h1 className="text-9xl font-bold text-safari">404</h1>
          <h2 className="text-3xl font-serif mb-6">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="safari-btn">
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
