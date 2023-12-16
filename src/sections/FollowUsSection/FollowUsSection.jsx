"use client"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { PrimaryBox } from "../../muiCustomize/PrimaryBox"
import { PrimaryContainer } from "../../muiCustomize/PrimaryContainer"
import { Box, Typography } from "@mui/material"
import followUsImg from "../../assets/images/social.svg"
import smileImg from "../../assets/images/smile.svg"
import styles from "./FollowUsSection.module.scss"
import { useTranslation } from "react-i18next"

const FollowUsSection = () => {
  const { t } = useTranslation()
  return (
    <PrimaryBox id={"Follow"}>
      <PrimaryContainer className={`grid jcs aic g30 ${styles.follow_us_contain}`}>
        <Box className={`grid jcfs aic ${styles.follow_us_text}`}>
          <Typography variant="h4">{t("follow_us_text1")}</Typography>
          <LazyLoadImage src={smileImg.src} alt={"smile"} />
          <Typography variant="h4">{t("follow_us_text2")}</Typography>
        </Box>
        <Box className={`flex jcfe aic ${styles.follow_us_image_box}`}>
          <LazyLoadImage src={followUsImg.src} alt={"follow us"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default FollowUsSection