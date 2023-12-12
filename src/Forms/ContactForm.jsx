import { PrimaryTextField } from '@/muiCustomize/PrimaryTextField'
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "@/muiCustomize/PrimaryButton";
import LoadButton from "@/components/LoadButton/LoadButton";
import { Box} from "@mui/material"

const ContactForm = ({loading, formik}) => {
  const {t} = useTranslation()
  return (
    <Box className={`grid jcsaic g20`}>
      <PrimaryTextField
        fullWidth
        variant="outlined"
        type="text"
        id="name"
        name="name"
        label={t("forms.name.label")}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <PrimaryTextField
        fullWidth
        variant="outlined"
        type="email"
        id="email"
        name="email"
        label={t("forms.email.label")}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <PrimaryTextField
        fullWidth
        variant="outlined"
        type="text"
        id="message"
        name="message"
        multiline
        rows={5}
        label={t("forms.message.label")}
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.contact.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default ContactForm
