import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import styles from "./Cart.module.scss"

const SellerOrders = ({ sellerOrders }) => {
  return (
    <Accordion className={`${styles.seller_orders}`}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>

      </AccordionDetails>
    </Accordion>
  )
}

export default SellerOrders