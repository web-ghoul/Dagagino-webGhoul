import { useTranslation } from "react-i18next";
import LoadButton from "@/components/LoadButton/LoadButton";
import { DeleteButton } from "../muiCustomize/DeleteButton";
import { Box, Typography } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";

const ClearCartForm = ({ loading }) => {
  const { t } = useTranslation()
  return (
    <LoadButton loading={loading}>
      <Box className={`flex jcc aic g10 pad10`}>
        <DeleteButton type={"submit"}>
          <DeleteRounded />
          <Typography variant="h6">{t("forms.clear_cart.button.text")}</Typography>
        </DeleteButton>
      </Box>
    </LoadButton>
  )
}

export default ClearCartForm
