import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { Box, Typography } from "@mui/material"
import LoadButton from "@/components/LoadButton/LoadButton"
import { PrimaryButton } from "@/muiCustomize/PrimaryButton"
import { useTranslation } from "react-i18next";
import { useContext } from "react"
import { AnalysisReportContext } from "@/context/AnalysisReportContext"


const HandleReportDateForm = ({ loading, formik }) => {
  const { t } = useTranslation()
  const { setStartDate, setEndDate } = useContext(AnalysisReportContext)
  return (
    <Box className={`handle_report_dates_box grid jcs aife g30`}>
      <Box className={`grid jcs aic g10`}>
        <Typography variant="h6" >{t("forms.startDate.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="date"
          id="startDate"
          name="startDate"
          value={formik.values.startDate}
          onChange={(e) => { formik.handleChange(e); setStartDate(e.target.value) }}
          onBlur={formik.handleBlur}
          error={formik.touched.startDate && Boolean(formik.errors.startDate)}
          helperText={formik.touched.startDate && formik.errors.startDate}
        />
      </Box>
      <Box className={`grid jcs aic g10`}>
        <Typography variant="h6" >{t("forms.endDate.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="date"
          id="endDate"
          name="endDate"
          value={formik.values.endDate}
          onChange={(e) => { formik.handleChange(e); setEndDate(e.traget.value) }}
          onBlur={formik.handleBlur}
          error={formik.touched.endDate && Boolean(formik.errors.endDate)}
          helperText={formik.touched.endDate && formik.errors.endDate}
        />
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.handle_report_dates.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default HandleReportDateForm
