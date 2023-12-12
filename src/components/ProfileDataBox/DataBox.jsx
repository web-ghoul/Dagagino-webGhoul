import { Box, Typography } from '@mui/material'
import styles from "./ProfileDataBox.module.scss"

const DataBox = ({title, data}) => {
  return (
    <Box className={`${styles.data_box} flex flex_wrap jcfs aifs g10 br6 pad10`}>
      <Typography variant='h6'>{title}</Typography>
      <Typography variant='h6' sx={{color:(theme)=>theme.palette.primary.main}}>{data}</Typography>
    </Box> 
  )
}

export default DataBox
