import { Box, Skeleton } from "@mui/material"
import styles from "./UserProduct.module.scss"

const LoadingUserProduct = () => {
  return (
    <Box className={`${styles.product_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.product_box_number}`}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>
      
      <Skeleton variant={"text"}/>
    </Box>
  )
}

export default LoadingUserProduct
