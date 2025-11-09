import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContact, reset } from "../features/contactSlice";

const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^[0-9]{7,15}$/;

export default function ContactForm() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((s) => s.contact);

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [touched, setTouched] = useState({});
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    if (success) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setTouched({});
      const t = setTimeout(() => dispatch(reset()), 3000);
      return () => clearTimeout(t);
    }
  }, [success, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim())
      return "All fields are required.";
    if (!emailRegex.test(form.email)) return "Enter a valid email.";
    if (!phoneRegex.test(form.phone)) return "Enter a valid phone (7-15 digits).";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setLocalError(v);
    if (v) return;
    dispatch(submitContact(form));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded">Form Submitted</div>}
      {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded">{typeof error === "string" ? error : JSON.stringify(error)}</div>}
      {localError && <div className="p-3 bg-amber-50 border border-amber-200 text-amber-700 rounded">{localError}</div>}

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input name="name" value={form.name} onChange={handleChange} onBlur={() => setTouched((t) => ({ ...t, name: true }))} className="w-full border rounded px-3 py-2" placeholder="Your name" />
        {touched.name && !form.name.trim() && <div className="text-xs text-red-500 mt-1">Name is required</div>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input name="email" value={form.email} onChange={handleChange} onBlur={() => setTouched((t) => ({ ...t, email: true }))} className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
        {touched.email && form.email && !emailRegex.test(form.email) && <div className="text-xs text-red-500 mt-1">Invalid email</div>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input name="phone" value={form.phone} onChange={(e) => { const v = e.target.value.replace(/[^0-9]/g, ""); setForm((s) => ({ ...s, phone: v })); }} onBlur={() => setTouched((t) => ({ ...t, phone: true }))} className="w-full border rounded px-3 py-2" placeholder="9876543210" />
        {touched.phone && form.phone && !phoneRegex.test(form.phone) && <div className="text-xs text-red-500 mt-1">Invalid phone</div>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} onBlur={() => setTouched((t) => ({ ...t, message: true }))} className="w-full border rounded px-3 py-2 h-28" placeholder="Tell us about your project" />
        {touched.message && !form.message.trim() && <div className="text-xs text-red-500 mt-1">Message is required</div>}
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={loading} className="btn-primary">{loading ? "Sending..." : "Send Message"}</button>
        <button type="button" onClick={() => { setForm({ name: "", email: "", phone: "", message: "" }); setTouched({}); dispatch(reset()); }} className="px-3 py-2 border rounded">Reset</button>
      </div>
    </form>
  );
}
