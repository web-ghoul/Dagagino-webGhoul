"use client"
import { PrimaryBox } from "@/muiCustomize/PrimaryBox"
import { PrimaryContainer } from "@/muiCustomize/PrimaryContainer"
import { Box, Typography } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from "./ContactSection.module.scss"
import contactImg from "../../assets/images/emails.svg"
import { useTranslation } from "react-i18next";
import { LocationOnRounded, CallRounded, EmailRounded } from "@mui/icons-material"
import Forms from "@/Forms/Forms"

const ContactSection = () => {
  const { t } = useTranslation()
  return (
    <PrimaryBox id={"Contact"}>
      <PrimaryContainer className={`${styles.contact_section_contain} grid jcs aic g50`}>
        <Box className={`grid jcc aic g10 ${styles.contact_title}`}>
          <Box className={`flex jcc aic`}>
            <LazyLoadImage src={contactImg.src} alt={"contact"} />
          </Box>
          <Typography className={`tac`} variant="h4">{t("contact.title")}</Typography>
          <Typography className={`tac fw500`} variant="h6">{t("contact.paragraph")}</Typography>
        </Box>
        <Box className={`${styles.form_and_contacts} grid jcs aifs g30`}>
          <Box className={`${styles.contacts} grid jcs aic g30`}>
            <Box className={`${styles.contact} flex jcs aifs g10`}>
              <Box className={`${styles.icon} flex jcc aic br4`}>
                <LocationOnRounded />
              </Box>
              <Box className={`grid jcs aic`}>
                <Typography variant="h5">{t("contact.location.text")}</Typography>
                <Typography className={`fw500`} variant="h6">{t("contact.location")}</Typography>
              </Box>
            </Box>

            <Box className={`${styles.contact} flex jcs aifs g10`}>
              <Box className={`${styles.icon} flex jcc aic  br4`}>
                <CallRounded />
              </Box>
              <Box className={`grid jcs aic`}>
                <Typography variant="h5">{t("contact.call_us")}</Typography>
                <Typography className={`fw500`} variant="h6">{t("contact.phone_number")}</Typography>
              </Box>
            </Box>

            <Box className={`${styles.contact} flex jcs aifs g10`}>
              <Box className={`${styles.icon} flex jcc aic  br4`}>
                <EmailRounded />
              </Box>
              <Box className={`grid jcs aic`}>
                <Typography variant="h5">{t("contact.email.text")}</Typography>
                <Typography className={`fw500`} variant="h6">{t("contact.email")}</Typography>
              </Box>
            </Box>
          </Box>
          <Forms type="contact" />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default ContactSection
