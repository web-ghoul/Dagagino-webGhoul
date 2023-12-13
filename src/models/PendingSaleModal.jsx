import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box } from '@mui/material';
import { useContext } from 'react';
import PendingSaleDetails from '../components/PendingSale/PendingSaleDetails';


const PendingSaleModal = () => {
  const { openPendingSaleModal, handleClosePendingSaleModal } = useContext(DashboardContext)

  return (
    <Modal
      open={openPendingSaleModal}
      onClose={handleClosePendingSaleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 dashboard_option center_abs_x_y br10 modal grid jcs aic g30`}>
        <PendingSaleDetails />
      </Box>
    </Modal>
  );
}

export default PendingSaleModal