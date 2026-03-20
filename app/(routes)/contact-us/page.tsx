"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-game">
      
      {/* TOP BANNER */}
      <div className="relative w-full h-[200px] sm:h-[260px] md:h-[300px] overflow-hidden">
        <Image
          src="/contact-us.webp"
          width={1400}
          height={300}
          alt="contact-banner"
          className="w-full h-full object-contain"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mt-2">
            We would love to help you!
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT: CONTACT INFO */}
        <div className="border border-4 rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
          
          <h2 className="text-3xl sm:text-4xl text-yellow-400">
            Contact Info
          </h2>

          <div className="flex items-start gap-4">
            <Phone className="text-yellow-400" />
            <div>
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400 text-lg">
                +91 98765 43210 <br />
                +91 91234 56789
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-yellow-400" />
            <div>
              <h3 className="text-2xl">Location</h3>
              <p className="text-gray-400 text-lg">
                Kolkata, India <br />
                700001
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-yellow-400" />
            <div>
              <h3 className="text-2xl">Business Hours</h3>
              <p className="text-gray-400 text-lg">
                Mon - Fri: 10am - 8pm <br />
                Sat - Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="border border-4 rounded-2xl p-6 sm:p-8 bg-zinc-900 shadow-lg">
          
          <h2 className="text-3xl sm:text-4xl text-yellow-400 text-center mb-6">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            <div>
              <label className="text-sm sm:text-lg">Your Name</label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-zinc-800 rounded-xl outline-none border border-zinc-700"
              />
            </div>

            <div>
              <label className="text-sm sm:text-lg">Your Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-zinc-800 rounded-xl outline-none border border-zinc-700"
              />
            </div>

            <div>
              <label className="text-sm sm:text-lg">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 mt-2 bg-zinc-800 rounded-xl outline-none border border-zinc-700 resize-none"
              />
            </div>

            <Button
              variant="pixel"
              type="submit"
              className="text-base sm:text-lg py-5"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* FOOTER CONTACT */}
      <div className="text-center mt-10 px-4">
        <p className="text-md sm:text-xl text-gray-300">
          You can also reach us at:
        </p>
        <p className="text-lg sm:text-2xl text-yellow-400 mt-2 mb-6">
          support@codequest.com
        </p>
      </div>
    </div>
  );
}