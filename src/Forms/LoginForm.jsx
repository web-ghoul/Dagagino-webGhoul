import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { Box } from "@mui/material"
import PhoneInput from "react-phone-input-2"
import { useTranslation } from "react-i18next";
import 'react-phone-input-2/lib/style.css'
import { PrimaryButton } from "@/muiCustomize/PrimaryButton";
import { SecondaryButton } from "@/muiCustomize/SecondaryButton";
import LoadButton from "@/components/LoadButton/LoadButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = ({ loading, formik }) => {
  const [phone, setPhone] = useState("")
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <Box className={`grid jcs aic g30`}>
      <PhoneInput
        country={"om"}
        name="phone"
        value={phone}
        onChange={(e) => { setPhone("+" + e); formik.values.phone = "+" + e }}
      />
      <PrimaryTextField
        fullWidth
        variant="outlined"
        type="password"
        id="password"
        name="password"
        label={t("forms.password.label")}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Box className={`grid jcs aic g20`}>
        <LoadButton loading={loading}>
          <PrimaryButton type={"submit"}>{t("forms.login.button.text")}</PrimaryButton>
        </LoadButton>
        <SecondaryButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_REGISTER_ROUTE}`)}>{t('header.register')}</SecondaryButton>
      </Box>
    </Box>
  )
}

export default LoginForm
