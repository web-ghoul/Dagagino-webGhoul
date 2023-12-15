import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from "./Cart.module.scss"

const Order = ({ order }) => {
  return (
    <Box className={`br6 pad20 grid jcs aic g30`}>
      <Box className={`flex jcc aic ${styles.order_image}`}>
        <LazyLoadImage src={""} alt={"order"} />
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Order