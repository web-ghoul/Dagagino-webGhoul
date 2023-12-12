import { Box, Typography } from "@mui/material"
import styles from "./PendingPurchase.module.scss"
import { useTranslation } from 'react-i18next';
import {VisibilityRounded } from "@mui/icons-material"
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import {handleDate} from "@/functions/handleDate"
import { DashboardContext } from "../../context/DashboardContext";
import {useContext} from "react"

const PendingPurchase = ({def, purchase,number}) => {
  const {t} = useTranslation()
  const {handleOpenPendingPurchaseModal} = useContext(DashboardContext)

  return def ? (
    <Box className={`${styles.default_box} ${styles.purchase_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"}>#</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_purchases.seller_name")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_purchases.date")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_purchases.total_price")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_purchases.paid_status")}</Typography>
    </Box>
  ):(
    <Box className={`${styles.purchase_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${styles.purchase_box_number}`}>{"#"+number}</Typography>

      <Typography variant={"h6"}>{t("lang") === "ar" ? purchase.seller.arName : purchase.seller.enName}</Typography>
      
      <Typography variant={"h6"}>{handleDate(purchase.updatedAt,t("lang"))}</Typography>

      <Typography variant={"h6"}>{purchase.totalValue.toFixed(1)}</Typography>

      <Typography variant={"h6"} sx={{color:(theme)=>`${purchase.isPaid ? theme.palette.whatsapp : theme.palette.youtube}`}} >{purchase.isPaid ? t("dashboard.pending_purchases.paid") : t("dashboard.pending_purchases.not_paid")}</Typography>

      <PrimaryButton onClick={()=>handleOpenPendingPurchaseModal(purchase)} className={`flex jcc aic g10`}>
        <VisibilityRounded/>
        <Typography variant={"h6"}>{t("dashboard.view_product.button")}</Typography>
      </PrimaryButton>
    </Box>
  )
}

export default PendingPurchase
