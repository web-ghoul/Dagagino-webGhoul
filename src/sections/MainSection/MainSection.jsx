"use client"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { PrimaryBox } from "../../muiCustomize/PrimaryBox"
import { PrimaryContainer } from "../../muiCustomize/PrimaryContainer"
import { Box, Typography } from "@mui/material"
import phonesImg from "../../assets/images/phones.svg"
import androidImg from "../../assets/images/android.svg"
import iosImg from "../../assets/images/IOS.svg"
import circleImg from "../../assets/images/circlelarge.svg"
import styles from "./MainSection.module.scss"
import { useTranslation } from "react-i18next"

const MainSection = () => {
  const { t } = useTranslation()
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g30 ${styles.main_contain}`}>
        <Box className={`grid jcs aic g20 relative ${styles.main_data}`}>
          <Typography variant="h3" className={`fw700`}>{t("main.title")}</Typography>
          <Typography variant="h6">{t("main.description_1")}</Typography>
          <Typography variant="h6">{t("main.description_2")}</Typography>
          <Box className={`flex jcs aic g10 ${styles.mobile_os}`}>
            <LazyLoadImage src={androidImg.src} alt={"app"} />
            <LazyLoadImage src={iosImg.src} alt={"app"} />
          </Box>
          <LazyLoadImage src={circleImg.src} className={`${styles.circle_image_1} absolute`} alt={"circle"} />
          <LazyLoadImage src={circleImg.src} className={`${styles.circle_image_2} absolute`} alt={"circle"} />
          <LazyLoadImage src={circleImg.src} className={`${styles.circle_image_3} center_abs_x`} alt={"circle"} />
        </Box>
        <Box className={`flex jcfe aic ${styles.main_image}`}>
          <LazyLoadImage src={phonesImg.src} alt={"Main"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default MainSection
