import { Box, Skeleton, useMediaQuery } from "@mui/material"
import styles from "./ConfirmedInvoice.module.scss"

const LoadingConfirmedInvoice = () => {
  const smSize = useMediaQuery("(max-width:768px)")
  return (
    <Box className={`${styles.invoice_box} ${styles.loading_box} g30 br6 pad20 grid jcs aic`}>
      <Skeleton variant={"text"} className={`${styles.invoice_box_number}`} />

      <Skeleton variant={"text"} />

      <Skeleton variant={"text"} />

      <Skeleton variant={"text"} />

      {!smSize && <Skeleton variant={"text"} />}
    </Box>
  )
}

export default LoadingConfirmedInvoice
