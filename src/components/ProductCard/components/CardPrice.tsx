import React from 'react'
import Text from '../../Text/Text'
import { CardPriceProps } from '../types'
import styles from "./../styles/productCard.module.scss"

function CardPrice({currentPrice, oldPrice, currency}:CardPriceProps) {
  return (
    <div className={styles.cardPriceWrapper}>
          <Text className={styles.cardPrice}>{`${currency}${currentPrice}`}</Text>
          {oldPrice && (
            <Text className={styles.cardOldPrice}>{`${currency}${oldPrice}`}</Text>
          )}
    </div>
  )
}

export default CardPrice