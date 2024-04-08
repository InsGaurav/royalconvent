import React from 'react';

const FacilitiesCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FacilitiesCard;
