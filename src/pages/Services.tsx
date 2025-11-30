import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <ul className="mt-4 space-y-4">
        <li>Consulting - Tailored advice for your business.</li>
        <li>Development - Robust applications that drive results.</li>
        <li>Design - Visually stunning user interfaces.</li>
      </ul>
    </div>
  );
};

export default Services;