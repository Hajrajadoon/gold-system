import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => createUserWithEmailAndPassword(auth, email, password);
  const login = () => signInWithEmailAndPassword(auth, email, password);

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-3xl font-bold mb-6">GoldChain Access</h2>
      <input className="border p-2 mb-3 w-64" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" className="border p-2 mb-3 w-64" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <div className="flex gap-4">
        <button onClick={login} className="bg-yellow-500 text-white px-4 py-2 rounded">Login</button>
        <button onClick={signUp} className="border border-yellow-500 text-yellow-600 px-4 py-2 rounded">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
