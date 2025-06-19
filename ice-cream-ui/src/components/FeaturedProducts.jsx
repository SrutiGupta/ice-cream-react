import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Vanilla Dream",
      description: "Classic vanilla ice cream made with Madagascar vanilla beans",
      price: "$4.99",
      emoji: "🍦",
      color: "from-yellow-100 to-yellow-200"
    },
    {
      id: 2,
      name: "Chocolate Bliss",
      description: "Rich chocolate ice cream with Belgian cocoa",
      price: "$5.49",
      emoji: "🍫",
      color: "from-amber-100 to-amber-200"
    },
    {
      id: 3,
      name: "Strawberry Fields",
      description: "Fresh strawberry ice cream with real fruit pieces",
      price: "$5.29",
      emoji: "🍓",
      color: "from-pink-100 to-pink-200"
    },
    {
      id: 4,
      name: "Mint Chip",
      description: "Cool mint ice cream with chocolate chips",
      price: "$5.79",
      emoji: "🌿",
      color: "from-green-100 to-green-200"
    },
    {
      id: 5,
      name: "Cookies & Cream",
      description: "Vanilla ice cream with crushed chocolate cookies",
      price: "$5.99",
      emoji: "🍪",
      color: "from-gray-100 to-gray-200"
    },
    {
      id: 6,
      name: "Caramel Swirl",
      description: "Creamy caramel ice cream with golden swirls",
      price: "$6.29",
      emoji: "🍯",
      color: "from-orange-100 to-orange-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Flavors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular ice cream flavors, crafted with the finest ingredients 
            and made fresh daily in our kitchen.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Product Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-6xl">{product.emoji}</div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-primary-500 font-bold text-lg">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
            View All Flavors
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
