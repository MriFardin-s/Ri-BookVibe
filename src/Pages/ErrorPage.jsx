import React from 'react';
import { Link } from 'react-router';



const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
            <div className="max-w-md w-full text-center">
             
                <h1 className="text-9xl font-extrabold text-blue-600 animate-bounce">
                    404
                </h1>
                
               
                <h2 className="text-3xl font-bold text-gray-800 mt-4">
                    Oh! Are you lost?
                </h2>
                
                <p className="text-gray-600 mt-4 mb-8">
                   The page you are looking for has probably been removed or renamed.
                </p>

            
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Go To Home Page
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                <div className="mt-12">
                    <svg
                        className="mx-auto h-32 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;