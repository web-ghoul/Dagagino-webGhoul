import { Box, Drawer, Typography, useMediaQuery } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import styles from "./Cart.module.scss"
import LogoImage from "../LogoImage/LogoImage"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import SellerOrders from "./SellerOrders"
import { Close, ShoppingBagRounded } from "@mui/icons-material"
import { PrimaryIconButton } from "../../muiCustomize/PrimaryIconButton"
import Forms from "../../Forms/Forms"

const Cart = () => {
  const { openCart, handleCloseCart } = useContext(CartContext)
  const { t } = useTranslation()
  const { cartOrders, isLoading } = useSelector((state) => state.cartOrders)
  const smSize = useMediaQuery("(max-width:768px)")

  return (
    <Drawer
      anchor={t("lang") === "ar" ? "right" : "left"}
      open={openCart}
      onClose={handleCloseCart}
      sx={{ width: "200px", height: "100%" }}
    >
      <Box className={`${styles.cart} grid jcs aic g0 acfs pad20`}>
        {
          smSize && (
            <PrimaryIconButton onClick={handleCloseCart} className={`${styles.cart_close_button} absolute flex jcc aic`}>
              <Close />
            </PrimaryIconButton>
          )
        }
        <Box className={`flex jcc aic ${styles.logo}`}>
          <LogoImage />
        </Box>
        <Box className={`${styles.cart_box} grid jcs aic g30 pad20`}>
          <Box className={`${styles.cart_box_title} flex jcc aic g10`}>
            <Typography className={`tac`} variant="h4" sx={{ color: (theme) => theme.palette.primary.main }}>
              {t("cart.my_orders.title")}</Typography>
            <ShoppingBagRounded sx={{ color: (theme) => theme.palette.primary.main }} />
          </Box>
          {
            isLoading ? (<></>) : cartOrders && cartOrders.length > 0 ? (
              <>
                <Box className={`${styles.cart_orders}  grid jcs aic g30`}>
                  {cartOrders.map((sellerOrders, i) => (
                    <SellerOrders key={i} sellerOrders={sellerOrders} index={i} />
                  ))}
                </Box>
                <Forms type={"clear_cart"} />
              </>
            ) : (
              <Box className={`flex jcc aic`}>
                <Typography variant="h4" sx={{ color: (theme) => theme.palette.gray }}>{t("cart.no_orders_exist.text")}</Typography>
              </Box>
            )
          }
        </Box>
      </Box>
    </Drawer>
  )
}

export default Cart