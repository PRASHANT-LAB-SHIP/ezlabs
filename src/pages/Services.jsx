import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-6 font-serifHead">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/services/film-production" className="p-6 bg-white rounded shadow">Film Production</Link>
          <Link to="/services/branding" className="p-6 bg-white rounded shadow">Branding</Link>
          <Link to="/services/art-curation" className="p-6 bg-white rounded shadow">Art Curation</Link>
        </div>
      </div>
    </main>
  );
}
