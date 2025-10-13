import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";


// GalleryModal component
const GalleryModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl z-10"
        onClick={onClose}
      >
        &times;
      </button>
      
      <button 
        className="absolute left-4 text-white text-4xl z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        &#10094;
      </button>
      
      <button 
        className="absolute right-4 text-white text-4xl z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        &#10095;
      </button>
      
      <div className="max-w-5xl max-h-[90vh]">
        <img 
          src={images[currentIndex]} 
          alt={`Gallery ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      
      <div className="absolute bottom-4 text-white text-lg">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};


const propertyData = [
  {
    id: "1706",
    image: require("../assets/1706.png"),
    images: [
        require("../assets/1706.png"),
        require("../assets/1706_1.jpeg"),
        require("../assets/1706_2.jpeg"),
        require("../assets/1706_3.jpeg"),
        require("../assets/1706_4.jpeg"),
        require("../assets/1706_5.jpeg"),
        require("../assets/1706_6.jpeg"),
        require("../assets/1706_7.jpeg"),
        require("../assets/1706_8.jpeg"),
        require("../assets/1706_9.jpeg"),
        require("../assets/1706_10.jpeg"),
        require("../assets/1706_11.jpeg"),
        require("../assets/1706_12.jpeg"),
        require("../assets/1706_13.jpeg"),
        require("../assets/1706_14.jpeg"),
        require("../assets/1706_15.jpeg"),
        require("../assets/1706_16.jpeg"),
        require("../assets/1706_17.jpeg"),
        require("../assets/1706_18.jpeg"),
        require("../assets/1706_19.jpeg"),
        require("../assets/1706_20.jpeg"),
        require("../assets/1706_21.jpeg"),
    ],

    address: "1706 N Alder St",
    details: "5 Bed, 2.5 Bath",
    price: "$3,500/month",
  },
  {
    id: "2909",
    image: require("../assets/2909.png"),
    images: [
      require("../assets/2909_1.jpeg"),
      require("../assets/2909_2.jpeg"),
      require("../assets/2909_3.jpeg"),
      require("../assets/2909_4.jpeg"),
      require("../assets/2909_5.jpeg"),
      require("../assets/2909_6.jpeg"),
      require("../assets/2909_7.jpeg"),
      require("../assets/2909_8.jpeg"),
      require("../assets/2909_9.jpeg"),
      require("../assets/2909_10.jpeg"),
      require("../assets/2909_11.jpeg"),
      require("../assets/2909_12.jpeg"),
      require("../assets/2909_13.jpeg"),
      require("../assets/2909_14.jpeg"),
      require("../assets/2909_15.jpeg"),
      require("../assets/2909_16.jpeg"),
      require("../assets/2909_17.jpeg"),
      require("../assets/2909_18.jpeg"),
      require("../assets/2909_19.jpeg"),
      require("../assets/2909_20.jpeg"),
      require("../assets/2909_21.jpeg"),
      require("../assets/2909_22.jpeg"),
      require("../assets/2909_23.jpeg"),
    ],
    address: '2909 N 22th St',
    details: '6 Bed, 3 Bath',
    price: '$3,990/month',
  },
  {
    id: "3305A",
    image: require("../assets/3305.png"),
    images: [
      require("../assets/3305A_1.jpeg"),
      require("../assets/3305A_2.jpeg"),
      require("../assets/3305A_3.jpeg"),
      require("../assets/3305A_4.jpeg"),
      require("../assets/3305A_5.jpeg"),
      require("../assets/3305A_6.jpeg"),
      require("../assets/3305A_7.jpeg"),
      require("../assets/3305A_8.jpeg"),
      require("../assets/3305A_9.jpeg"),
      require("../assets/3305A_10.jpeg"),
      require("../assets/3305A_11.jpeg"),
      require("../assets/3305A_12.jpeg"),
      require("../assets/3305A_13.jpeg"),
      require("../assets/3305A_14.jpeg"),
      require("../assets/3305A_15.jpeg"),
      require("../assets/3305A_16.jpeg"),
      require("../assets/3305A_17.jpeg"),
      require("../assets/3305A_18.jpeg"),
    ],
    address: '3305 N 7th St #A',
    details: '5 Bed, 2.5 Bath',
    price: '$3400/month',
  },
  // { id: "3305B",
  //   image: require("../assets/3305.png"),
  //   images: [
  //     require("../assets/1706.png"),
  //     require("../assets/1706_1.jpeg"),
  //     require("../assets/1706_2.jpeg"),
  //     require("../assets/1706_3.jpeg"),
  //   ],
  //   address: '3305 N 7th St #B',
  //   details: '2 Bed, 1 Bath',
  //   price: '$1600/month',
  // },
  { id: "3311",
    image: require("../assets/3311.png"),
    images: [
      require("../assets/3311.png"),
      require("../assets/3311_1.jpeg"),
      require("../assets/3311_2.png"),
      require("../assets/3311_3.png"),
      require("../assets/3311_4.png"),
      require("../assets/3311_5.png"),
      require("../assets/3311_6.png"),
      require("../assets/3311_7.png"),
      require("../assets/3311_8.png"),
      require("../assets/3311_9.jpeg"),
      require("../assets/3311_10.jpeg"),
    ],
    address: '3311 N 7th St',
    details: '4 Bed, 2.5 Bath',
    price: '$2800/month',
  },
  { id: "2905",
    image: require("../assets/2905_1.png"),
    images: [
      require("../assets/2905_1.png"),
      require("../assets/2905_2.png"),
      require("../assets/2905_3.png"),
      require("../assets/2905_4.jpeg"),
      require("../assets/2905_5.jpeg"),
      require("../assets/2905_6.jpeg"),
      require("../assets/2905_7.jpeg"),
      require("../assets/2905_8.jpeg"),
      require("../assets/2905_9.jpeg"),
      require("../assets/2905_10.jpeg"),
      require("../assets/2905_11.jpeg"),
      require("../assets/2905_12.jpeg"),
      require("../assets/2905_13.jpeg"),
      require("../assets/2905_14.jpeg"),
      require("../assets/2905_15.jpeg"),
      require("../assets/2905_16.jpeg"),
      require("../assets/2905_17.jpeg"),
      require("../assets/2905_18.jpeg"),
      require("../assets/2905_19.jpeg"),
      require("../assets/2905_20.jpeg"),
      require("../assets/2905_21.jpeg"),
      require("../assets/2905_22.jpeg"),
      require("../assets/2905_23.jpeg"),
    ],
    address: '2905 N 22th St',
    details: '6 Bed, 3.5 Bath',
    price: '$4200/month',
  },
];


// Updated PropertyDetails component
export default function PropertyDetails() {
  const { id } = useParams();
  const property = propertyData.find((p) => p.id === id);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
        <Link to="/" className="text-blue-600 underline">Back to Home</Link>
      </div>
    );
  }

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <>
    
    <header className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center text-black bg-white bg-opacity-70">
        <h1 className="text-2xl font-bold">Elliott Rentals</h1>
        <nav className="space-x-8">
        {/* <a href="#properties" className="hover:text-yellow-300 transition">Properties</a>
        <a href="#application" className="hover:text-yellow-300 transition">Application</a>
        <a href="#contact" className="hover:text-yellow-300 transition">Contact</a> */}
        </nav>
    </header>

    <div className="max-w-4xl mx-auto p-6 mt-14">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image on the left */}
        <img
          // src={property.images ? property.images[0] : property.image}
          src={property.image}
          alt={property.address}
          className="max-w-xs w-full h-auto rounded-lg mb-6 md:mb-0"
        />
        {/* Text on the right */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">{property.address}</h2>
          <div className="mb-2">{property.details}</div>
          <div className="mb-4 font-semibold">{property.price}</div>
          {/* <Link to="/" className="text-blue-600 underline">Back to Home</Link> */}
          {property.id === "1706" && (
            <ul className="list-disc list-inside text-left mt-4">
              <li>Conveniently located on the edge of the UPS campus</li>
              <li>Large kitchen with two new stainless steel refrigerators</li>
              <li>New stainless stove with built-in air fryer</li>
              <li>New stainless dishwasher</li>
              <li>Brand new washer/dryer</li>
              <li>Off street parking</li>
              <li>Tenant pays all utilities</li>
              <li>No Smoking</li>
              <li>No Pets</li>
              <li>One year lease</li>
              <li>Security deposit $3600</li>
            </ul>
          )}
          {property.id === "2909" && (
            <ul className="list-disc list-inside text-left mt-4">
              <li>Walking distance to UPS and Proctor District</li>
              <li>Large living and dining room</li>
              <li>Washer/dryer</li>
              <li>Tenant pays all utilities</li>
              <li>No Smoking</li>
              <li>No Pets</li>
              <li>One year lease</li>
              <li>Security deposit $3900</li>
            </ul>
          )}
          {property.id === "3305A" && (
            <ul className="list-disc list-inside text-left mt-4">
              <li>Conveniently located 3 blocks from UPS campus</li>
              <li>New stainless stove with built-in air fryer</li>
              <li>New washer/dryer</li>
              <li>Tenant pays all utilities</li>
              <li>No Smoking</li>
              <li>No Pets</li>
              <li>One year lease</li>
              <li>Security deposit $3500</li>
            </ul>
          )}
          {property.id === "3305B" && (
            <ul className="list-disc list-inside text-left mt-4">
              <li>Conveniently located on the edge of the UPS campus</li>
              <li>Large kitchen with two new stainless steel refrigerators</li>
              <li>New stainless stove</li>
              <li>New stainless dishwasher</li>
              <li>Washer/dryer</li>
              <li>Off street parking</li>
              <li>Tenant pays all utilities</li>
              <li>No Smoking</li>
              <li>No Pets</li>
              <li>One year lease</li>
            </ul>
          )}
          {property.id === "3311" && (
            <ul className="list-disc list-inside text-left mt-4">
              <li>Conveniently located 3 blocks from UPS campus</li>
              <li>Two new stainless refrigerators</li>
              <li>New stainless stove with built-in air fryer</li>
              <li>Stainless dishwasher</li>
              <li>Washer/dryer</li>
              <li>Tenant pays all utilities</li>
              <li>No Smoking</li>
              <li>No Pets</li>
              <li>One year lease</li>
              <li>Security deposit $2800</li>
            </ul>
          )}
          {property.id === "2905" && (
            <ul className="list-disc list-inside text-left mt-4">
              <li>Walking distance to UPS and Proctor District</li>
              <li>Two large refrigerators</li>
              <li>Washer/dryer</li>
              <li>New stainless dishwasher</li>
              <li>Washer/dryer</li>
              <li>Tenant pays all utilities</li>
              <li>No Smoking</li>
              <li>No Pets</li>
              <li>One year lease</li>
              <li>Security deposit $3990</li>
            </ul>
          )}
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto h-0.5 mt-8 bg-gray-300 "></div>
    <div className="max-w-4xl mx-auto p-8 mt-8 text-center">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {property.images.map((image, index) => (
          <div 
            key={index}
            className="cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <img 
              src={image} 
              alt={`${property.address} - ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* <h2 className="text-3xl font-bold mb-2">{property.address}</h2>
      <div className="mb-2">{property.details}</div>
      <div className="mb-4 font-semibold">{property.price}</div> */}
      <Link to="/" className="text-blue-600 underline">Back to Home</Link>

      {/* Gallery Modal */}
      {galleryOpen && (
        <GalleryModal
          images={property.images}
          currentIndex={currentImageIndex}
          onClose={closeGallery}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
    </>
  );
}
