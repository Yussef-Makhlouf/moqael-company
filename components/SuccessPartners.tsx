import React from 'react';

const SuccessPartners = () => {
  const partners = [
    { id: 1, name: 'شركة 1', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'شركة 2', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'شركة 3', image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'شركة 4', image: 'https://via.placeholder.com/200' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          شركاء النجاح
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessPartners;
