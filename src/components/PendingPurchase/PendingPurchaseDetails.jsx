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
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.quantity")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{pendingPurchase.products[0].qty}</Typography>
        </Box>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.total_price")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{pendingPurchase.products[0].totalPrice.toFixed(1)}</Typography>
        </Box>
      </Box>
      <Box className={`grid cjs aic pad20 br10 g20 ${styles.pending_purchase_details_product_box}`}>
        <Box className={`${styles.data_box_image_box} flex jcc aic`}>
          <LazyLoadImage src={pendingPurchase.products[0].product.imageURL} alt={"product"} />
        </Box>
        <Box className={`grid jcs aic g10`}>
          <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
            <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.product_name")}</Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? pendingPurchase.products[0].product.arName : pendingPurchase.products[0].product.enName}</Typography>
          </Box>
          <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
            <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.product_description")}</Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? pendingPurchase.products[0].product.arDescription : pendingPurchase.products[0].product.enDescription}</Typography>
          </Box>
          <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
            <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.pending_purchase_details.product_price")}</Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{pendingPurchase.products[0].price.toFixed(1)}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default PendingPurchaseDetails