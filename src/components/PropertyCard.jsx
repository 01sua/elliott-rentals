import React from 'react';

const PropertyCard = ({ image, address, details, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={address} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{address}</h3>
        <p className="text-sm text-gray-600">{details}</p>
        <p className="text-lg font-semibold text-blue-600 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;