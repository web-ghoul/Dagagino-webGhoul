"use client"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { PrimaryBox } from "../../muiCustomize/PrimaryBox"
import { PrimaryContainer } from "../../muiCustomize/PrimaryContainer"
import { Box, Typography } from "@mui/material"
import phoneImg from "../../assets/images/mobilephone.svg"
import circlesImg from "../../assets/images/threeofcircles.svg"
import starImg from "../../assets/images/defaultstar.svg"
import styles from "./AppSection.module.scss"
import { useTranslation } from "react-i18next"

const AppSection = () => {
  const { t } = useTranslation()
  return (
    <PrimaryBox id={"App"}>
      <PrimaryBox sx={{ backgroundImage: `url(${circlesImg.src})` }} className={`${styles.app_box}`}>
        <PrimaryContainer className={`grid jcs aic g50 ${styles.app_contain}`}>
          <Typography variant="h4" className={`tac fw700`}>{t("app.title")}</Typography>
          <Box className={`flex jcs aic g30 ${styles.app_data_box}`}>
            <Box className={`${styles.app_image_box} flex jcfe aic`}>
              <LazyLoadImage src={phoneImg.src} alt={"phone"} />
            </Box>
            <Box className={`grid jcfs aic g20 ${styles.feats}`}>
              <Box className={`flex jcfs aic g10 ${styles.feat}`}>
                <Box className={`${styles.star} flex jcc aic`}>
                  <LazyLoadImage src={starImg.src} alt={"star"} />
                </Box>
                <Box className={`grid jcs aic g10`}>
                  <Typography variant="h6">{t("app.title_1")}</Typography>
                  <Typography variant="h6">{t("app.text_1")}</Typography>
                </Box>
              </Box>
              <Box className={`flex jcfs aic g10 ${styles.feat}`}>
                <Box className={`${styles.star} flex jcc aic`}>
                  <LazyLoadImage src={starImg.src} alt={"star"} />
                </Box>
                <Box className={`grid jcs aic g10`}>
                  <Typography variant="h6">{t("app.title_2")}</Typography>
                  <Typography variant="h6">{t("app.text_2")}</Typography>
                </Box>
              </Box>
              <Box className={`flex jcfs aic g10 ${styles.feat}`}>
                <Box className={`${styles.star} flex jcc aic`}>
                  <LazyLoadImage src={starImg.src} alt={"star"} />
                </Box>
                <Box className={`grid jcs aic g10`}>
                  <Typography variant="h6">{t("app.title_3")}</Typography>
                  <Typography variant="h6">{t("app.text_3")}</Typography>
                </Box>
              </Box>
              <Box className={`flex jcfs aic g10 ${styles.feat}`}>
                <Box className={`${styles.star} flex jcc aic`}>
                  <LazyLoadImage src={starImg.src} alt={"star"} />
                </Box>
                <Box className={`grid jcs aic g10`}>
                  <Typography variant="h6">{t("app.title_4")}</Typography>
                  <Typography variant="h6">{t("app.text_4")}</Typography>
                </Box>
              </Box>
              <Box className={`flex jcfs aic g10 ${styles.feat}`}>
                <Box className={`${styles.star} flex jcc aic`}>
                  <LazyLoadImage src={starImg.src} alt={"star"} />
                </Box>
                <Box className={`grid jcs aic g10`}>
                  <Typography variant="h6">{t("app.title_5")}</Typography>
                  <Typography variant="h6">{t("app.text_5")}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </PrimaryContainer>
      </PrimaryBox>
    </PrimaryBox>
  )
}

export default AppSection