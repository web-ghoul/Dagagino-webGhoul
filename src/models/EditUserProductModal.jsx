import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box } from '@mui/material';
import { useContext } from 'react';
import Forms from '../Forms/Forms';


const EditUserProductModal = () => {
  const { openEditUserProductModal, handleCloseEditUserProductModal } = useContext(DashboardContext)

  return (
    <Modal
      open={openEditUserProductModal}
      onClose={handleCloseEditUserProductModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20  center_abs_x_y br10 modal grid jcs aic g30`}>
        <Forms type={"edit_user_product"} />
      </Box>
    </Modal>
  );
}

export default EditUserProductModal