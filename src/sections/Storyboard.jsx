import React from "react";
import { Link } from "react-router-dom";

export default function Storyboard() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serifHead">The storyboard reveals the breadth of our craft.</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/services/film-production" className="block polaroid transform hover:-translate-y-2 transition">
            <img src="/Frame 31.png" alt="film production" className="w-full h-64 object-cover rounded" />
            <div className="mt-2 text-center">Film Production</div>
          </Link>

          <Link to="/services/branding" className="block polaroid transform hover:-translate-y-2 transition">
            <img src="/Frame 31 (1).png" alt="branding" className="w-full h-64 object-cover rounded" />
            <div className="mt-2 text-center">Branding</div>
          </Link>

          <Link to="/services/art-curation" className="block polaroid transform hover:-translate-y-2 transition">
            <img src="/Frame 31 (2).png" alt="art curation" className="w-full h-64 object-cover rounded" />
            <div className="mt-2 text-center">Art Curation</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
