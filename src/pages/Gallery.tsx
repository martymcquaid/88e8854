import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="gallery-item bg-gray-200 rounded-lg"></div>
        <div className="gallery-item bg-gray-200 rounded-lg"></div>
        <div className="gallery-item bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Gallery;