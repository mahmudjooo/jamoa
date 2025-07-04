import React from "react";

type Product = {
  title: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    title: "Fiddle Leaf Fig",
    price: 29.99,
    image:
      "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2021/03/indoor-plant-secculant-600x600.jpg",
  },
  {
    title: "Snake Plant",
    price: 19.99,
    image:
      "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2021/03/indoor-plant-secculant-600x600.jpg",
  },
  {
    title: "Peace Lily",
    price: 24.99,
    image:
      "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2021/03/indoor-plant-secculant-600x600.jpg",
  },
  {
    title: "Pothos",
    price: 14.99,
    image:
      "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2021/03/indoor-plant-secculant-600x600.jpg",
  },
];

// Bitta mahsulot kartasi
const ProductCard: React.FC<Product> = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        <button className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Mahsulotlar grid'i
const Product: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-green-50">
      <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">
        Our Plants
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Product;
