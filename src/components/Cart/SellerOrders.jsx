import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import styles from "./Cart.module.scss"
import { useTranslation } from "react-i18next"
import Order from "./Order"
import { useEffect, useState } from "react"
import Forms from "../../Forms/Forms"

const SellerOrders = ({ sellerOrders, index }) => {
  const { t } = useTranslation()
  const [priceVals, setPriceVals] = useState([])
  const [priceAfterDiscountVals, setPriceAfterDiscountVals] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0)

  useEffect(() => {
    let v1 = []
    let v2 = []
    new Array(sellerOrders.products.length).fill(0).map(() => {
      v1.push(0)
      v2.push(0)
    })
    setPriceVals(v1)
    setPriceAfterDiscountVals(v2)
  }, [])
  return (
    <Accordion className={`${styles.seller_orders} br10 pad10`}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box className={`flex jcs aic g20`}>
          <Typography variant="h6" sx={{ color: (theme) => theme.palette.primary.main }}>{t("lang") === "ar" ? sellerOrders.user.arName : sellerOrders.user.enName}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails className={`grid jcs aic g30`}>
        <Box className={`${styles.orders} grid jcs aifs g30`}>
          {
            sellerOrders.products.map((product, i) =>
            (
              <Order setTotalValue={setTotalValue} setTotalAfterDiscount={setTotalAfterDiscount} setPriceVals={setPriceVals} setPriceAfterDiscountVals={setPriceAfterDiscountVals} priceAfterDiscountVals={priceAfterDiscountVals} priceVals={priceVals} number={i + 1} product={product} key={i} />
            )
            )
          }
        </Box>
        <Box className={`grid jcs aic g10`}>
          <Box className={`flex jcs aic g10 flex_wrap`}>
            <Typography variant="h5">{t("cart.total_price")}</Typography>
            <Typography variant="h5" sx={{ color: (theme) => { totalValue === totalAfterDiscount ? theme.palette.primary.main : theme.palette.dark } }}>{totalValue.toFixed(1)} {t("lang") === "ar" ? "ر.عُ" : "OMR"}</Typography>
          </Box>
          {
            totalValue !== totalAfterDiscount && (
              <Box className={`flex jcs aic g10 flex_wrap`}>
                <Typography variant="h5">{t("cart.total_priceAfterDiscount")}</Typography>
                <Typography variant="h5" sx={{ color: (theme) => theme.palette.primary.main }}>{totalAfterDiscount.toFixed(1)} {t("lang") === "ar" ? "ر.عُ" : "OMR"}</Typography>
              </Box>
            )
          }
        </Box>
        <Forms type={"create_invoice"} createInvoiceData={{ priceVals, index, totalValue, totalAfterDiscount }} />
      </AccordionDetails>
    </Accordion>
  )
}

export default SellerOrders