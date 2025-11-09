import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-6 bg-white rounded-lg p-8 shadow">
        <h2 className="text-2xl mb-4 font-serifHead">Contact Us</h2>
        <p className="text-slate-600 mb-6">Reach out and we will respond within 48 hours.</p>
        <ContactForm />
      </div>
    </main>
  );
}
