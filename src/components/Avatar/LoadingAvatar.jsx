import { Box, Skeleton } from "@mui/material";
import styles from "./Avatar.module.scss"

const LoadingAvatar = () => {
    return (
      <Box className={`${styles.avatar} grid jcs aic g30 pad20 br10`}>
        <Box className={`flex jcc aic`}>
          <Box className={`${styles.avatar_image} relative`}/>
        </Box>
        <Skeleton variant={"rectangular"} sx={{height:"50px"}} />
      </Box>
    )
}

export default LoadingAvatar
