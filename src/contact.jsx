import { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'service_vzvypwa', 
        'template_bexjqyt',
        formData,
        'RFa8I66ZzH7vn74lO'
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <main className="min-h-screen bg-[#0F172A] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10">
        {/* Contact Info Card */}
        <section className="flex-1 bg-[#1E293B] rounded-xl shadow-lg p-8 flex flex-col justify-center mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center md:text-left">
            Get in Touch
          </h1>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-500 text-2xl mt-1" />
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <a
                  href="mailto:enockjufri@gmail.com"
                  className="text-blue-400 hover:underline break-all"
                >
                  enockjufri@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-blue-500 text-2xl mt-1" />
              <div>
                <h2 className="text-lg font-semibold">Phone</h2>
                <a
                  href="tel:+254797321823"
                  className="text-blue-400 hover:underline block"
                >
                  +254797321823
                </a>
                <a
                  href="tel:+254792072836"
                  className="text-blue-400 hover:underline block"
                >
                  +254792072836
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-green-500 text-2xl mt-1" />
              <div>
                <h2 className="text-lg font-semibold">WhatsApp</h2>
                <a
                  href="https://wa.me/+254797321823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  +254797321823
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
              <div>
                <h2 className="text-lg font-semibold">Location</h2>
                <p className="text-gray-300">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Card */}
        <section className="flex-1 bg-[#1E293B] rounded-xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 text-center">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-black font-bold py-3 rounded transition"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-2 text-center text-sm text-gray-300">{status}</p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;