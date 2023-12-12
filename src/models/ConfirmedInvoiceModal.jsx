import { DashboardContext } from '@/context/DashboardContext';
import {Modal , Box , Typography} from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";


const ConfirmedInvoiceModal =()=> {
  const {openConfirmedInvoiceModal,handleCloseConfirmedInvoiceModal} = useContext(DashboardContext)
  const {t} = useTranslation()

  return (
      <Modal
        open={openConfirmedInvoiceModal}
        onClose={handleCloseConfirmedInvoiceModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`pad20 center_abs_x_y br10 modal grid jcs aic g30`}>
          <Typography sx={{color:(theme)=>theme.palette.primary.main}} variant={"h4"} className={`tac`}>{t("dashboard.confirmed_invoice.title")}</Typography>
          
        </Box>
      </Modal>
  );
}

export default ConfirmedInvoiceModal