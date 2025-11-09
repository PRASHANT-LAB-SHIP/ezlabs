import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/Hero Mandala.png" alt="V Films" className="w-10 h-10" />
          <div className="font-serifHead text-xl">V Films</div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen((s) => !s)}>
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0b2545" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
