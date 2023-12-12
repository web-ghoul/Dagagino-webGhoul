import Forms from '@/Forms/Forms';
import {Modal , Box} from '@mui/material';
import { ProfileContext } from '@/context/ProfileContext';
import { useContext } from 'react';
import {useSelector} from "react-redux"
import { useParams } from 'next/navigation'
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { useTranslation } from 'react-i18next'
import "./modal.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import avatar from "../assets/images/avatar.png"


const ViewAvatarModal =()=> {
  const {openViewAvatarModal , profileData , handleCloseViewAvatarModal , handleOpenChangeAvatarModal} = useContext(ProfileContext)
  const {id} = useParams()
  const {userId} = useSelector((state)=>state.auth)
  const { t } = useTranslation()

  return (
      <Modal
        open={openViewAvatarModal}
        onClose={handleCloseViewAvatarModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`pad20 view_avatar center_abs_x_y br10 modal grid jcs aic g30`}>
          {profileData && (
            <Box className={`flex jcc aic avatar_box`}>
              <LazyLoadImage src={profileData.imageURL ? profileData.imageURL : avatar.src} alt={"avatar"} />
            </Box>
          )}
          {
            id === userId && <PrimaryButton onClick={()=>{handleCloseViewAvatarModal();handleOpenChangeAvatarModal(profileData)}}>{t("profile.change_avatar.button")}</PrimaryButton>
          }
        </Box>
      </Modal>

  );
}

export default ViewAvatarModal