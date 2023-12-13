import { Box, Skeleton } from '@mui/material'
import styles from "./ProfileDataBox.module.scss"

const LoadingProfileDataBox = () => {
  return (
    <Box className={`grid jcs aic g30 ${styles.profile}`}>
      <Box className={`${styles.profile_box} flex jcfs flex_wrap aic g30 pad20 br10`}>
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
        </Box>   
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
        </Box>  
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
        </Box>        
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
        </Box>
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*300)}px`,height:"30px"}}/>
        </Box> 
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*200)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*200)}px`,height:"30px"}}/>
        </Box>
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*200)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*200)}px`,height:"30px"}}/>
        </Box>
        <Box className={`${styles.data_box} flex jcfs aic g10 br6 pad10`}>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*200)}px`,height:"30px"}}/>
          <Skeleton variant='text' sx={{width:`${Math.floor(Math.random()*200)}px`,height:"30px"}}/>
        </Box>
      </Box>
    </Box>
  )
}

export default LoadingProfileDataBox
