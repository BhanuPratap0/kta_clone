import React from "react";
import styles from "./productCard.module.scss";
const ProductCard = ({ data }) => {
  return (
    <div className={styles.ProductContainer}>
      <div className={styles.ProductImg}>
        <img src={data.img} alt="ProductImg" />
      </div>
      <div className={styles.Title}>{data.title}</div>
      <div className={styles.Description}>{data.description}</div>
    </div>
  );
};

export default ProductCard;
