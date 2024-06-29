import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Furnitures() {
  const [furnitures, setFurnitures] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFurnitures, setFilteredFurnitures] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate=useNavigate();
  useEffect(() => {
    const fetchFurnitures = async () => {
      try {
        const response = await axios.get('/furniture');
        console.log(response.data);
        setFurnitures(response.data); // Assuming response.data is an array of furniture objects
        setFilteredFurnitures(response.data);
      } catch (error) {
        console.error('Error fetching furniture data:', error);
      }
    };

    fetchFurnitures();
  }, []);

  useEffect(() => {
    filterFurnitures();
  }, [searchTerm, selectedCategory]);

  const filterFurnitures = () => {
    let filtered = furnitures;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(furniture => furniture.category === selectedCategory);
    }
    filtered = filtered.filter(furniture =>
      furniture.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFurnitures(filtered);
  };

  const categories = ['All', 'Living Room', 'Bedroom', 'Office', 'Outdoor', 'Dining', 'Kids'];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 mt-5">
        <input
          type="text"
          placeholder="Search for furniture..."
          className="w-full p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-gray-700 py-2 mb-6">
        <div className="flex justify-between space-x-4 px-4">
          {categories.map(category => (
            <a
              key={category}
              href="#"
              className={`hover:text-yellow-500 text-white ${selectedCategory === category ? 'text-yellow-500' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFurnitures.map(furniture => (
          <div key={furniture.id} 
          onClick={()=>navigate(`/furnitures/${furniture._id}`)}
          className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={furniture.images[0]}
                alt={furniture.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{furniture.name}</h2>
              <p className="text-gray-700 mb-2">Description: {furniture.description}</p>
              <p className="text-gray-700">Rs.{furniture.price}/mo</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Furnitures;
