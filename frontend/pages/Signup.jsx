import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Add your custom signup logic here
    console.log('User created successfully!');
    // You can redirect or perform other actions here
  };

  const isPasswordMatch = password === confirmPassword;

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="border rounded w-full py-2 px-3"
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
          className="border rounded w-full py-2 px-3"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          className={`border rounded w-full py-2 px-3 ${isPasswordMatch ? '' : 'border-red-500'}`}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!isPasswordMatch && (
          <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSignUp}
        disabled={!isPasswordMatch}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
