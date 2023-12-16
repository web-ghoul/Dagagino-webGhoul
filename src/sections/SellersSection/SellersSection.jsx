"use client"
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from "./SellersSection.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getSellers } from '@/store/sellersSlice';
import { SignalCellularConnectedNoInternet0BarSharp } from '@mui/icons-material';
import Seller from '@/components/Seller/Seller';
import LoadingSellersSection from "./LoadingSellersSection"

const SellersSection = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { sellers, isLoading, type } = useSelector((state) => state.sellers)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSellers({ id }))
    }, [dispatch, id])

    return (
        <PrimaryBox>
            <PrimaryContainer className={`${styles.sellers_section_contain} grid jcs aic g30 `}>
                <Typography variant={"h4"} >{t("sellers.title")}</Typography>
                <Box className={`grid jcs aic g30`}>
                    {
                        isLoading ? (<LoadingSellersSection />) : sellers && sellers.length > 0 ? (
                            <Box className={`grid jcs aifs g30 ${styles.sellers}`}>
                                {
                                    sellers.map((seller, i) => (
                                        <Seller seller={seller} type={type} key={i} />
                                    ))
                                }
                            </Box>
                        ) : (
                            <Typography variant={"h5"} sx={{ color: (theme) => theme.palette.gray }} >{t("sellers.no_sellers_yet")}</Typography>
                        )
                    }
                </Box>
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default SellersSection
