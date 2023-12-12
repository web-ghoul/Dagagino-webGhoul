"use client"
import Forms from '@/components/Forms/Forms'
import LogoImage from '@/components/LogoImage/LogoImage'
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { Box, Divider, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from "./VerifyOTPSection.module.scss"
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import smileImg from "../../assets/images/smile.svg"
import { useTranslation } from "react-i18next";
import { SecondaryButton } from '@/muiCustomize/SecondaryButton'
import { useState } from 'react'

const VerifyOTPSection = () => {
    const {t} = useTranslation()
    return (
        <PrimaryBox>
        <PrimaryContainer  className={`${styles.register_section_contain} grid jcs aic g30`}>
            <Box className={`grid jcs aifs g50`} sx={{height:"100%"}}>
                <Box className={`grid jcs aic g10`}>
                    <Typography variant="h4" className={`tac`}>{t("forms.verify_otp.title")}</Typography>
                    <Box className={`flex jcc aic`}>
                        <LazyLoadImage src={smileImg.src} alt={"smile"}  />
                    </Box>
                </Box>
                <Forms type={"verify_otp"} />
            </Box>
            <Box className={`${styles.logo} flex jcc aic`}>
                <LogoImage/>
            </Box>
        </PrimaryContainer>
        </PrimaryBox>
    )
}

export default VerifyOTPSection
