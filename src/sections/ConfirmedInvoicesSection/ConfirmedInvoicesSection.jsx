"use client"
import { useSelector,useDispatch } from 'react-redux'
import { Typography , Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getConfirmedInvoices } from '../../store/confirmedInvoicesSlice';
import {useEffect} from "react"
import ConfirmedInvoice from '../../components/ConfirmedInvoice/ConfirmedInvoice';
import LoadingConfirmedInvoice from '../../components/ConfirmedInvoice/LoadingConfirmedInvoice';

const ConfirmedInvoicesSection = () => {
  const {t} = useTranslation()
  const {confirmedInvoices, isLoading} = useSelector((state)=>state.confirmedInvoices)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getConfirmedInvoices())
  },[dispatch])
  

  return (
    <Box className={`grid jcs aic g20`} >
      <ConfirmedInvoice def={true} />
      {
        isLoading ? (<>
          {new Array(Math.floor(Math.random()*5 + 1)).fill(0).map((_,i)=>(
            <LoadingConfirmedInvoice key={i} />
          ))}
        </>):confirmedInvoices && confirmedInvoices.length > 0 ? confirmedInvoices.map((invoice,i)=>(
          <ConfirmedInvoice key={i} invoice={invoice} number={i+1} />
        )):(
          <Typography variant='h5' sx={{color:(theme)=>theme.palette.gray}}>{t("dashboard.confirmed_invoices.no_invoices_yet")}</Typography>
        )
      }
    </Box>
  )
}

export default ConfirmedInvoicesSection
