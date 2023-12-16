"use client"
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BoughtProduct from '@/components/BoughtProduct/BoughtProduct'
import LoadingBoughtProduct from '@/components/BoughtProduct/LoadingBoughtProduct'
import { useEffect, useContext } from 'react';
import { AnalysisReportContext } from '@/context/AnalysisReportContext';
import { getMostBoughtProducts } from '@/store/mostBoughtProductsSlice';

const MostBoughtProductsSection = () => {
  const { t } = useTranslation()
  const { products, isLoading } = useSelector((state) => state.mostBoughtProducts)

  const dispatch = useDispatch()
  const { startDate, endDate } = useContext(AnalysisReportContext)

  useEffect(() => {
    dispatch(getMostBoughtProducts({ values: { startDate, endDate } }))
  }, [dispatch, startDate, endDate])
  return (
    <Box className={`grid jcs aic g20`} >
      <BoughtProduct def={true} />
      {
        isLoading ? (<>
          {new Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((_, i) => (
            <LoadingBoughtProduct key={i} />
          ))}
        </>) : products && products.length > 0 ? products.map((product, i) => (
          <BoughtProduct key={i} product={product} number={i + 1} />
        )) : (
          <Typography variant='h5' sx={{ color: (theme) => theme.palette.gray }}>{t("analysis_report.bought_product.no_product_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default MostBoughtProductsSection
