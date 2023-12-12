import Forms from '@/Forms/Forms';
import { ProfileContext } from '@/context/ProfileContext';
import {Modal , Box , Typography} from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";


const ChangeAvatarModal =()=> {
  const {openChangeAvatarModal , handleCloseChangeAvatarModal} = useContext(ProfileContext)
  const {t} = useTranslation()

  return (
      <Modal
        open={openChangeAvatarModal}
        onClose={handleCloseChangeAvatarModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`pad20 center_abs_x_y br10 modal grid jcs aic g30`}>
          <Typography sx={{color:(theme)=>theme.palette.primary.main}} variant={"h4"} className={`tac`}>{t("forms.change_avatar.title")}</Typography>
          <Forms type={"change_avatar"}/>
        </Box>
      </Modal>
  );
}

export default ChangeAvatarModal