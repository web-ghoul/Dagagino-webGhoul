import Forms from '@/Forms/Forms';
import { Modal, Box, Typography } from '@mui/material';
import { ProfileContext } from '@/context/ProfileContext';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";


const EditProfileModal = () => {
  const { openEditProfileModal, handleCloseEditProfileModal } = useContext(ProfileContext)
  const { t } = useTranslation()

  return (
    <Modal
      open={openEditProfileModal ? openEditProfileModal : false}
      onClose={handleCloseEditProfileModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20  center_abs_x_y edit_profile br10 modal grid jcs aic g30`}>
        <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant={"h4"} className={`tac`}>{t("forms.edit_profile.title")}</Typography>
        <Forms type={"edit_profile"} />
      </Box>
    </Modal>

  );
}

export default EditProfileModal