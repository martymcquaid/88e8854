import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="hero bg-gradient-to-r from-blue-300 to-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Pluimmers</h1>
        <p className="mt-4 text-xl">Innovative Solutions for Modern Challenges</p>
      </header>
      <section className="about py-10">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="mt-4">Pluimmers is dedicated to providing innovative solutions that meet the needs of our clients. Our team is passionate about pushing boundaries.</p>
      </section>
      <section className="services py-10">
        <h2 className="text-3xl font-semibold">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="service-card bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold">Consulting</h3>
            <p>Expert advice tailored to your business needs.</p>
          </div>
          <div className="service-card bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold">Development</h3>
            <p>Building robust applications that drive results.</p>
          </div>
          <div className="service-card bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold">Design</h3>
            <p>Creating visually stunning and user-friendly interfaces.</p>
          </div>
        </div>
      </section>
      <section className="gallery py-10">
        <h2 className="text-3xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="gallery-item bg-gray-200 rounded-lg"></div>
          <div className="gallery-item bg-gray-200 rounded-lg"></div>
          <div className="gallery-item bg-gray-200 rounded-lg"></div>
          <div className="gallery-item bg-gray-200 rounded-lg"></div>
          <div className="gallery-item bg-gray-200 rounded-lg"></div>
          <div className="gallery-item bg-gray-200 rounded-lg"></div>
        </div>
      </section>
      <section className="contact py-10">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <form className="mt-4">
          <input type="text" placeholder="Your Email" className="border rounded-lg p-2 w-full" />
          <textarea placeholder="Your Message" className="border rounded-lg p-2 w-full mt-4" rows={4}></textarea>
          <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 mt-4">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;