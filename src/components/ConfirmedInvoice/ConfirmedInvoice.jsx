import { Box, Typography, useMediaQuery } from "@mui/material"
import styles from "./ConfirmedInvoice.module.scss"
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { VisibilityRounded } from "@mui/icons-material"
import { handleDate } from "@/functions/handleDate"
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react"

const ConfirmedInvoice = ({ def, invoice, number }) => {
  const { t } = useTranslation()
  const { handleOpenConfirmedInvoiceModal } = useContext(DashboardContext)
  const mdSize = useMediaQuery("(max-width:992px)")
  const smSize = useMediaQuery("(max-width:768px)")
  return def ? (
    <Box className={`${styles.default_box} ${styles.invoice_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${!def && styles.invoice_box_number}`}>#</Typography>

      <Typography variant={"h6"}>{t("dashboard.confirmed_invoices.buyer_name")}</Typography>

      {!smSize && <Typography variant={"h6"}>{t("dashboard.confirmed_invoices.date")}</Typography>}

      <Typography variant={"h6"}>{t("dashboard.confirmed_invoices.total_price")}</Typography>
    </Box>
  ) : (
    <Box className={`${styles.invoice_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${styles.invoice_box_number}`}>{"#" + number}</Typography>

      <Typography variant={"h6"}>{t("lang") === "ar" ? invoice.buyer.arName : invoice.buyer.enName}</Typography>

      {!smSize && <Typography variant={"h6"}>{handleDate(invoice.updatedAt, t("lang"))}</Typography>}

      <Typography variant={"h6"}>{invoice.totalAfterDiscount.toFixed(1)}</Typography>

      <PrimaryButton onClick={() => handleOpenConfirmedInvoiceModal(invoice)} className={`flex jcc aic g10`}>
        <VisibilityRounded />
        {!mdSize && <Typography variant={"h6"}>{t("dashboard.view_product.button")}</Typography>}
      </PrimaryButton>
    </Box>
  )
}

export default ConfirmedInvoice
