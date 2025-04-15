import React from "react";
import { ProductList } from "@/Data/LandingPage";
import ProductCard from "@/Components/ProductCard/ProductCard";
import styles from "./ShowCaseSection.module.scss";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import GradientButton from "@/Components/GradientButton/GradientButton";
const ShowCaseSection = () => {
  return (
    <div className={styles.ShowCaseContainer}>
      <div className={styles.Headings}>
        <HeadingComp heading={"SHOWCASE"} subHeading={"Our Products"} />
        <div className={styles.SubHeading}>
          Discover our range of industry-leading products.
        </div>
      </div>
      <div className={styles.ProductsContainer}>
        {ProductList.map((productItem, index) => (
          <ProductCard data={productItem} />
        ))}
      </div>
      <GradientButton text={"View All Products"} />
    </div>
  );
};

export default ShowCaseSection;
