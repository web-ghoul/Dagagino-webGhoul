import { LazyLoadImage } from "react-lazy-load-image-component"
import logoArabic from "../../assets/images/logo_arabic.jpg"
import logoEnglish from "../../assets/images/logo.png"

const LogoImage = () => {
  return (
    <LazyLoadImage 
      src={logoEnglish.src} alt={"logo"} />
  )
}

export default LogoImage
