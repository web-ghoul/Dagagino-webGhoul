import { Box, Typography, useMediaQuery } from "@mui/material"
import styles from "./BoughtProduct.module.scss"
import { useTranslation } from 'react-i18next';

const BoughtProduct = ({ def, product, number }) => {
  const { t } = useTranslation()
  const smSize = useMediaQuery("(max-width:768px)")
  return (
    <Box className={`${def && styles.default_box} ${styles.product_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${!def && styles.product_box_number}`}>{def ? "#" : "#" + number}</Typography>

      {def ? (
        <Typography variant={"h6"}>{t("analysis_report.bought_product.name")}</Typography>
      ) : (
        <Box className={`grid jcs aic g10`}>
          <Typography variant={"h6"}>{t("lang") === "ar" ? product.product.arName : product.product.enName}</Typography>
          <Typography variant={"h6"}>{t("lang") === "ar" ? product.product.arDescription : product.product.enDescription}</Typography>
        </Box>
      )}

      {!smSize && <Typography variant={"h6"}>{def ? t("analysis_report.bought_product.repeats") : product.repeats}</Typography>}

      <Typography variant={"h6"}>{def ? t("analysis_report.bought_product.quantities") : product.totalQty}</Typography>

      <Typography variant={"h6"}>{def ? t("analysis_report.bought_product.total_paid") : product.totalMoney}</Typography>
    </Box>
  )
}

export default BoughtProduct
