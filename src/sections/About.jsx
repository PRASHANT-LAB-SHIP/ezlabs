import React from "react";

export default function About() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="p-6 bg-yellow-50 rounded-lg shadow-lg transform rotate-[-2deg]">
            <p className="text-sm">Some craft films. Some build brands. Some curate art. We bring it all together — a collective of storytellers driven by one belief: every project deserves more than just a message; it should become a masterpiece.</p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-serifHead">Every project is more than just a brief</h3>
          <p className="mt-4 text-slate-700">A montage of familiar faces and names. We have been fortunate to walk alongside both - listening, creating, and building stories that matter.</p>
        </div>
      </div>
    </section>
  );
}
