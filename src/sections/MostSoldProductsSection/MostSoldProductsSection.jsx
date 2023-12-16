"use client"
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SoldProduct from '@/components/SoldProduct/SoldProduct';
import LoadingSoldProduct from '@/components/SoldProduct/LoadingSoldProduct';
import { useEffect, useContext } from 'react';
import { getMostSoldProducts } from './../../store/mostSoldProductsSlice';
import { AnalysisReportContext } from '@/context/AnalysisReportContext';

const MostSoldProductsSection = () => {
  const { t } = useTranslation()
  const { products, isLoading } = useSelector((state) => state.mostSoldProducts)

  const dispatch = useDispatch()
  const { startDate, endDate } = useContext(AnalysisReportContext)

  useEffect(() => {
    dispatch(getMostSoldProducts({ values: { startDate, endDate } }))
  }, [dispatch])

  return (
    <Box className={`grid jcs aic g20`} >
      <SoldProduct def={true} />
      {
        !isLoading ? (<>
          {new Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((_, i) => (
            <LoadingSoldProduct key={i} />
          ))}
        </>) : products && products.length > 0 ? products.map((product, i) => (
          <SoldProduct key={i} product={product} number={i + 1} />
        )) : (
          <Typography variant='h5' sx={{ color: (theme) => theme.palette.gray }}>{t("analysis_report.bought_product.no_product_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default MostSoldProductsSection
