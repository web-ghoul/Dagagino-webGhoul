"use client"
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PurchasedClient from '@/components/PurchasedClient/PurchasedClient'
import LoadingPurchasedClient from '@/components/PurchasedClient/LoadingPurchasedClient'
import { useEffect, useContext } from 'react';
import { getMostPurchasedClients } from './../../store/mostPurchasedClientsSlice';
import { AnalysisReportContext } from '@/context/AnalysisReportContext';

const MostPurchasedClientsSection = () => {
  const { t } = useTranslation()
  const { clients, isLoading } = useSelector((state) => state.mostPurchasedClients)
  const dispatch = useDispatch()
  const { startDate, endDate } = useContext(AnalysisReportContext)

  useEffect(() => {
    dispatch(getMostPurchasedClients({ values: { startDate, endDate } }))
  }, [dispatch, startDate, endDate])

  return (
    <Box className={`grid jcs aic g20`} >
      <PurchasedClient def={true} />
      {
        !isLoading ? (<>
          {new Array(Math.floor(Math.random() * 5 + 1)).fill(0).map((_, i) => (
            <LoadingPurchasedClient key={i} />
          ))}
        </>) : clients && clients.length > 0 ? clients.map((client, i) => (
          <PurchasedClient key={i} client={client} number={i + 1} />
        )) : (
          <Typography variant='h5' sx={{ color: (theme) => theme.palette.gray }}>{t("analysis_report.purchased_clients.no_client_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default MostPurchasedClientsSection
