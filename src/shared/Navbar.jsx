import React from 'react';

function Navbar() {
  return (
    <nav className="bg-yellow-500 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">GoldChain</h1>
      <ul className="flex gap-6 text-lg">
        <li><a href="#features" className="hover:underline">Features</a></li>
        <li><a href="#tech" className="hover:underline">Technology</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
