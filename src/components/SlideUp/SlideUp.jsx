import { KeyboardArrowUpRounded } from "@mui/icons-material"
import styles from "./SlideUp.module.scss"
import { Box } from "@mui/material"
import { useEffect, useState } from "react";

const SlideUp = () => {
  const [active, setActive] = useState(false)

  const handleSlideUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    const handleSlide = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleSlide);
      return () => {
        window.removeEventListener('scroll', handleSlide);
      };
    }
  }, [active]);
  return (
    <Box onClick={handleSlideUp} className={`${styles.slideUp_box} ${active && styles.slideUp_active} flex jcc aic fixed`}>
      <KeyboardArrowUpRounded />
    </Box>
  )
}

export default SlideUp