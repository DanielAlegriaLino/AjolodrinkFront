import React from 'react';

const AboutUs = () => {
    return (
        <section className="relative py-12 bg-custom-green-light flex items-center justify-center">
        <div className="absolute inset-0 bg-repeat opacity-10"
            style={{
            backgroundImage: "url('src/styles/img/copa.png')",
            backgroundSize: '80px 80px',
            }}
        ></div>

        <div className="relative max-w-5xl mx-auto bg-custom-light-green rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
            <img
                src="src/styles/img/bg.jpg"
                alt="Cocktail"
                className="w-full h-auto rounded-lg shadow-md"
            />
            </div>
            
            <div className="md:w-1/2 md:pl-8 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
                About <span className="underline">us</span>
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-2">
                Simplifying Cocktails for Everyone
            </p>
            <p className="text-gray-600">
                We're a team passionate about making mixology easy and accessible. Our app offers simplified versions of classic cocktails, so you can craft delicious drinks with whatever ingredients you have at home. Enjoy great cocktails, hassle-free!
            </p>
            </div>
        </div>
        </section>
    );
};

export default AboutUs;