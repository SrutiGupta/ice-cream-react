import React from 'react';

const About = () => {
  const features = [
    {
      icon: "🥛",
      title: "Premium Ingredients",
      description: "We use only the finest, locally-sourced ingredients to create our delicious ice cream."
    },
    {
      icon: "👨‍🍳",
      title: "Artisan Crafted",
      description: "Each batch is carefully crafted by our experienced ice cream artisans with love and passion."
    },
    {
      icon: "🌱",
      title: "Natural & Fresh",
      description: "Made fresh daily with natural ingredients and no artificial preservatives."
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Recognized for excellence with multiple awards from local and national competitions."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Our
              <span className="text-primary-500 block">Ice Cream Story</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Since 1985, we've been creating the most delicious ice cream using traditional methods 
              and the finest ingredients. Our passion for quality and innovation has made us a beloved 
              part of the community.
            </p>
            <p className="text-gray-600 mb-8">
              From our small family business to becoming the region's favorite ice cream destination, 
              we've never compromised on quality. Every scoop tells a story of dedication, 
              craftsmanship, and pure joy.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Right Content - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-500 mb-2">
              38+
            </div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-500 mb-2">
              50+
            </div>
            <div className="text-gray-600 font-medium">Unique Flavors</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-500 mb-2">
              10K+
            </div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-500 mb-2">
              15
            </div>
            <div className="text-gray-600 font-medium">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
