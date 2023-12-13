import { Box, Typography } from "@mui/material"
import { PrimaryButton } from "@/muiCustomize/PrimaryButton"
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { DeleteButton } from "../muiCustomize/DeleteButton";
import LoadButton from "../components/LoadButton/LoadButton";

const DeleteUserProductForm = ({ loading }) => {
  const { t } = useTranslation()
  const { handleCloseDeleteUserProductModal } = useContext(DashboardContext)
  return (
    <Box className={`grid jcs aic g50`}>
      <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h4" >{t("dashboard.delete_user_product.title")}</Typography>
      <Box className={`flex jcsb aic g30`}>
        <LoadButton loading={loading}>
          <DeleteButton fullWidth type={"submit"}>{t("forms.user_product.delete_button.text")}</DeleteButton>
        </LoadButton>
        <PrimaryButton type={"button"} onClick={handleCloseDeleteUserProductModal} fullWidth>{t("forms.user_product.cancel_button.text")}</PrimaryButton>
      </Box>
    </Box>
  )
}

export default DeleteUserProductForm
