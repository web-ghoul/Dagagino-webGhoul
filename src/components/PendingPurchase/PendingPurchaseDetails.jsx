import styles from "./PendingPurchase.module.scss"
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material"
import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { handleDate } from "../../functions/handleDate";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PendingPurchaseDetails = () => {
  const { t } = useTranslation()
  const { pendingPurchase } = useContext(DashboardContext)

  return (
    <Box className={`grid jcs aic g30 ${styles.pending_purchase_details}`}>
      <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant={"h4"} className={`tac`}>{t("dashboard.pending_purchase_details.title")}</Typography>

      <Box className={`grid jcs iac g30 ${styles.pending_purchase_details_box}`}>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.seller_name")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? pendingPurchase.seller.arName : pendingPurchase.buyer.enName}</Typography>
        </Box>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.date")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{handleDate(pendingPurchase.updatedAt, t("lang"))}</Typography>
        </Box>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.total_price")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{pendingPurchase.totalValue.toFixed(1)}</Typography>
        </Box>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.total_priceAfterDiscount")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{pendingPurchase.totalAfterDiscount.toFixed(1)}</Typography>
        </Box>
      </Box>
      <Box className={`grid cjs aic br10 g20 ${styles.pending_purchase_details_products_box}`}>
        <Box className={`grid jcs aic pad10 ${styles.table_head} ${styles.table_row}`}>
          <Typography variant="h6">#</Typography>
          <Typography variant="h6">{t("dashboard.pending_purchase_details.product_name")}</Typography>
          <Typography variant="h6">{t("dashboard.pending_purchase_details.quantity")}</Typography>
          <Typography variant="h6">{t("dashboard.pending_purchase_details.product_price")}</Typography>
          <Typography variant="h6">{t("dashboard.pending_purchase_details.product_priceAfterDiscount")}</Typography>
        </Box>
        {
          pendingPurchase.products.map((product, i) => (
            <Box className={`grid jcs aic pad10 ${styles.table_row_data} ${styles.table_row}`}>
              <Typography variant="h6">#{i + 1}</Typography>
              <Typography variant="h6">{t("lang") === "ar" ? product.product.arName : product.product.enName}</Typography>
              <Typography variant="h6">{product.qty}</Typography>
              <Typography variant="h6">{product.price.toFixed(1)}</Typography>
              <Typography variant="h6">{product.priceAfterDiscount.toFixed(1)}</Typography>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
export default PendingPurchaseDetails