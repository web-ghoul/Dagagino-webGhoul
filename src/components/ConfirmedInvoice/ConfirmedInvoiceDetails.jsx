import styles from "./ConfirmedInvoice.module.scss"
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material"
import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { handleDate } from "../../functions/handleDate";
import LogoImage from "../LogoImage/LogoImage";

const ConfirmedInvoiceDetails = () => {
  const { t } = useTranslation()
  const { confirmedInvoice } = useContext(DashboardContext)
  return (
    <Box className={`grid jcs aic g30 ${styles.confirmed_invoice_details}`}>
      <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant={"h4"} className={`tac`}>{t("dashboard.confirmed_invoice_details.title")}</Typography>
      <Box className={`${styles.logo} flex jcc aic`}>
        <LogoImage />
      </Box>
      <Box className={`grid jcs iac g30 ${styles.confirmed_invoice_details_box}`}>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.confirmed_invoice_details.buyer_name")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? confirmedInvoice.buyer.arName : confirmedInvoice.buyer.enName}</Typography>
        </Box>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.confirmed_invoice_details.date")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{handleDate(confirmedInvoice.updatedAt, t("lang"))}</Typography>
        </Box>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.confirmed_invoice_details.total_price")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{confirmedInvoice.totalValue.toFixed(1)}</Typography>
        </Box>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.confirmed_invoice_details.total_priceAfterDiscount")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{confirmedInvoice.totalAfterDiscount.toFixed(1)}</Typography>
        </Box>
      </Box>
      <Box className={`grid cjs aic br10 g20 ${styles.confirmed_invoice_details_products_box}`}>
        <Box className={`grid jcs aic pad10 ${styles.table_head} ${styles.table_row}`}>
          <Typography variant="h6">#</Typography>
          <Typography variant="h6">{t("dashboard.confirmed_invoice_details.product_name")}</Typography>
          <Typography variant="h6">{t("dashboard.confirmed_invoice_details.quantity")}</Typography>
          <Typography variant="h6">{t("dashboard.confirmed_invoice_details.product_price")}</Typography>
          <Typography variant="h6">{t("dashboard.confirmed_invoice_details.product_priceAfterDiscount")}</Typography>
        </Box>
        {
          confirmedInvoice.products.map((product, i) => (
            <Box key={i} className={`grid jcs aic pad10 ${styles.table_row_data} ${styles.table_row}`}>
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
export default ConfirmedInvoiceDetails


{/* <Box className={`${styles.data_box_image_box} flex jcc aic`}>
          <LazyLoadImage src={confirmedInvoice.products[0].product.imageURL} alt={"product"} />
        </Box>
        <Box className={`grid jcs aic g10`}>
          <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
            <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.confirmed_invoice_details.product_name")}</Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? confirmedInvoice.products[0].product.arName : confirmedInvoice.products[0].product.enName}</Typography>
          </Box>
          <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
            <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.confirmed_invoice_details.product_description")}</Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? confirmedInvoice.products[0].product.arDescription : confirmedInvoice.products[0].product.enDescription}</Typography>
          </Box>
          <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
            <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.confirmed_invoice_details.product_price")}</Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{confirmedInvoice.products[0].price.toFixed(1)}</Typography>
          </Box>
        </Box> */}