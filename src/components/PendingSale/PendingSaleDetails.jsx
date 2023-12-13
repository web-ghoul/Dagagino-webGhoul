import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import styles from "./PendingSale.module.scss"

const PendingSaleDetails = ({ sale }) => {
  const { t } = useTranslation()
  console.log(sale)
  return (
    <Box>
      <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant={"h4"} className={`tac`}>{t("dashboard.pending_sale_details.title")}</Typography>
      <Box className={`grid jcs iac g30 ${styles.pending_sale_details_box}`}>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          {/* <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.user_product_details.name")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? sale.product.arName : sale.product.enName}</Typography> */}
        </Box>
      </Box>
    </Box>
  )
}

export default PendingSaleDetails