import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import PendingPurchaseDetails from '../components/PendingPurchase/PendingPurchaseDetails';


const PendingPurchaseModal = () => {
  const { openPendingPurchaseModal, handleClosePendingPurchaseModal } = useContext(DashboardContext)

  return (
    <Modal
      open={openPendingPurchaseModal}
      onClose={handleClosePendingPurchaseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 dashboard_option center_abs_x_y br10 modal grid jcs aic g30`}>
        <PendingPurchaseDetails />
      </Box>
    </Modal>
  );
}

export default PendingPurchaseModal