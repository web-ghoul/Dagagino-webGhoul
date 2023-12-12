
import styles from "./Footer.module.scss"
import {Typography ,Box} from '@mui/material'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { useTranslation } from 'react-i18next';
import circleImg from "../../assets/images/circle.svg"
import circlesImg from "../../assets/images/circles.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SecondaryBox } from "@/muiCustomize/SecondartBox";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <SecondaryBox component={"footer"} className={`${styles.footer}`}>
      <PrimaryContainer className={`${styles.footer_contain} flex jcc aic g30`}>
        <LazyLoadImage src={circleImg.src} alt={"circle"} className={`${styles.footer_image_circle}`}/>
        <LazyLoadImage src={circlesImg.src} alt={"circle"}  className={`${styles.footer_image_circles}`}/>
        <Typography variant={"h5"} className={`tac ${styles.footer_text}`}>{t('footer.text')}</Typography>
        <Typography variant={"h5"} className={`tac`}></Typography>
      </PrimaryContainer>
    </SecondaryBox>
  )
}

export default Footer
