import React from "react";

export default function NFTMint() {
  const mintNFT = () => {
    alert("NFT minted (mock)!");
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">NFT Minting</h2>
      <button
        onClick={mintNFT}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Mint 1g Gold NFT
      </button>
    </div>
  );
}

