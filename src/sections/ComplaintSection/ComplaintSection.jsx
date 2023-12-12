"use client"
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { Typography } from '@mui/material'
import { useTranslation } from "react-i18next";
import Forms from '@/Forms/Forms'

const ComplaintSection = () => {
    const {t} = useTranslation()
    return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g30`}>
        <Typography variant={"h4"}>{t("complaint.send_complaint.title")}</Typography>
        <Forms type = {"complaint"}/>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default ComplaintSection
