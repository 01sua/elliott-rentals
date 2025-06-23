import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PropertyCard from './components/PropertyCard';
import ups from './assets/ups.jpg';
import _1706 from './assets/1706.png';
import _2909 from './assets/2909.png';
import _3305 from './assets/3305.png';
import './index.css';
import PropertyDetails from './pages/PropertyDetails.js';

const properties = [
  {
    id: "1706",
    image: _1706,
    address: '1706 N Alder St',
    details: '2 Bed, 1 Bath',
    price: '$1,200/month',
  },
  {
    id: "2909",
    image: _2909,
    address: '2909 N 22th St',
    details: '3 Bed, 2 Bath',
    price: '$1,500/month',
  },
  {
    id: "3305",
    image: _3305,
    address: '3305 N 7th St',
    details: '1 Bed, 1 Bath',
    price: '$900/month',
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${ups})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <header className="absolute top-0 left-0 w-full z-10 px-8 py-6 flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Elliott Rentals</h1>
          <nav className="space-x-8">
            <a href="#properties" className="hover:text-yellow-300 transition">Properties</a>
            <a href="#application" className="hover:text-yellow-300 transition">Application</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </nav>
        </header>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Elliott UPS Rentals</h2>
          <div className="space-x-4">
            <a href="#properties" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition font-semibold">View Properties</a>
            <a href="#application" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold">Apply Now</a>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <main id="properties" className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((prop) => (
            <Link key={prop.id} to={`/property/${prop.id}`}>
              <PropertyCard {...prop} />
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-white mt-12 p-6 text-center text-sm text-gray-500">
        Contact us at: <a href="mailto:info@example.com" className="text-blue-600">dlaaelliott@gmail.com</a> or (253)-241-7919
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;