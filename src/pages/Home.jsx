import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experts from "../sections/Experts";
import Metrics from "../sections/Metrics";
import Storyboard from "../sections/Storyboard";

export default function Home() {
  return (
    <div className="lace">
      <Hero />
      <About />
      <Experts />
      <Metrics />
      <Storyboard />
    </div>
  );
}
