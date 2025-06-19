import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Delicious
              <span className="text-primary-500 block">Ice Cream</span>
              Made Fresh Daily
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              Experience the perfect blend of premium ingredients and artisanal craftsmanship 
              in every scoop. From classic vanilla to exotic flavors, we have something for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
                Order Now
              </button>
              <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300">
                View Menu
              </button>
            </div>
          </div>
          
          {/* Right Content - Ice Cream Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 sm:w-96 sm:h-96 mx-auto bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-8xl">🍦</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-primary-300 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-secondary-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary-100 rounded-full opacity-30 animate-bounce"></div>
    </section>
  );
};

export default Hero;
