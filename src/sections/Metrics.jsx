import React from "react";

export default function Metrics() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="flex gap-4">
            <div className="p-6 bg-yellow-50 polaroid transform rotate-[-6deg]"> <div className="text-3xl font-bold">85+</div><div className="text-sm text-slate-500">Projects</div></div>
            <div className="p-6 bg-yellow-50 polaroid transform rotate-2"> <div className="text-3xl font-bold">50+</div><div className="text-sm text-slate-500">Happy Clients</div></div>
            <div className="p-6 bg-yellow-50 polaroid transform rotate-3"> <div className="text-3xl font-bold">10+</div><div className="text-sm text-slate-500">Experts Team</div></div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serifHead">Take a closer look at the stories V bring to life.</h3>
        </div>
      </div>
    </section>
  );
}
