import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

function SelectedFurniture() {
  const { id } = useParams();
  const [furniture, setFurniture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchFurnitureDetails = async () => {
      try {
        const response = await axios.get(`/furniture/${id}`);
        setFurniture(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching furniture details:', error);
        setLoading(false);
      }
    };

    fetchFurnitureDetails();
  }, [id]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % furniture.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + furniture.images.length) % furniture.images.length);
  };

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (!furniture) {
    return <div className="container mx-auto p-4">Furniture not found</div>;
  }

  return (
    <div className="container mx-auto p-0">
      <div className="bg-white  rounded-lg overflow-hidden mt-5">
        <div className="relative">
          <img
            src={furniture.images[currentImageIndex]}
            alt={furniture.name}
            className="w-full h-64 object-contain"
          />
          {furniture.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-[30%] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-[30%] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
              >
                &gt;
              </button>
            </>
          )}
        </div>
        <div className=''>
        <div className="p-4 mt-3">
          <h2 className="text-3xl text-serif font-bold mb-2">{furniture.name}</h2>
          <p className="text-gray-700 mb-2">{furniture.description}</p>
          <p className="text-gray-700 mb-2">Category: {furniture.category}</p>
          <p className="text-gray-700 mb-2">Rs.{furniture.price}/mo</p>
          {/* <button className="mt-4 bg-[#061C69] text-white px-4 py-2 rounded hover:bg-blue-800">
            Rent Now
          </button> */}
        </div>
        <div className='absolute  w-full justify-start'>
          <BookingForm/></div>
          </div>
      </div>
    </div>
  );
}

export default SelectedFurniture;
