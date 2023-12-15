import { Box, Typography, useMediaQuery } from "@mui/material"
import styles from "./PendingSale.module.scss"
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { ConfirmButton } from '@/muiCustomize/ConfirmButton'
import { VisibilityRounded, CheckRounded } from "@mui/icons-material"
import { handleDate } from "@/functions/handleDate"
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react"

const PendingSale = ({ def, sale, number }) => {
  const { t } = useTranslation()
  const { handleOpenPendingSaleModal, handleOpenConfirmPendingSaleModal } = useContext(DashboardContext)
  const mdSize = useMediaQuery("(max-width:992px)")
  const smSize = useMediaQuery("(max-width:768px)")
  return def ? (
    <Box className={`${styles.default_box} ${styles.sale_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${!def && styles.sale_box_number}`}>#</Typography>

      <Typography variant={"h6"}>{t("dashboard.pending_sales.buyer_name")}</Typography>

      {!smSize && <Typography variant={"h6"}>{t("dashboard.pending_sales.date")}</Typography>}

      <Typography variant={"h6"}>{t("dashboard.pending_sales.total_price")}</Typography>
    </Box>
  ) : (
    <Box className={`${styles.sale_box} br6 pad20 grid jcs aic position`}>
      <Typography variant={"h6"} className={`${styles.sale_box_number}`}>{"#" + number}</Typography>

      <Typography variant={"h6"}>{t("lang") === "ar" ? sale.buyer.arName : sale.buyer.enName}</Typography>

      {!smSize && <Typography variant={"h6"}>{handleDate(sale.updatedAt, t("lang"))}</Typography>}

      <Typography variant={"h6"}>{sale.totalAfterDiscount.toFixed(1)}</Typography>

      <Box className={`flex flex_wrap jcc aic g20`}>
        <PrimaryButton onClick={() => handleOpenPendingSaleModal(sale)} className={`flex jcc aic g10`}>
          <VisibilityRounded />
          {!mdSize && <Typography variant={"h6"}>{t("dashboard.view_product.button")}</Typography>}
        </PrimaryButton>
        <ConfirmButton onClick={() => handleOpenConfirmPendingSaleModal(sale._id)} className={`flex jcc aic g10`}>
          <CheckRounded />
          {!mdSize && <Typography variant={"h6"}>{t("dashboard.confirm.button")}</Typography>}
        </ConfirmButton>
      </Box>
    </Box>
  )
}

export default PendingSale
