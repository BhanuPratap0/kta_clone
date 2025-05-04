import React from 'react'
import styles from './TopBanner.module.scss'
function TopBanner({ head, details, detailsHeading }) {
    return (
        <div id={styles.TopBanner}>
            <div className={styles.TopBannerHead}>
                <img src={head} alt="" />
            </div>
            <div className={styles.TopBannerDetails}>
                <div className={styles.TopBannerDetailsHead}>{detailsHeading}</div>
                {details}</div>
        </div>
    )
}

export default TopBanner
