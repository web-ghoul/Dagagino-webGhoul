"use client"
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ConfirmedPurchase from '@/components/ConfirmedPurchase/ConfirmedPurchase';
import LoadingConfirmedPurchase from '@/components/ConfirmedPurchase/LoadingConfirmedPurchase';
import { useEffect } from 'react';
import { getConfirmedPurchases } from '../../store/confirmedPurchasesSlice';


const ConfirmedPurchasesSection = () => {
  const { t } = useTranslation()
  const { confirmedPurchases, isLoading } = useSelector((state) => state.confirmedPurchases)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConfirmedPurchases())
  }, [dispatch])

  return (
    <Box className={`grid jcs aic g20`} >
      <ConfirmedPurchase def={true} />
      {
        isLoading ? (<>
          {new Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((_, i) => (
            <LoadingConfirmedPurchase key={i} />
          ))}
        </>) : confirmedPurchases && confirmedPurchases.length > 0 ? confirmedPurchases.map((purchase, i) => (
          <ConfirmedPurchase key={i} purchase={purchase} number={i + 1} />
        )) : (
          <Typography variant='h5' sx={{ color: (theme) => theme.palette.gray }}>{t("dashboard.confirmed_purchases.no_purchases_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default ConfirmedPurchasesSection
