import { Box, Typography } from "@mui/material"
import styles from "./PendingSale.module.scss"
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { ConfirmButton } from '@/muiCustomize/ConfirmButton'
import {VisibilityRounded , CheckRounded } from "@mui/icons-material"
import {handleDate} from "@/functions/handleDate"
import { DashboardContext } from "../../context/DashboardContext";
import {useContext} from "react"

const PendingSale = ({def , sale , number}) => {
  const {t} = useTranslation()
  const {handleOpenPendingSaleModal} = useContext(DashboardContext)
 
  return def ? (
    <Box  className={`${styles.default_box} ${styles.sale_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${!def && styles.sale_box_number}`}>#</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_sales.buyer_name")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_sales.date")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_sales.total_price") }</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_sales.paid_status") }</Typography>
    </Box>
  ):(
    <Box className={`${styles.sale_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${styles.sale_box_number}`}>{"#" + number}</Typography>

      <Typography variant={"h6"}>{t("lang") === "ar" ? sale.buyer.arName : sale.buyer.enName}</Typography>

      <Typography variant={"h6"}>{handleDate(sale.updatedAt,t("lang"))}</Typography>

      <Typography variant={"h6"}>{sale.totalAfterDiscount.toFixed(1)}</Typography>

      <Typography variant={"h6"} sx={{color:(theme)=>`${sale.isPaid ? theme.palette.whatsapp : theme.palette.youtube}`}} >{sale.isPaid ? t("dashboard.pending_sales.paid") : t("dashboard.pending_sales.not_paid")}</Typography>

      <Box className={`flex flex_wrap jcc aic g20`}>
        <PrimaryButton onClick={()=>handleOpenPendingSaleModal(sale)} className={`flex jcc aic g10`}>
          <VisibilityRounded/>
          <Typography variant={"h6"}>{t("dashboard.view_product.button")}</Typography>
        </PrimaryButton>
        <ConfirmButton className={`flex jcc aic g10`}>
          <CheckRounded/>
          <Typography variant={"h6"}>{t("dashboard.confirm.button")}</Typography>
        </ConfirmButton>
      </Box>
    </Box>
  )
}

export default PendingSale
