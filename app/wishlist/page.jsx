"use client";

import { useApp } from '../../context/AppContext';
import products from '../../Product';

const Page = () => {
  const { wishlist } = useApp();

  const wishlistItems = products.filter((p) =>
    wishlist.includes(p.id)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist </h1>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty 😢</p>
      ) : (
        <div className="flex gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-xl p-4">
              <img src={item.image} className=" h-40 object-cover rounded" />
              <h2 className="font-semibold mt-2">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;