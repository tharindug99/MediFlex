import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your custom login logic here
    console.log('User logged in successfully!');
    // You can redirect or perform other actions here
  };

  return (
    <div className="container justify-centermx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <div className="mb-4 justify-center">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="border rounded w-1/3 py-2 px-3"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="border rounded w-1/3 py-2 px-3"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
