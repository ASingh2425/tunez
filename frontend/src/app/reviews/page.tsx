'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function Reviews() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/contact');
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          setError('Failed to fetch messages');
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-black text-white flex justify-center items-center">
          <p>Loading reviews...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-indigo-800 to-black min-h-screen">
        <NavBar />

        <div className="max-w-4xl mx-auto text-white py-16 px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">User Reviews & Messages</h1>
            <Link 
              href="/contact" 
              className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white px-4 py-2 rounded"
            >
              Add Your Review
            </Link>
          </div>

          {error && (
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          {messages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No reviews yet.</p>
              <p className="text-gray-500">Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div key={message._id} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-400">{message.name}</h3>
                      <p className="text-gray-400 text-sm">{message.email}</p>
                      {message.phone && (
                        <p className="text-gray-400 text-sm">{message.phone}</p>
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">
                      {formatDate(message.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{message.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
} 