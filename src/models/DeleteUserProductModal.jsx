import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box } from '@mui/material';
import { useContext } from 'react';
import Forms from '../Forms/Forms';


const DeleteUserProductModal = () => {
  const { openDeleteUserProductModal, handleCloseDeleteUserProductModal } = useContext(DashboardContext)
  return (
    <Modal
      open={openDeleteUserProductModal ? openDeleteUserProductModal : false}
      onClose={handleCloseDeleteUserProductModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 delete center_abs_x_y br10 modal grid jcs aic g30`}>
        <Forms type={"delete_user_product"} />
      </Box>
    </Modal>
  );
}

export default DeleteUserProductModal