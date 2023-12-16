import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box } from '@mui/material';
import { useContext } from 'react';
import Forms from '../Forms/Forms';


const ConfirmPendingSaleModal = () => {
  const { openConfirmPendingSaleModal, handleCloseConfirmPendingSaleModal } = useContext(DashboardContext)

  return (
    <Modal
      open={openConfirmPendingSaleModal ? openConfirmPendingSaleModal : false}
      onClose={handleCloseConfirmPendingSaleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 dashboard_option center_abs_x_y br10 modal grid jcs aic g30`}>
        <Forms type={"confirm_pending_sale"} />
      </Box>
    </Modal>
  );
}

export default ConfirmPendingSaleModal