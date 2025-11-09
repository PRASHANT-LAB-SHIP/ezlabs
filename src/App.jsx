import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AppRouter from "./router";

export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {!ready && <Preloader />}
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <AppRouter />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
