import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import 'react-phone-input-2/lib/style.css'
import { PrimaryButton } from "@/muiCustomize/PrimaryButton";
import LoadButton from "@/components/LoadButton/LoadButton";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import governorates from "../data/governorates.json"

const EditProfileForm = ({ loading, formik }) => {
  const { t } = useTranslation()
  const [states, setStates] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    if (formik.values.governorate !== "") {
      const governorate = governorates.governorates.find((gov) => gov._id === formik.values.governorate)
      setStates(governorate.states)
    }
  }, [formik, dispatch])

  return (
    <Box className={`grid jcs aic g30`}>
      <Box className={`flex jcsb aic g30 sm_wrap`}>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.arabic_name.label")}</Typography>
          <PrimaryTextField
            fullWidth
            variant="outlined"
            type="text"
            id="arName"
            name="arName"
            value={formik.values.arName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.arName && Boolean(formik.errors.arName)}
            helperText={formik.touched.arName && formik.errors.arName}
          />
        </Box>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.english_name.label")}</Typography>
          <PrimaryTextField
            fullWidth
            variant="outlined"
            type="text"
            id="enName"
            name="enName"
            value={formik.values.enName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.enName && Boolean(formik.errors.enName)}
            helperText={formik.touched.enName && formik.errors.enName}
          />
        </Box>
      </Box>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.email.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.address.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </Box>
      <Box className={`flex jcsb aic g30 md_wrap`}>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.arabic_description.label")}</Typography>
          <PrimaryTextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            type="text"
            id="arDescription"
            name="arDescription"
            value={formik.values.arDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.arDescription && Boolean(formik.errors.arDescription)}
            helperText={formik.touched.arDescription && formik.errors.arDescription}
          />
        </Box>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.english_description.label")}</Typography>
          <PrimaryTextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            type="text"
            id="enDescription"
            name="enDescription"
            value={formik.values.enDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.enDescription && Boolean(formik.errors.enDescription)}
            helperText={formik.touched.enDescription && formik.errors.enDescription}
          />
        </Box>
      </Box>
      <Box className={`flex jcsb aic g30 sm_wrap`}>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.governorate.label")}</Typography>
          <PrimaryTextField
            id="governorate"
            name="governorate"
            select
            fullWidth
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            value={formik.values.governorate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.governorate && Boolean(formik.errors.governorate)}
            helperText={formik.touched.governorate && formik.errors.governorate}
          >
            <option key={-1} value={""}>
            </option>
            {
              governorates.governorates.map((gov, i) => (
                <option key={i} value={gov._id}>
                  {
                    t("lang") === "ar" ? gov.arName : gov.enName
                  }
                </option>
              ))
            }
          </PrimaryTextField>
        </Box>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.state.label")}</Typography>
          <PrimaryTextField
            id="state"
            name="state"
            select
            fullWidth
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          >
            <option key={-1} value={""}>
            </option>
            {
              states.map((state, i) => (
                <option key={i} value={state._id}>
                  {
                    t("lang") === "ar" ? state.arName : state.enName
                  }
                </option>
              ))
            }
          </PrimaryTextField>
        </Box>
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.edit_profile.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default EditProfileForm
