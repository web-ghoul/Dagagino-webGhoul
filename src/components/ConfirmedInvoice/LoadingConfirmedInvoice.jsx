import { Box, Skeleton } from "@mui/material"
import styles from "./ConfirmedInvoice.module.scss"

const LoadingConfirmedInvoice = () => {
  return (
    <Box className={`${styles.invoice_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.invoice_box_number}`}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>

      <Skeleton variant={"text"}/>
      
      <Skeleton variant={"text"}/>
    </Box>
  )
}

export default LoadingConfirmedInvoice
