import React from 'react'
import styles from "./../styles/productCard.module.scss"

function SlideIndicator({style, className, image_qty}) {
    return (
      <div className={styles.slideIndicatorContainer}>
        {image_qty > 1 && (
          <div
            className={`${styles.slideIndicator} ${className || ""}`}
            style={style}
          />
        )}
      </div>
    );
  }

export default SlideIndicator