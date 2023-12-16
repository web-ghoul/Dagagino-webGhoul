"use client"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { PrimaryBox } from "../../muiCustomize/PrimaryBox"
import { PrimaryContainer } from "../../muiCustomize/PrimaryContainer"
import { Box, Typography } from "@mui/material"
import styles from "./TestmonialSection.module.scss"
import { useTranslation } from "react-i18next"
import quoteImg from "../../assets/images/quotes.svg"
import backgroundImg from "../../assets/images/background.svg"
import starsImg from "../../assets/images/stars.svg"
import clients from "../../data/clients-review.json";
const reviews = clients.cards
const TestmonialSection = () => {
  const { t } = useTranslation()
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50 ${styles.testmonial_contain}`}>
        <Typography variant="h4" className={`tac fw700`}>{t("testmonail.title")}</Typography>
        <Box className={`grid jcs aic g30 ${styles.reviews}`}>
          {reviews.map((review, i) => (
            <Box className={`grid jcs aic g20 pad20 br6 ${styles.review}`}>
              <Box className={`flex jcc aic`}>
                <LazyLoadImage src={quoteImg.src} alt={"quote"} />
              </Box>
              <Typography variant="h5">{t("lang") === "ar" ? review.arDescription : review.enDescription}</Typography>
              <Box className={`flex jcsb g20`}>
                <Box className={`flex jcs aic g10`}>
                  <Box className={`flex jcc aic`}>
                    <LazyLoadImage src={backgroundImg.src} alt={"user"} />
                  </Box>
                  <Box className={`grid jcs aic`}>
                    <Typography variant="h5">{t("lang") === "ar" ? review.arClientname : review.enClientname}</Typography>
                    <Typography variant="h6" sx={{ color: (theme) => theme.palette.gray }}>{t("lang") === "ar" ? review.arRole : review.enRole}</Typography>
                  </Box>
                </Box>
                <Box className={`flex jcfe aic`}>
                  <LazyLoadImage src={starsImg.src} alt={"stars"} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default TestmonialSection