import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xyyqrdaa", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("Thanks for your submission!");
        form.reset();
      } else {
        setStatus("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
            {status && (
              <div className="mt-4 text-center text-sm font-medium text-green-600">
                {status}
              </div>
            )}
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-32 h-32 bg-gray-300 mx-auto mb-4 flex items-center justify-center text-gray-500">
                Logo
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Intellipaat</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <p className="text-gray-600">123 Learning Street, Knowledge City, Education State 12345, Country</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <p className="text-gray-600">info@intellipaat.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;