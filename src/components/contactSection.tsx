"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuPhone as Phone,
  LuSend as Send,
} from "react-icons/lu";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-16 inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-4 text-purple-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <p className="text-slate-300">9991917304</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-4 text-purple-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-slate-300">kanwarsinghrajawat3@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 text-purple-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <p className="text-slate-300">Haryana, India</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6">
            Social Profiles
          </h3>

          <div className="flex space-x-4">
            <a
              href="https://github.com/kanwarsinghrajawat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kanwar-singh-241a60169/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-slate-800 p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center">
                  <p className="text-white">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white focus:ring-purple-500 focus:border-purple-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white focus:ring-purple-500 focus:border-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white focus:ring-purple-500 focus:border-purple-500 min-h-[120px]"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
