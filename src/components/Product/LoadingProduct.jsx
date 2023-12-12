import { Box, Skeleton } from "@mui/material"
import styles from "./Product.module.scss"

const LoadingProduct=()=>{
    return(
        <Box className={`${styles.product} grid jcs aic g30 pad20 br6`}>
            <Box className={`${styles.product_image_box} br4`} >
                <Skeleton variant="rectangular" sx={{width:`100%`, height:"100%"}} />
            </Box>
            <Box className={`grid jcs aic g10`}>
                <Skeleton variant="text" sx={{width:`${Math.floor(Math.random()*100)}%`}} />
                <Skeleton variant="text" sx={{width:`${Math.floor(Math.random()*100)}%`}} />
            </Box>
            <Box className={`flex flex_wrap jcsb aic g20`}>
                <Skeleton variant="rectangular" sx={{width:`45%`, height:'35px'}} />
            </Box>
        </Box>
    )
}

export default LoadingProduct