import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Message sent successfully!");
    toast.success("Message sent successfully!");
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT: Form */}
        <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-pink-500 text-white p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/10 border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-purple-600 font-semibold py-2 rounded hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            We’re open for any suggestion or just to have a chat
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-purple-600 mt-1 mr-3" />
              <span>198 West 21th Street, Suite 721, New York NY 10016</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-purple-600 mr-3" />
              <span>+1 235 2355 98</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-purple-600 mr-3" />
              <span>info@yoursite.com</span>
            </li>
            <li className="flex items-center">
              <FaGlobe className="text-purple-600 mr-3" />
              <span>www.yoursite.com</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;
