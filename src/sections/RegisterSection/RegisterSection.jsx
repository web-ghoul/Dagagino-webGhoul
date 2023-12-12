"use client"
import Forms from '@/Forms/Forms'
import LogoImage from '@/components/LogoImage/LogoImage'
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { Box, Divider, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from "./RegisterSection.module.scss"
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import smileImg from "../../assets/images/smile.svg"
import { useTranslation } from "react-i18next";
import { SecondaryButton } from '@/muiCustomize/SecondaryButton'
import { useState } from 'react'

const RegisterSection = () => {
    const {t} = useTranslation()
    const [type , setType] = useState("client")
    return (
        <PrimaryBox>
        <PrimaryContainer  className={`${styles.register_section_contain} grid jcs aic g30`}>
            <Box className={`grid jcs aic g50`}>
                <Box className={`grid jcs aic g10`}>
                    <Typography variant="h4" className={`tac`}>{t("forms.register.title")}</Typography>
                    <Box className={`flex jcc aic`}>
                        <LazyLoadImage src={smileImg.src} alt={"smile"}  />
                    </Box>
                </Box>
                <Box className={`${styles.client_types} flex flex_wrap jcfs aic g30`}>
                    <SecondaryButton onClick={()=>setType("client")} className={`${type === "client" && styles.active}`}>{t("forms.register.client_type")}</SecondaryButton>
                    <SecondaryButton onClick={()=>setType("supplier")} className={`${type === "supplier" && styles.active}`}>{t("forms.register.supplier_type")}</SecondaryButton>
                    <SecondaryButton onClick={()=>setType("farmer")} className={`${type === "farmer" && styles.active}`}>{t("forms.register.farmer_type")}</SecondaryButton>
                </Box>
                <Divider/>
                {type === "client" && <Forms type={type} />}
                {type === "supplier" && <Forms type={type} />}
                {type === "farmer" && <Forms type={type} />}
            </Box>
            <Box className={`${styles.logo} flex jcc aic`}>
                <LogoImage/>
            </Box>
        </PrimaryContainer>
        </PrimaryBox>
    )
}

export default RegisterSection
