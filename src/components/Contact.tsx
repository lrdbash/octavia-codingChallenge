'use client';

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join the Climate Solution</h2>
          <p className="text-lg text-gray-300 mb-12">
            Ready to be part of the solution? Contact us to learn more about our technology
            and partnership opportunities.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-gray-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
