import { Box, Typography, useMediaQuery } from "@mui/material"
import styles from "./ConfirmedPurchase.module.scss"
import { useTranslation } from 'react-i18next';
import { VisibilityRounded } from "@mui/icons-material"
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { handleDate } from "@/functions/handleDate"
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react"

const ConfirmedPurchase = ({ def, purchase, number }) => {
  const { t } = useTranslation()
  const { handleOpenConfirmedPurchaseModal } = useContext(DashboardContext)
  const mdSize = useMediaQuery("(max-width:992px)")
  const smSize = useMediaQuery("(max-width:768px)")
  return def ? (
    <Box className={`${styles.default_box} ${styles.purchase_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"}>#</Typography>

      <Typography variant={"h6"}>{t("dashboard.confirmed_purchases.seller_name")}</Typography>

      {!smSize && <Typography variant={"h6"}>{t("dashboard.confirmed_purchases.date")}</Typography>}

      <Typography variant={"h6"}>{t("dashboard.confirmed_purchases.total_price")}</Typography>
    </Box>
  ) : (
    <Box className={`${styles.purchase_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${styles.purchase_box_number}`}>{"#" + number}</Typography>

      <Typography variant={"h6"}>{t("lang") === "ar" ? purchase.seller.arName : purchase.seller.enName}</Typography>

      {!smSize && <Typography variant={"h6"}>{handleDate(purchase.updatedAt, t("lang"))}</Typography>}

      <Typography variant={"h6"}>{purchase.totalValue.toFixed(1)}</Typography>

      <PrimaryButton onClick={() => handleOpenConfirmedPurchaseModal(purchase)} className={`flex jcc aic g10`}>
        <VisibilityRounded />
        {!mdSize && <Typography variant={"h6"}>{t("dashboard.view_product.button")}</Typography>}
      </PrimaryButton>
    </Box>
  )
}

export default ConfirmedPurchase
