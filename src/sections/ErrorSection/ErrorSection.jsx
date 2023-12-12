"use client"
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { Box , Typography } from '@mui/material'
import errorImage from "../../assets/images/error.jpg"
import { useRouter } from 'next/navigation';
import styles from "./ErrorSection.module.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ErrorSection = () => {
  const router =  useRouter()
  return (
    <PrimaryBox>
      <PrimaryContainer className={`${styles.error_section_contain} grid jcs aic g30`}>
        <Typography variant={"h1"} sx={{color:(theme)=>theme.palette.primary.main}} className={`tac`}>404</Typography>
        <Box  className={` relative ${styles.error_image_box}`}>
          <LazyLoadImage className={`center_abs_x`}  src={errorImage.src} alt={"error"} />
        </Box>
        <Box className={`flex jcc aic`}>
          <PrimaryButton sx={{width:"fit-content"}} onCLick={()=>router.push(`${process.env.NEXT_PUBLIC_HOME_ROUTE}`)}>Go Back</PrimaryButton>
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default ErrorSection
