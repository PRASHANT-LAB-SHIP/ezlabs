import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const FilmProduction = lazy(() => import("./pages/FilmProduction"));
const Branding = lazy(() => import("./pages/Branding"));
const ArtCuration = lazy(() => import("./pages/ArtCuration"));
const Contact = lazy(() => import("./pages/Contact"));

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/film-production" element={<FilmProduction />} />
      <Route path="/services/branding" element={<Branding />} />
      <Route path="/services/art-curation" element={<ArtCuration />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
