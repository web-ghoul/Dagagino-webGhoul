"use client"
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BoughtFrom from '@/components/BoughtFrom/BoughtFrom';
import LoadingBoughtFrom from '@/components/BoughtFrom/LoadingBoughtFrom';
import { useEffect, useContext } from 'react';
import { getMostBoughtFrom } from './../../store/mostBoughtFromSlice';
import { AnalysisReportContext } from '@/context/AnalysisReportContext';

const MostBoughtFromSection = () => {
  const { t } = useTranslation()
  const { sellers, isLoading } = useSelector((state) => state.mostBoughtFrom)

  const dispatch = useDispatch()
  const { startDate, endDate } = useContext(AnalysisReportContext)

  useEffect(() => {
    dispatch(getMostBoughtFrom({ values: { startDate, endDate } }))
  }, [dispatch, startDate, endDate])
  return (
    <Box className={`grid jcs aic g20`} >
      <BoughtFrom def={true} />
      {
        !isLoading ? (<>
          {new Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((_, i) => (
            <LoadingBoughtFrom key={i} />
          ))}
        </>) : sellers && sellers.length > 0 ? sellers.map((seller, i) => (
          <BoughtFrom key={i} seller={seller} number={i + 1} />
        )) : (
          <Typography variant='h5' sx={{ color: (theme) => theme.palette.gray }}>{t("analysis_report.purchased_clients.no_client_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default MostBoughtFromSection
