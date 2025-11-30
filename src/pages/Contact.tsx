import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form className="mt-4">
        <input type="text" placeholder="Your Email" className="border rounded-lg p-2 w-full" />
        <textarea placeholder="Your Message" className="border rounded-lg p-2 w-full mt-4" rows={4}></textarea>
        <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 mt-4">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;