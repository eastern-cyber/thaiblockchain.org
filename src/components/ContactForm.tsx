"use client";

import React, { useState } from "react";

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/f9v4coamer18c"; // <- replace this with your real SheetDB URL

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const payload = { data: form }; // SheetDB requires this wrapper

    try {
      await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setForm({ name: "", email: "", phone: "", message: "" });
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-600 rounded bg-zinc-800 text-white"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-600 rounded bg-zinc-800 text-white"
      />
      <input
        name="phone"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-2 border border-gray-600 rounded bg-zinc-800 text-white"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-600 rounded bg-zinc-800 text-white"
        rows={4}
      />

      {success && <p className="text-green-400">Thanks! We&apos;ll be in touch soon.</p>}
      {error && <p className="text-red-500">Oops! Something went wrong.</p>}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;