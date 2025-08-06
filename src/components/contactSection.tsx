"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-8 md:py-24 bg-white text-black">
      <div className="border-t border-black mb-16" />

      <h2 className="text-center text-7xl md:text-9xl mb-16 font-maribo">
        CONTACT
      </h2>

      <div className="border-t border-black mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-24 mx-4 md:max-w-7xl md:mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">Inquiries</h3>
        </div>

        <div>
          <Link
            href="mailto:kanwarsinghrajawat3@gmail.com"
            className="underline hover:text-gray-700 transition-colors"
            target="_blank"
          >
            kanwarsinghrajawat3@gmail.com
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/kanwar-singh-241a60169/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 transition-colors"
          >
            Linkedin
          </Link>
        </div>
        <div>
          <Link
            href="https://calendly.com/builders-club/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
