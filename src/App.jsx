import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Fooetr";

// 1. Replace static imports with lazy imports
const Home = lazy(() => import("./Pages/Home"));
const BookARental = lazy(() => import("./Components/BOOK A RENTAL/BookARental"));

function App() {
  return (
    <>
      <Navbar />

      {/* 2. Wrap Routes in Suspense and provide a fallback UI (like a loader) */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}>
        <Routes>
          <Route path="/vistacayinn-v2/" element={<Home />} />
          {/* <Route path="/vistacayinn-v2/book-a-rental" element={<BookARental />} /> */}
        </Routes>
      </Suspense>


      <Footer />
    </>
  );
}

export default App;