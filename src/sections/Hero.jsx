import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        
        <div className="flex items-center justify-start gap-6">
          
         
          <div className="w-80 h-80 mandala"></div>

         
        
        </div>

        
        <div>
          <h1 className="hero-title text-4xl md:text-5xl font-serifHead leading-tight">
            Varnan is where stories find their voice and form
          </h1>

          <p className="mt-5 text-vf-orange">Films · Brands · Art</p>

          <p className="mt-6 text-slate-700 max-w-md">
            Since 2009, V has been telling stories - stories of people,
            their journeys, and the places that shape them. V doesn't just
            tell stories - V honors them.
          </p>

          <div className="mt-6">
            <Link to="/services" className="btn-primary">
              View Portfolio
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
