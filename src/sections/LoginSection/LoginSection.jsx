"use client"
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { Box, Divider, Typography } from '@mui/material'
import smileImg from "../../assets/images/smile.svg"
import LogoImage from '@/components/LogoImage/LogoImage'
import Forms from '@/Forms/Forms'
import styles from "./LoginSection.module.scss"
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from "react-i18next";

const LoginSection = () => {
    const {t} = useTranslation()
    return (
        <PrimaryBox>
            <PrimaryContainer className={`${styles.login_section_contain} grid jcs aic g30`}>
                <Box className={`grid jcs aic ass g50`}>
                    <Box className={`grid jcs aic g10`}>
                        <Typography variant="h4" className={`tac`}>{t("forms.login.title")}</Typography>
                        <Box className={`flex jcc aic`}>
                            <LazyLoadImage src={smileImg.src} alt={"smile"}  />
                        </Box>
                    </Box>
                    <Divider/>
                    <Forms type={"login"} />
                </Box>
                <Box className={`${styles.logo} relative flex jcc aic`}>
                    <LogoImage/>
                </Box>
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default LoginSection
