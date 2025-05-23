import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      setResponseMessage(response.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Failed to send the message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-gray-200">
  <div className="container mx-auto px-6 md:px-20">
    <h2 className="text-4xl font-bold text-center text-white mb-10">
      Contact Me
    </h2>
    <div className="max-w-3xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
      <form className="space-y-6">
        <div>
          <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full px-4 py-2 text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full px-4 py-2 text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            rows="5"
            className="w-full px-4 py-2 text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
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
