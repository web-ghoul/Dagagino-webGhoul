import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box } from '@mui/material';
import { useContext } from 'react';
import UserProductDetails from '../components/UserProduct/UserProductDetails';


const UserProductModal = () => {
  const { userProduct, openUserProductModal, handleCloseUserProductModal } = useContext(DashboardContext)

  return (
    <Modal
      open={openUserProductModal}
      onClose={handleCloseUserProductModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 dashboard_option center_abs_x_y br10 modal grid jcs aic g30`}>
        <UserProductDetails product={userProduct} />
      </Box>
    </Modal>
  );
}

export default UserProductModal