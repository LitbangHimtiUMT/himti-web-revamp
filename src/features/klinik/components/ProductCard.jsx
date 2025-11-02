/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const formatPrice = (price) => `Rp ${Number(price).toLocaleString('id-ID')}`;

const ProductCard = ({ item }) => {
  const [activeImage, setActiveImage] = useState(item.businessImage[0]);
  const priceRange = item.endPrice
    ? `${formatPrice(item.startPrice)} - ${formatPrice(item.endPrice)}`
    : formatPrice(item.startPrice);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="p-4">
        <img src={activeImage} alt={item.title} className="w-full h-120 object-cover rounded-md" />
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {item.businessImage.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${item.title} ${index + 1}`}
              onClick={() => setActiveImage(img)}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${activeImage === img ? 'border-yellow-500' : 'border-transparent'}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-gray-600 text-sm whitespace-pre-line flex-grow">{item.description}</p>
        <div className="mt-3">
          <p className="text-lg font-semibold text-gray-800">{priceRange}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 block">
            <Button variant="primary" size="md" rounded="full">
              <div className="flex items-center gap-2 px-4">
                 <span>Pesan Sekarang</span>
                 <ShoppingCart size={18} />
               </div>
           </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;