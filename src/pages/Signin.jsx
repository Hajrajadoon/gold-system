import React from 'react';
import Navbar from '../shared/Navbar';
import WalletConnectButton from '../shared/WalletConnectButton';

const Signin = () => {
  return (
    <div>
      <Navbar />
      <section className="p-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign In</button>
        </form>
        <WalletConnectButton />
      </section>
    </div>
  );
};

export default Signin;
