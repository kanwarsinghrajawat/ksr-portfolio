"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-4 md:px-12 py-24 bg-white text-black"
    >
      {/* Top Border */}
      <div className="border-t border-black mb-16" />

      {/* Title */}
      <h2 className="text-center text-5xl md:text-6xl font-serif mb-16">
        CONTACT
      </h2>

      {/* Bottom Border */}
      <div className="border-t border-black mb-12" />

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">Inquiries</h3>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <a
            href="mailto:youremail@example.com"
            className="underline hover:text-gray-700 transition-colors"
          >
            youremail@example.com
          </a>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <Link
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 transition-colors"
          >
            linkedin.com/in/your-profile
          </Link>
        </div>
      </div>
    </section>
  );
}
