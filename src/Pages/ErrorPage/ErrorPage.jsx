import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white px-4">
            <div className="text-center space-y-6">

                {/* Error Code */}
                <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-400 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                    Don’t worry, you can go back to the homepage.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="mt-4 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                        Go Home
                    </button>
                </Link>

                {/* Optional Illustration */}
                <div className="mt-8">
                    <span className="text-6xl animate-bounce">🚧</span>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;