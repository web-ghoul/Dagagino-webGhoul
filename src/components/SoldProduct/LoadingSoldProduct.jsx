import { Box, Skeleton } from "@mui/material"
import styles from "./SoldProduct.module.scss"

const LoadingSoldProduct = () => {
  return (
    <Box className={`${styles.product_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.product_box_number}`}/>

      <Box className={`grid jcs aic g10`}>
        <Skeleton variant={"text"}/>
        <Skeleton variant={"text"}/>
      </Box>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>
    </Box>
  )
}

export default LoadingSoldProduct
