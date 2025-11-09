import React from "react";
import { Link } from "react-router-dom";

export default function Experts() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="col-span-2 relative">
          <img src="/About Team.png" alt="team" className="w-full object-cover" />
          <Link to="/services/film-production" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow">Film Makers</Link>
        </div>

        <div>
          <div className="text-center">
            <h4 className="text-xl font-serifHead">Branding Experts</h4>
            <p className="text-slate-600 mt-2">We shape stories that stay with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
