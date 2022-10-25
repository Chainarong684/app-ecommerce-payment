import React from "react";
import { client } from "../lib/sanityClient";
import { HeroBanner, FooterBanner } from "../components";

const Home = ({ products, banners }) => {
  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo dicta, saepe voluptas cum autem
          expedita impedit fugiat voluptatem quia a nobis porro sed itaque sequi architecto. Fugiat, distinctio libero!
        </p>
      </div>
      <div className="products-container">{["product 1", "product2"].map((item) => item)}</div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);
  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};

export default Home;
