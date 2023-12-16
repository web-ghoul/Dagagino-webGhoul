import { Box, Skeleton, useMediaQuery } from "@mui/material"
import styles from "./BoughtProduct.module.scss"

const LoadingBoughtProduct = () => {
  const smSize = useMediaQuery('(max-width:768px)')
  return (
    <Box className={`${styles.product_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.product_box_number}`} />

      <Box className={`grid jcs aic g10`}>
        <Skeleton variant={"text"} />
        <Skeleton variant={"text"} />
      </Box>

      <Skeleton variant={"text"} />

      <Skeleton variant={"text"} />

      {!smSize && <Skeleton variant={"text"} />}
    </Box>
  )
}

export default LoadingBoughtProduct
