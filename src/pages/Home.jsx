import React from 'react';

function Home() {
  return (
    <div className="p-8 text-center">
      <section className="my-10">
        <h2 className="text-4xl font-bold text-yellow-600 mb-4">Revolutionizing Gold with Blockchain</h2>
        <p className="text-lg max-w-2xl mx-auto">
          GoldChain is a blockchain-based platform that tokenizes physical gold, enabling secure,
          transparent, and instant digital gold trading powered by smart contracts and decentralized finance (DeFi).
        </p>
      </section>

      <section id="features" className="my-16">
        <h3 className="text-3xl font-semibold mb-6">Core Features</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Tokenized Gold</h4>
            <p>Convert physical gold into digital tokens that are 100% traceable and verifiable.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Smart Contracts</h4>
            <p>Ensure trust and automation in every trade through decentralized blockchain contracts.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">NFT Certificates</h4>
            <p>Receive digital certificates representing verified gold ownership on-chain.</p>
          </div>
        </div>
      </section>

      <section id="tech" className="my-16 bg-yellow-100 py-10 rounded-2xl">
        <h3 className="text-3xl font-semibold mb-6">Technology Stack</h3>
        <p className="max-w-3xl mx-auto">
          Built with <strong>React.js, Node.js, MongoDB, and Algorand Blockchain</strong> — combining
          the power of decentralization, smart contracts, and tokenization to modernize traditional gold systems.
        </p>
      </section>

      <section id="contact" className="my-16">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <p className="max-w-md mx-auto mb-6">Interested in partnering or investing? Reach out to us at:</p>
        <a
          href="mailto:contact@goldchain.io"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600"
        >
          contact@goldchain.io
        </a>
      </section>
    </div>
  );
}

export default Home;
