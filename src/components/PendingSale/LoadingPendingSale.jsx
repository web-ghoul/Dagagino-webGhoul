import { Box, Skeleton } from "@mui/material"
import styles from "./PendingSale.module.scss"

const LoadingPendingSale = () => {
  return (
    <Box className={`${styles.sale_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.sale_box_number}`}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>
      
      <Skeleton variant={"text"}/>
    </Box>
  )
}

export default LoadingPendingSale
