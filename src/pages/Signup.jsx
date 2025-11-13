import React from 'react';
import Navbar from '../shared/Navbar';
import WalletConnectButton from '../shared/WalletConnectButton';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <section className="p-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button className="px-4 py-2 bg-green-600 text-white rounded">Sign Up</button>
        </form>
        <WalletConnectButton />
      </section>
    </div>
  );
};

export default Signup;
