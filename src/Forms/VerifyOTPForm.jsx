import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "@/muiCustomize/PrimaryButton";
import LoadButton from "@/components/LoadButton/LoadButton";
import { useState } from "react";

const VerifyOTPForm = ({sendOTP, loading, formik}) => {
  const {t} = useTranslation()
  return (
  <Box className={`grid ${sendOTP ? "jcs" : "jcc"} aic g30`}>
    {
      sendOTP ? (
        <>
          <PrimaryTextField
            fullWidth
            variant="outlined"
            type="text"
            id="otp"
            name="otp"
            label={t("forms.otp.label")}
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          />
          <LoadButton loading={loading}>
            <PrimaryButton type={"submit"}>{t("forms.verify_otp.button.text")}</PrimaryButton>
          </LoadButton>
        </>
      ):(
        <Box  id={"recaptcha"} ></Box>
      )
    }
  </Box>
  )
}

export default VerifyOTPForm
