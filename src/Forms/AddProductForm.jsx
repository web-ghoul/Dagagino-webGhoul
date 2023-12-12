import { Box } from "@mui/material"
import LoadButton from "../LoadButton/LoadButton"
import { PrimaryButton } from "@/muiCustomize/PrimaryButton"
import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { useTranslation } from "react-i18next";

const AddProductForm = ({loading, formik}) => {
  const {t} = useTranslation()
  return (
    <Box className={`grid jcs aic g30`}>
      <Box className={`flex jcs aic g20`}>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="arName"
          name="arName"
          label={t("forms.arabic_name.label")}
          value={formik.values.arName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.arName && Boolean(formik.errors.arName)}
          helperText={formik.touched.arName && formik.errors.arName}
        />
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="enName"
          name="enName"
          label={t("forms.english_name.label")}
          value={formik.values.enName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.enName && Boolean(formik.errors.enName)}
          helperText={formik.touched.enName && formik.errors.enName}
        />
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.add_product.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default AddProductForm
