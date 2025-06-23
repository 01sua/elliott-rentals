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
          alt={`Gallery image ${currentIndex + 1}`}
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
    // image: require("../assets/1706.png"),
    // image: require("../assets/1706_1.jpeg"),
    // image: require("../assets/1706_2.jpeg"),
    // image: require("../assets/1706_3.jpeg"),
    // image: require("../assets/1706_4.jpeg"),
    // image: require("../assets/1706_5.jpeg"),
    // image: require("../assets/1706_6.jpeg"),
    // image: require("../assets/1706_7.jpeg"),
    // image: require("../assets/1706_8.jpeg"),
    // image: require("../assets/1706_9.jpeg"),
    // image: require("../assets/1706_10.jpeg"),
    // image: require("../assets/1706_11.jpeg"),
    // image: require("../assets/1706_12.jpeg"),
    // image: require("../assets/1706_13.jpeg"),
    // image: require("../assets/1706_14.jpeg"),
    // image: require("../assets/1706_15.jpeg"),
    // image: require("../assets/1706_16.jpeg"),
    // image: require("../assets/1706_17.jpeg"),
    // image: require("../assets/1706_18.jpeg"),
    // image: require("../assets/1706_19.jpeg"),
    // image: require("../assets/1706_20.jpeg"),
    // image: require("../assets/1706_21.jpeg"),
    address: "1706 N Alder St",
    details: "2 Bed, 1 Bath",
    price: "$1,200/month",
  },
  {
    id: "2909",
    image: require("../assets/2909.png"),
    address: "2909 N 22th St",
    details: "3 Bed, 2 Bath",
    price: "$1,500/month",
  },
  {
    id: "3305",
    image: require("../assets/3305.png"),
    address: "3305 N 7th St",
    details: "1 Bed, 1 Bath",
    price: "$900/month",
  },
];

// export default function PropertyDetails() {
//   const { id } = useParams();
//   const property = propertyData.find((p) => p.id === id);

//   if (!property) {
//     return (
//       <div className="p-8">
//         <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
//         <Link to="/" className="text-blue-600 underline">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <>
    // <header className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center text-black bg-white bg-opacity-70">
    //     <h1 className="text-2xl font-bold">Elliott Rentals</h1>
    //     <nav className="space-x-8">
    //     <a href="#properties" className="hover:text-yellow-300 transition">Properties</a>
    //     <a href="#application" className="hover:text-yellow-300 transition">Application</a>
    //     <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
    //     </nav>
    // </header>
//     <div className="max-w-2xl mx-auto p-8 mt-24 text-center">
//         <img src={property.image} alt={property.address} className="max-w-sm w-full h-auto rounded-lg mb-6 mx-auto" />
//         <h2 className="text-3xl font-bold mb-2">{property.address}</h2>
//         <div className="mb-2">{property.details}</div>
//         <div className="mb-4 font-semibold">{property.price}</div>
//         <Link to="/" className="text-blue-600 underline">Back to Home</Link>
//     </div>
//     </>

//   );
// }


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
        <a href="#properties" className="hover:text-yellow-300 transition">Properties</a>
        <a href="#application" className="hover:text-yellow-300 transition">Application</a>
        <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
        </nav>
    </header>

     <div className="max-w-2xl mx-auto p-8 mt-24 text-center">
         <img src={property.image} alt={property.address} className="max-w-sm w-full h-auto rounded-lg mb-6 mx-auto" />
         <h2 className="text-3xl font-bold mb-2">{property.address}</h2>
         <div className="mb-2">{property.details}</div>
         <div className="mb-4 font-semibold">{property.price}</div>
    </div>

    <div className="max-w-2xl mx-auto p-8 mt-24 text-center">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
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
