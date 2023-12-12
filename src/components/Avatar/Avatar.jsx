import { Box } from '@mui/material'
import styles from "./Avatar.module.scss"
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { useTranslation } from 'react-i18next'
import {useContext} from "react"
import { ProfileContext } from '@/context/ProfileContext'
import avatar from "../../assets/images/avatar.png"

const Avatar = ({data}) => {
  const {handleOpenChangeAvatarModal, handleOpenViewAvatarModal} = useContext(ProfileContext)
  const { t } = useTranslation()
  return (
    <Box className={`${styles.avatar} grid jcs aic g30 pad20 br10`}>
      <Box className={`flex jcc aic`}>
        <Box className={`${styles.avatar_image} relative`}  sx={{backgroundImage:`url('${data.imageURL ? data.imageURL : avatar.src}')`}} onClick={()=>{handleOpenViewAvatarModal(data)}}>
          <Box className={`overlay ${styles.overlay}`} />
        </Box>
      </Box>
      <PrimaryButton onClick = {()=>handleOpenChangeAvatarModal(data)}>{t("profile.change_avatar.button")}</PrimaryButton>
    </Box>
  )
}

export default Avatar
