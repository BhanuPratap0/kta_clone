import React from 'react'
import styles from './Products.module.scss'

function ProductCard({data}) {
    return (
        <div className={styles.ProductCard}>
            <img src={data.img} alt="" />
            <div>
                <div className={styles.ProductName}>{data.name} <span className={styles.ProductType}>{data.type}</span></div>
                <div className={styles.ProductSpec}>{data.spec}</div>
            </div>
        </div>
    )
}
export default ProductCard
