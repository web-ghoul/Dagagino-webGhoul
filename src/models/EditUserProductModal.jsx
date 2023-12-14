import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import Forms from '../Forms/Forms';
import { useTranslation } from 'react-i18next';


const EditUserProductModal = () => {
  const { openEditUserProductModal, handleCloseEditUserProductModal } = useContext(DashboardContext)
  const { t } = useTranslation()
  return (
    <Modal
      open={openEditUserProductModal}
      onClose={handleCloseEditUserProductModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 edit_user_product center_abs_x_y br10 modal grid jcs aic g30`}>
        <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant={"h4"} className={`tac`}>{t("forms.edit_user_product.title")}</Typography>
        <Forms type={"edit_user_product"} />
      </Box>
    </Modal>
  );
}

export default EditUserProductModal