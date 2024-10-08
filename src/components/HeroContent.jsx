import React from 'react';

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center p-32 bg-custom-green min-h-screen">
        <div className="max-w-lg text-center md:text-left">
            <h1 className="text-4x1 md:text-5xl font-bold text-white leading-tight">
            Simplify Your <span className="text-custom-yellow">Cocktails</span>
            </h1>
            <p className="mt-4 text-white">
            Discover easy-to-follow recipes for your favorite drinks with alternative versions to suit any skill level and ingredients on hand.
            </p>
            <button className="mt-6 bg-black text-white py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
            Get started
            </button>
        </div>
        <div className="relative mt-10 md:mt-0">
            <img 
            src="src/styles/img/cocktail.gif" 
            alt="Cocktail" 
            className="w-64 md:w-80 rounded-xl shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Cocktail</h3>
            <p className="text-gray-600">18K</p>
            <p className="text-custom-yellow">4.8★</p>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;