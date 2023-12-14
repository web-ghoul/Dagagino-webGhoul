import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "@/muiCustomize/PrimaryButton";
import LoadButton from "@/components/LoadButton/LoadButton";

const ComplaintForm = ({ loading, formik }) => {
  const { t } = useTranslation()
  return (
    <Box className={`grid jcs aic g30`}>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.complaint.label")}</Typography>
        <PrimaryTextField
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          type="text"
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.complaint.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default ComplaintForm
