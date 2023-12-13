import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box } from '@mui/material';
import { useContext } from 'react';
import ConfirmedPurchaseDetails from '../components/ConfirmedPurchase/ConfirmedPurchaseDetails';


const ConfirmedPurchaseModal = () => {
  const { openConfirmedPurchaseModal, handleCloseConfirmedPurchaseModal } = useContext(DashboardContext)

  return (
    <Modal
      open={openConfirmedPurchaseModal}
      onClose={handleCloseConfirmedPurchaseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 dashboard_option center_abs_x_y br10 modal grid jcs aic g30`}>
        <ConfirmedPurchaseDetails />
      </Box>
    </Modal>
  );
}

export default ConfirmedPurchaseModal