"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-game text-center mb-8">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."
              className="px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            variant="pixel"
            className="w-full text-xl py-6"
          >
            Send Message
          </Button>

        </form>
      </div>

    </div>
  );
}