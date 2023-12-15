import { Box, Skeleton, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import styles from "./UserProduct.module.scss"
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryDetails } from "../../store/categoryDetailsSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { PrimaryButton } from "../../muiCustomize/PrimaryButton";
import { DeleteButton } from "../../muiCustomize/DeleteButton";
import { DashboardContext } from "../../context/DashboardContext";

const UserProductDetails = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { categoryDetails, isLoading } = useSelector((state) => state.categoryDetails)
  const { handleOpenDeleteUserProductModal, userProduct, handleOpenEditUserProductModal } = useContext(DashboardContext)

  useEffect(() => {
    dispatch(getCategoryDetails({ categoryId: userProduct.product.category }))
  }, [dispatch])

  return (
    <Box className={`${styles.user_product_details} grid jcs aic g30`}>
      <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant={"h4"} className={`tac`}>{t("dashboard.user_product.title")}</Typography>
      <Box className={`${styles.data_image_box} flex jcc aic`}>
        <LazyLoadImage src={userProduct.product.imageURL} alt={"userProduct"} />
      </Box>
      <Box className={`${styles.user_product_details_box} grid jcs aic g30`}>
        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.user_product_details.name")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? userProduct.product.arName : userProduct.product.enName}</Typography>
        </Box>

        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.user_product_details.description")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? userProduct.product.arDescription : userProduct.product.enDescription}</Typography>
        </Box>

        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.user_product_details.price")}</Typography>
          {
            userProduct.priceAfterDiscount === userProduct.price ?
              <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{userProduct.price}</Typography> :
              (<Box className={`flex jcc aic g5`}>
                <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">
                  <del>{userProduct.price}</del>
                </Typography>
                <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{userProduct.priceAfterDiscount}</Typography>
              </Box>)
          }
        </Box>

        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.user_product_details.quantity")}</Typography>
          <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{userProduct.stock}</Typography>
        </Box>

        <Box className={`${styles.data_box} pad20 br6 flex jcs aic flex_wrap g10`}>
          {
            isLoading ? (<>
              <Skeleton variant="text" sx={{ width: "100%" }} />
              <Skeleton variant="text" sx={{ width: "100%" }} />
            </>) : categoryDetails && (
              <>
                <Typography sx={{ color: (theme) => theme.palette.dark }} variant="h6">{t("dashboard.user_product_details.category")}</Typography>
                <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant="h6">{t("lang") === "ar" ? categoryDetails.arName : categoryDetails.enName}</Typography>
              </>
            )
          }
        </Box>
      </Box>
      <Box className={`flex jcsb aic g20`}>
        <PrimaryButton onClick={() => handleOpenEditUserProductModal(userProduct)} fullWidth className={`flex jcc aic g10`}>
          <Typography variant="h6">{t("dashbaord.user_product_details.edit_button")}</Typography>
          <EditRounded />
        </PrimaryButton>
        <DeleteButton onClick={() => handleOpenDeleteUserProductModal(userProduct._id)} fullWidth className={`flex jcc aic g10`}>
          <Typography variant="h6">{t("dashbaord.user_product_details.delete_button")}</Typography>
          <DeleteRounded />
        </DeleteButton>
      </Box>
    </Box>
  )
}

export default UserProductDetails