import React, { useEffect, useRef } from 'react';
import { useLoginUserMutation } from '../featuers/api/authApi';
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const emailRef = useRef(null); // Ref for email input
  const passwordRef = useRef(null); // Ref for password input
  const navigate=useNavigate()

  const [loginUser, { data, error, isLoading, isSuccess, isError }] = useLoginUserMutation();
    console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value; // Get email value
    const password = passwordRef.current.value; // Get password value

    try {
      await loginUser({ email, password }).unwrap(); // Trigger the login mutation
      console.log('Login successful:', data);
    } catch (err) {
      console.error('Login failed:', error || err);
    }
  };
  useEffect(()=>{
         if(isSuccess){
          alert("login sucessful")
          navigate("/")
         }
         if(isError){
          alert(error.data.message)
         }
  },[isLoading,isError, error ,isSuccess,data])
   
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          {/* Error Message */}
          {isError && (
            <p className="text-sm text-red-500">
              {error?.data?.message || 'Login failed. Please try again.'}
            </p>
          )}
        </form>

        {/* Success Message */}
        {isSuccess && (
          <p className="text-sm text-green-500">Login successful. Redirecting...</p>
        )}
      </div>
    </div>
  );
};

export default Login;
