
import LogoImage from "../LogoImage/LogoImage"
import styles from "./Logo.module.scss"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_HOME_ROUTE}`} className={`${styles.logo} flex jcc aic`}>
      <LogoImage/>    
    </Link>
  )
}

export default Logo
