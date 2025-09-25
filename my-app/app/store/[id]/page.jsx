import { notFound } from "next/navigation";

const products = [
    { id: 1, name: "iPhone 15", price: "$999", desc: "Latest iPhone model" },
    { id: 2, name: "MacBook Pro", price: "$1999", desc: "Powerful laptop for pros" },
    { id: 3, name: "iPad Air", price: "$699", desc: "Lightweight and powerful tablet" },
  ];
  
  export default function ProductPage({ params }) {
    const { id } = params;
    const product = products.find((p) => p.id.toString() === id);
  
    if (!product) {
      notFound();
    }
  
    return (
      <div>
        <h1>{products.name}</h1>
        <p>Price: {products.price}</p>
        <p>{products.desc}</p>
      </div>
    );
  }
  