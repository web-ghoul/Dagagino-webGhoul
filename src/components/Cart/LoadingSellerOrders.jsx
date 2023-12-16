import { Skeleton } from "@mui/material"
import styles from "./Cart.module.scss"

const LoadingSellerOrders = () => {
  return (
    <Skeleton className={`${styles.loading_seller_orders} br10 pad10`} />
  )
}

export default LoadingSellerOrders