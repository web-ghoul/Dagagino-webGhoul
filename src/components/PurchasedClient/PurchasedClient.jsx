import { Box , Typography } from '@mui/material'
import styles from "./PurchasedClient.module.scss"
import { useTranslation } from 'react-i18next';

const PurchasedClient = ({def , client, number}) => {
  const {t} = useTranslation()
  return (
    <Box className={`${def && styles.default_box} ${styles.client_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${!def && styles.client_box_number}`}>{def ? "#" : "#"+number}</Typography>
      <Typography variant={"h6"}>{def ? t("analysis_report.purchased_client.name"):t("lang") === "ar" ? client.user.arName : client.user.enName}</Typography>
      <Typography variant={"h6"}>{def ? t("analysis_report.purchased_client.client_type") : t("lang") === "ar" ? client.user.type.arName : client.user.type.enName}</Typography>
      <Typography variant={"h6"}>{def ? t("analysis_report.purchased_client.repeats") : client.repeats}</Typography>
      <Typography variant={"h6"}>{def ? t("analysis_report.purchased_client.total_paid") : client.totalPaid}</Typography>
    </Box>
  )
}

export default PurchasedClient
