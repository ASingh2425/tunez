'use client';

import { useState } from "react";
import Link from "next/link";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-indigo-800 to-black min-h-screen">
        <NavBar />

        <div className="max-w-xl mx-auto text-white py-16 px-6 animate-fadeInUp">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-gray-300 mb-8 text-center">
            Have a suggestion, feedback or a track we should know about? Drop us a message!
          </p>

          {submitStatus === 'success' && (
            <div className="bg-green-600 text-white p-4 rounded-lg mb-6 text-center">
              Thanks for contacting us! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6 text-center">
              Something went wrong. Please try again later.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-5"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 transition duration-300 text-white py-2 rounded"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <div className="text-center mt-4">
              <Link 
                href="/reviews" 
                className="text-indigo-400 hover:text-indigo-300 transition duration-300"
              >
                See Other Reviews →
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
} 