import React from "react";
import ProductCard from "./ProductCard";

function Home({ data }) {
  return (
    <div className='home'>
      {data.map((item) => {
        return (
          <ProductCard
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
            ratings={item.rating.rate}
          />
        );
      })}
    </div>
  );
}

export default Home;
