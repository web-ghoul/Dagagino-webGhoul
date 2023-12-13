import { Box, Typography, useMediaQuery } from '@mui/material'
import styles from "./BoughtFrom.module.scss"
import { useTranslation } from 'react-i18next';

const BoughtFrom = ({ def, seller, number }) => {
  const { t } = useTranslation()
  const smSize = useMediaQuery("(max-width:768px)")
  return (
    <Box className={`${def && styles.default_box} ${styles.seller_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${!def && styles.seller_box_number}`}>{def ? "#" : "#" + number}</Typography>
      <Typography variant={"h6"}>{def ? t("analysis_report.bought_from.name") : t("lang") === "ar" ? seller.user.arName : seller.user.enName}</Typography>
      <Typography variant={"h6"}>{def ? t("analysis_report.bought_from.client_type") : t("lang") === "ar" ? seller.user.type.arName : seller.user.type.enName}</Typography>

      {!smSize && <Typography variant={"h6"}>{def ? t("analysis_report.bought_from.repeats") : seller.repeats}</Typography>}

      <Typography variant={"h6"}>{def ? t("analysis_report.bought_from.total_paid") : seller.totalPaid}</Typography>
    </Box>
  )
}

export default BoughtFrom
