import React from 'react';

// Importing images
import packagesIcon from './assets/icons8-stacking-100.png';
import furnitureIcon from './assets/icons8-closet-64.png';
import appliancesIcon from './assets/icons8-appliances-100.png';
import electronicsIcon from './assets/icons8-phone-100.png';
import fitnessIcon from './assets/icons8-gym-100.png';

const categories = [
  { name: 'Packages', icon: packagesIcon, link: '#' },
  { name: 'Furniture', icon: furnitureIcon, link: '#' },
  { name: 'Appliances', icon: appliancesIcon, link: '#' },
  { name: 'Electronics', icon: electronicsIcon, link: '#' },
  { name: 'Fitness', icon: fitnessIcon, link: '#' },
];

export default function RentCategories() {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-semibold mb-6 relative inline-block">
        Rent Furniture & Appliances
        <div className="h-1 w-16 bg-red-500 mx-auto mb-4 mt-3" />
      </h2>
      <div className="flex justify-center gap-6">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.link}
            className="group relative p-4 border rounded-lg w-40 shadow-sm transition-all duration-200 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center">
              <img
                src={category.icon}
                alt={category.name}
                className="mx-auto mb-4 h-20 w-20 object-contain"
              />
              <h3 className="text-lg font-medium">{category.name}</h3>
            </div>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
          </a>
        ))}
      </div>
    </div>
  );
}
