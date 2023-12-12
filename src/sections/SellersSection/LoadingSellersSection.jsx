import { Box } from "@mui/material"
import styles from "./SellersSection.module.scss"
import LoadingSeller from "@/components/Seller/LoadingSeller"

const LoadingSellersSection = () => {
  return (
    <Box className={`grid jcs aic g30 ${styles.sellers}`}>
      {
        new Array(Math.floor(Math.random()*3)).fill(0).map((_,i)=>(
            <LoadingSeller key={i}/>
        ))
      }
    </Box>
  )
}

export default LoadingSellersSection
  