import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.sex === "Erkek" || item.sex === "Kadın";
  });

  return (
    <div className="bg-[#fafafa]">
      <Hero />
      <div className="container mt-10 ml-[45vw] mx-auto">
    <h2 className="font-semibold mb-5 ml-[2.5vw]">Kategoriler</h2>
    <button className="bg-primary text-white w-20 h-9">Erkek</button>
    <button className="bg-primary ml-5 text-white w-20 h-9">Kadın</button>
  </div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
