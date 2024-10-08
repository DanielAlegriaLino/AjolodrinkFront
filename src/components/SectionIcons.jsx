import React, { useEffect, useState } from 'react';

const SectionIcons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const section = document.getElementById('features-section');
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            setIsVisible(true);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
        id="features-section"
        className={`relative transform transition-transform duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } bg-custom-greentwo py-10 -mt-20`}
        style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
        }}
        >
        <div className="flex justify-around items-center max-w-5xl mx-auto text-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center">
            <img src="src/styles/img/coctel1.png" alt="Multiple recipe versions" className="w-16 h-16" />
            <h3 className="text-lg font-semibold mt-4">Multiple recipe versions</h3>
            <p className="text-sm text-gray-700">Choose from standard, simplified, and super-simple recipes for each drink.</p>
            </div>
            <div className="flex flex-col items-center">
            <img src="src/styles/img/coctel2.png" alt="Ingredient Substitutions" className="w-16 h-16" />
            <h3 className="text-lg font-semibold mt-4">Ingredient Substitutions</h3>
            <p className="text-sm text-gray-700">No fancy ingredients? No problem!</p>
            </div>
            <div className="flex flex-col items-center">
            <img src="src/styles/img/coctel3.png" alt="Step-by-Step Guidance" className="w-16 h-16" />
            <h3 className="text-lg font-semibold mt-4">Step-by-Step Guidance</h3>
            <p className="text-sm text-gray-700">Simple instructions tailored to your chosen recipe level.</p>
            </div>
        </div>
        </section>
    );
};

export default SectionIcons;