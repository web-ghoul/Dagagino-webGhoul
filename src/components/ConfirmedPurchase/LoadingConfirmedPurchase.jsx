import { Box, Skeleton } from "@mui/material"
import styles from "./ConfirmedPurchase.module.scss"

const LoadingConfirmedPurchase = () => {
  return (
    <Box className={`${styles.purchase_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.purchase_box_number}`}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>
    </Box>
  )
}

export default LoadingConfirmedPurchase
