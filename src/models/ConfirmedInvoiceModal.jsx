import { DashboardContext } from '@/context/DashboardContext';
import { Modal, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import ConfirmedInvoiceDetails from '../components/ConfirmedInvoice/ConfirmedInvoiceDetails';


const ConfirmedInvoiceModal = () => {
  const { openConfirmedInvoiceModal, handleCloseConfirmedInvoiceModal } = useContext(DashboardContext)

  return (
    <Modal
      open={openConfirmedInvoiceModal}
      onClose={handleCloseConfirmedInvoiceModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`pad20 dashboard_option center_abs_x_y br10 modal grid jcs aic g30`}>
        <ConfirmedInvoiceDetails />
      </Box>
    </Modal>
  );
}

export default ConfirmedInvoiceModal