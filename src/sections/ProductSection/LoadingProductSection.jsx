import { Box ,Skeleton} from "@mui/material"
import styles from "./ProductSection.module.scss"

const LoadingProductSection = () => {
  return (
    <Box className={`grid jcsb aic g30 pad20 br10  ${styles.product}`}>
        <Box className={`grid jcs ais ass g20`}>
            <Box>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </Box>
        </Box>
        <Box className={`flex jcc aic br6 ${styles.product_image_box}`}>
            <Skeleton variant={"rectangular"}/>
        </Box>
    </Box>
  )
}

export default LoadingProductSection
