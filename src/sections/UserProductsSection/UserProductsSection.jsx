"use client"
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UserProduct from '../../components/UserProduct/UserProduct';
import LoadingUserProduct from './../../components/UserProduct/LoadingUserProduct';
import { getUserProducts } from '../../store/userProductsSlice';
import { useEffect } from "react"

const UserProductsSection = () => {
  const { t } = useTranslation()
  const { userProducts, isLoading } = useSelector((state) => state.userProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserProducts())
  }, [dispatch])

  return (
    <Box className={`grid jcs aic g20`} >
      <UserProduct def={true} />
      {
        isLoading ? (<>
          {new Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((_, i) => (
            <LoadingUserProduct key={i} />
          ))}
        </>) : userProducts && userProducts.length > 0 ? userProducts.map((product, i) => (
          <UserProduct key={i} product={product} number={i + 1} />
        )) : (
          <Typography variant='h5' sx={{ color: (theme) => theme.palette.gray }}>{t("dashboard.user_products.no_product_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default UserProductsSection
