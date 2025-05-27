import Footer from "./Footer";
import NavBar from "./NavBar";
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
  return (
    <>
    
      <NavBar />
      <ContactPage/>
      <Footer/>
    </>
  );
}


export default Contact;
function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    product: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, 'contacts'), formData);
      alert('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '',  subject: '', product: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };


  return (
    <>
    <div className="max-w-md mx-auto bg-amber-50 rounded-lg shadow-md p-6 mt-4 mb-4">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} 
        className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="nama"
              className="w-full px-3 py-2 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder="Your name"
              required
              value={formData.nama}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium  mb-1"
            >
              Email
            </label>
            <input
              type="email"
             name="email"
              className="w-full px-3 py-2 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium  mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full px-3 py-2 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
            Select Product
          </label>
          <select
            name="product"
            className="w-full px-4 py-2 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
            required
            value={formData.product}
            onChange={handleChange}
          >
            <option value="">Select a product</option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
            <option value="product4">Product 4</option>
          </select>
        </div>


          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium  mb-1"
            >
              Message
            </label>
            <textarea
             name="message"
              rows={4}
              className="w-full px-3 py-2 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder="Your message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
   
    </>
  )
  
}