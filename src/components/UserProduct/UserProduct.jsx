import { Box, Typography, useMediaQuery } from "@mui/material"
import styles from "./UserProduct.module.scss"
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { DeleteButton } from '@/muiCustomize/DeleteButton'
import { VisibilityRounded, DeleteRounded } from "@mui/icons-material"
import { useContext } from "react"
import { DashboardContext } from "../../context/DashboardContext";

const UserProduct = ({ def, product, number }) => {
  const { t } = useTranslation()
  const { handleOpenUserProductModal, handleOpenDeleteUserProductModal } = useContext(DashboardContext)
  const mdSize = useMediaQuery("(max-width:992px)")
  return def ? (
    <Box className={`${styles.default_box} ${styles.product_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${!def && styles.product_box_number}`}>#</Typography>

      <Typography variant={"h6"}>{t("dashboard.user_product.product_name")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.user_product.product_price")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.user_product.product_priceAfterDiscount")}</Typography>

      <Typography variant={"h6"}>{t("dashboard.user_product.quantity")}</Typography>
    </Box>
  ) : (
    <Box className={`${styles.product_box} br6 pad20 grid jcs aic`}>
      <Typography variant={"h6"} className={`${styles.product_box_number}`}>{"#" + number}</Typography>

      <Typography variant={"h6"}>{t("lang") === "ar" ? product.product.arName : product.product.enName}</Typography>

      <Typography variant={"h6"}>{product.price.toFixed(1)}</Typography>

      <Typography variant={"h6"}>{product.priceAfterDiscount.toFixed(1)}</Typography>

      <Typography variant={"h6"}>{product.stock}</Typography>

      <Box className={`flex flex_wrap jcc aic g20`}>
        <PrimaryButton onClick={() => handleOpenUserProductModal(product)} className={`flex jcc aic g10`}>
          <VisibilityRounded />
          {!mdSize && <Typography variant={"h6"}>{t("dashboard.view_product.button")}</Typography>}
        </PrimaryButton>
        <DeleteButton onClick={() => handleOpenDeleteUserProductModal(product._id)} className={`flex jcc aic g10`}>
          <DeleteRounded />
          {!mdSize && <Typography variant={"h6"}>{t("dashboard.delete_product.button")}</Typography>}
        </DeleteButton>
      </Box>
    </Box>
  )
}

export default UserProduct
