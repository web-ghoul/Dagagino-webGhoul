import { Box, Typography } from "@mui/material"
import { PrimaryButton } from "@/muiCustomize/PrimaryButton"
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { ConfirmButton } from "../muiCustomize/ConfirmButton";
import LoadButton from "../components/LoadButton/LoadButton";

const ConfirmPendingSaleForm = ({ loading }) => {
  const { t } = useTranslation()
  const { handleCloseConfirmPendingSaleModal } = useContext(DashboardContext)
  return (
    <Box className={`grid jcs aic g50`}>
      <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h4" >{t("dashboard.confirm_pending_sale.title")}</Typography>
      <Box className={`flex jcsb aic g30`}>
        <LoadButton loading={loading}>
          <ConfirmButton fullWidth type={"submit"}>{t("forms.pending_sale.confirm_button.text")}</ConfirmButton>
        </LoadButton>
        <PrimaryButton type={"button"} onClick={handleCloseConfirmPendingSaleModal} fullWidth>{t("forms.pending_sale.cancel_button.text")}</PrimaryButton>
      </Box>
    </Box>
  )
}

export default ConfirmPendingSaleForm
