import { Box, Skeleton, useMediaQuery } from "@mui/material"
import styles from "./BoughtFrom.module.scss"

const LoadingBoughtFrom = () => {
  const smSize = useMediaQuery('(max-width:768px)')
  return (
    <Box className={`${styles.seller_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.seller_box_number}`} />

      <Skeleton variant={"text"} />

      <Skeleton variant={"text"} />

      <Skeleton variant={"text"} />

      {!smSize && <Skeleton variant={"text"} />}
    </Box>
  )
}

export default LoadingBoughtFrom
