"use client"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { PrimaryBox } from "../../muiCustomize/PrimaryBox"
import { PrimaryContainer } from "../../muiCustomize/PrimaryContainer"
import { Box, Typography } from "@mui/material"
import styles from "./AboutSection.module.scss"
import { useTranslation } from "react-i18next"
import aboutData from "../../data/about-us.json"
import moneyImg from "../../assets/images/money.svg"
import headSetImg from "../../assets/images/headset.svg"
import trustedImg from "../../assets/images/trusted.svg"

const cards = aboutData.cards
const logos = [moneyImg, trustedImg, headSetImg]

const AboutSection = () => {
  const { t } = useTranslation()
  return (
    <PrimaryBox id={"About"}>
      <PrimaryContainer className={`grid jcs aic g50 ${styles.about_contain}`}>
        <Typography variant="h4" className={`fw700 tac`}>{t("about.title")}</Typography>
        <Box className={`grid jcs aic g30 ${styles.about_us}`}>
          {
            cards.map((card, i) => (
              <Box className={`grid jcs aifs acfs pad20 br6 g20 ${styles.view}`}>
                <Box className={`flex jcc aic ${styles.about_us_icon}`}>
                  <LazyLoadImage src={logos[i].src} alt={"about"} />
                </Box>
                <Typography variant="h5" className={`tac fw600`}>{t("lang") === "ar" ? card.arTitle : card.enTitle}</Typography>
                <Typography variant="h6" sx={{ color: (theme) => theme.palette.gray }} className={`tac ${styles.view_description}`}>{t("lang") === "ar" ? card.arDescription : card.enDescription}</Typography>
              </Box>
            ))
          }

        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default AboutSection
