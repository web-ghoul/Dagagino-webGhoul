"use client"
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getPendingSales } from '../../store/pendingSalesSlice';
import { useEffect } from "react"
import PendingSale from '../../components/PendingSale/PendingSale';
import LoadingPendingSale from '../../components/PendingSale/LoadingPendingSale';

const PendingSalesSection = () => {
  const { t } = useTranslation()
  const { pendingSales, isLoading } = useSelector((state) => state.pendingSales)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPendingSales())
  }, [dispatch])

  return (
    <Box className={`grid jcs aic g20`} >
      <PendingSale def={true} />
      {
        isLoading ? (<>
          {new Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((_, i) => (
            <LoadingPendingSale key={i} />
          ))}
        </>) : pendingSales && pendingSales.length > 0 ? pendingSales.map((sale, i) => (
          <PendingSale key={i} sale={sale} number={i + 1} />
        )) : (
          <Typography variant='h5' sx={{ color: (theme) => theme.palette.gray }}>{t("dashboard.pending_sales.no_sales_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default PendingSalesSection
