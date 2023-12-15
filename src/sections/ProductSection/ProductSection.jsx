"use client"
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { getProduct } from '@/store/productSlice'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from "./ProductSection.module.scss"
import LoadingProductSection from '@/sections/ProductSection/LoadingProductSection'


const ProductSection = () => {
    const { id } = useParams()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { product, isLoading } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProduct({ id }))
    }, [dispatch, id])

    return (
        <PrimaryBox>
            <PrimaryContainer className={`grid jcs aic ${styles.product_section_contain}`}>
                {
                    isLoading ? (<LoadingProductSection />) : product ? (
                        <Box className={`grid jcsb aic g30 pad20 br10  ${styles.product}`}>
                            <Box className={`grid jcs ais ass g20`}>
                                <Box>
                                    <Typography variant="h5" sx={{ color: (theme) => theme.palette.primary.main }}>{t("lang") === "ar" ? product.arName : product.enName}</Typography>
                                    <Typography variant="h6">{t("lang") === "ar" ? product.arDescription : product.endDescription}</Typography>
                                </Box>
                                {/* <Box className={`flex jcs aife`}>
                                    <PrimaryButton>{t("product.add_cart_button")}</PrimaryButton>
                                </Box> */}
                            </Box>
                            <Box className={`flex jcc aic br6 ${styles.product_image_box}`}>
                                <LazyLoadImage src={product.imageURL} alt={"product"} />
                            </Box>
                        </Box>
                    ) : (
                        <Typography variant="h5" className={`tac`} sx={{ color: (theme) => theme.palette.gray }} >{t("product.not_found")}</Typography>
                    )
                }
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default ProductSection
