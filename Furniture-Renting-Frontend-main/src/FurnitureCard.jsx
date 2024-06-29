import React, { useRef } from "react";
import { Card, CardHeader, CardBody, Button, Typography, IconButton } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

const products = [
  {
    image: "../src/assets/fridge.jpg",
    title: "Single Door Fridge (190 Ltr)",
    rent: "₹ 599/mo",
  },
  {
    image: "../src/assets/washing.jpg",
    title: "Fully Automatic Top Load Washing Machine",
    rent: "₹ 659/mo",
  },
  {
    image: "../src/assets/chair.jpg",
    title: "Morris Office Chair",
    rent: "₹ 189/mo",
  },
  {
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Napster Metal Queen Bed",
    rent: "₹ 279/mo",
  },
  {
    image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Semi Automatic Washing Machine",
    rent: "₹ 399/mo",
  },
];


export default function ProductCard() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  // const handleClick = () => {
  //   try {
  //     ;
  //   } catch (error) {
  //     console.error('Navigation error:', error);
  //     // Handle error here, e.g., show an error message to the user
  //   }
  // };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <Typography variant="h4" className="mb-2">
          You'll love to take these home
        </Typography>
        <div className="h-1 w-16 bg-red-500 mx-auto mb-4 " />
      </div>
      <div className="relative w-full max-w-5xl">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <IconButton onClick={scrollLeft} color="red">
            <ChevronLeftIcon className="w-6 h-6" />
          </IconButton>
        </div>
        <div
          className="flex overflow-x-scroll scrollbar-hide space-x-6 py-4"
          ref={scrollRef}
        >
          {products.map((product, index) => (
            <Card key={index} className="w-80 flex-shrink-0">
              <CardHeader color="gray" className="relative h-48">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h6" className="mb-2">
                  {product.title}
                </Typography>
                <Typography color="gray" className="mb-4">
                  Rent <span className="font-semibold">{product.rent}</span>
                </Typography>
                <Button variant="outlined" color="red">
                  See more
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <IconButton onClick={scrollRight} color="red">
            <ChevronRightIcon className="w-6 h-6" />
          </IconButton>
        </div>
        
      </div>
      <button onClick={()=>navigate("/furnitures")} className="mt-6 text-white font-bold text-lg py-2 px-6 rounded-lg bg-gradient-to-r from-red-400 to-red-600 shadow-md hover:shadow-lg transition-shadow duration-300 hover:from-red-500 hover:to-red-700">
View More Products 
      </button>
    </div>
  );
}
