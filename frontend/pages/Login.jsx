import React from 'react';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mx-auto h-12 w-12 text-purple-500"
          >
            {/* Replace with your LockIcon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <h1 className="text-2xl font-semibold mt-2">Sign in</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700 text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md"
          >
            Sign In
          </button>
          <div className="mt-4 flex justify-between">
            <a href="#" className="text-sm text-gray-500">
              Forgot password?
            </a>
            <a href="/register" className="text-sm text-gray-500">
              Don't have an account? Sign Up
            </a>
          </div>
        </form>
        <p className="text-xs text-gray-500 mt-5 text-center">
          {/* Update the copyright text */}
          {'Copyright © '}
          <a href="https://example.com/" className="text-gray-700">
            Your Website
          </a>{' '}
          {new Date().getFullYear()}
          {'.'}
        </p>
      </div>
    </div>
  );
}
