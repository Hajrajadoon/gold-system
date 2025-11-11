import React from "react";

export default function Blogs() {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Blockchain & Gold</h3>
          <p>How blockchain is revolutionizing gold trading worldwide.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Sharia Compliance</h3>
          <p>Understanding Islamic principles in digital gold assets.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">NFTs & Finance</h3>
          <p>Minting NFTs backed by physical or digital gold.</p>
        </div>
      </div>
    </div>
  );
}

