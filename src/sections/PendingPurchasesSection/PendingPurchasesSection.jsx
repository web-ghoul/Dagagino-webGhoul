"use client"
import { useDispatch, useSelector } from 'react-redux'
import { Typography , Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PendingPurchase from '@/components/PendingPurchase/PendingPurchase';
import LoadingPendingPurchase from '@/components/PendingPurchase/LoadingPendingPurchase';
import { useEffect } from 'react';
import { getPendingPurchases } from '../../store/pendingPurchasesSlice';


const PendingPurchasesSection = () => {
    const {t} = useTranslation()
    const {pendingPurchases, isLoading} = useSelector((state)=>state.pendingPurchases)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getPendingPurchases())
    },[dispatch])

    return (
      <Box className={`grid jcs aic g20`} >
        <PendingPurchase def={true} />
        {
          isLoading ? (<>
            {new Array(Math.floor(Math.random()*5 + 1)).fill(0).map((_,i)=>(
              <LoadingPendingPurchase key={i} />
            ))}
          </>):pendingPurchases && pendingPurchases.length > 0?pendingPurchases.map((purchase,i)=>(
            <PendingPurchase key={i} purchase={purchase} number={i+1} />
          )):(
            <Typography variant='h5' sx={{color:(theme)=>theme.palette.gray}}>{t("dashboard.pending_purchase.no_purchases_yet")}</Typography>
          )
        }
      </Box>
    )
}

export default PendingPurchasesSection
