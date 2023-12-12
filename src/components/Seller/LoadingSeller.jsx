import { PrimaryButton } from "@/muiCustomize/PrimaryButton"
import { Box, Skeleton, Typography } from "@mui/material"
import styles from "./Seller.module.scss"

const LoadingSeller = () => {
    return (
      <Box className={`grid jcs aic g10 br10 pad10 ${styles.seller}`}>
        <Box className={`${styles.seller_image} br4`}>
            <Skeleton variant="rectangular" sx={{width:`100%`, height:"100%"}} />
        </Box>
        <Box className={`grid jcs aic pad10 g20`}>
            <Box className={`flex flex_wrap jcsb aifs g10`}>
                <Skeleton variant="text" sx={{width:`${Math.floor(Math.random()*50)}%`}} />
                <Skeleton variant={"rectangular"} sx={{width:"120px" , height:"40px"}} />
            </Box>
            <Box className={`flex flex_wrap jcsb aic g10`}>
                <Box className={`grid jcc aic g5`}>
                    <Skeleton variant="text" sx={{width:`${Math.floor(Math.random()*100)}px`,height:"20px"}} />
                    <Skeleton variant="text" sx={{width:`${Math.floor(Math.random()*100)}px`}} />
                </Box>
                <Box className={`grid jcc aic g5`}>
                    <Skeleton variant="text" sx={{width:`${Math.floor(Math.random()*100)}px`}} />
                    <Skeleton variant="text" sx={{width:`${Math.floor(Math.random()*100)}px`}} />
                </Box>
            </Box>
        </Box>
    </Box>
    )
  }
  
  export default LoadingSeller
  