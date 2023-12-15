import { Box, Typography } from '@mui/material';
import styles from "./Seller.module.scss"
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import LoadButton from '../LoadButton/LoadButton';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCartOrders } from '../../store/cartOrdersSlice';
import { handleAlert } from "@/functions/handleAlert";
import { CartContext } from '../../context/CartContext';

const Seller = ({ seller, type }) => {
    const { t } = useTranslation()
    const { id } = useParams()
    const [productData, setProductData] = useState(null)
    const [loading, setLoding] = useState(false)
    const { token, userId } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { handleOpenCart } = useContext(CartContext)

    const handleAddToCart = async () => {
        setLoding(true)
        let proId;
        if (seller.hasOwnProperty("farm")) {
            seller.farm.products.map((pro, i) => {
                if (pro.product._id === id) {
                    proId = pro._id
                }
            })
        } else if (seller.hasOwnProperty("supplier")) {
            seller.supplier.products.map((pro, i) => {
                if (pro.product._id === id) {
                    proId = pro._id
                }
            })
        }
        const body = { "userID": userId, "productID": proId }
        await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/Cart/SelectProduct`, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            try {
                handleAlert(t("seller.add_to_cart_successfully.message"), "success")
                dispatch(getCartOrders())
                handleOpenCart()
            } catch (err) {
                console.log(err)
                handleAlert(t("forms.fetch.public_error.message"), "error")
            }
        }).catch((err) => {
            try {
                handleAlert(t("lang") === "ar" ? err.response.data.arError : err.response.data.enError, "error")
            } catch (error) {
                console.log(error)
                handleAlert(t("forms.fetch.public.error"), "error")
            }
        })
        setLoding(false)
    }

    useEffect(() => {
        let products;
        if (type === "farm") {
            products = seller.farm.products
        } else {
            products = seller.supplier.products
        }
        products.map((product) => {
            if (product.product._id === id) {
                setProductData(product)
            }
        })
    }, [productData, seller, type, id])

    return (
        <Box className={`grid jcs aic g10 br10 pad10 ${styles.seller}`}>
            <Box sx={{ backgroundImage: `url('${seller.imageURL}')` }} className={`${styles.seller_image} br4`} />
            <Box className={`grid jcs aic pad10 g20`}>
                <Box className={`flex flex_wrap jcsb aifs g10`}>
                    <Typography variant={"h6"} >{t("lang") === "ar" ? seller.arName : seller.enName}</Typography>

                    <LoadButton loading={loading}>
                        <PrimaryButton onClick={handleAddToCart}>{t("seller.add_to_cart.button")}</PrimaryButton>
                    </LoadButton>
                </Box>
                <Box className={`flex flex_wrap jcsb aic g10 pad10`}>
                    <Box className={`grid jcc aic g5`}>
                        <Typography className={`fw500`} variant={"h6"} sx={{ color: (theme) => theme.palette.gray }}>{t("seller.quantity")}</Typography>
                        <Typography variant={"h6"}>{`${productData && productData.stock} ${t("seller.quantity.piece")}`}</Typography>
                    </Box>
                    <Box className={`grid jcc aic g5`}>
                        <Typography className={`fw500`} sx={{ color: (theme) => theme.palette.gray }} variant={"h6"}>{t("seller.price")}</Typography>
                        <Box className={`flex flex_wrap jcc aic g10`}>
                            <Typography variant={"h6"}>{productData ? productData.priceAfterDiscount !== productData.price ? (<del>{productData.price}</del>) : productData.price : ""}</Typography>
                            <Typography sx={{ color: (theme) => theme.palette.primary.main }} variant={"h6"}>{productData && productData.priceAfterDiscount !== productData.price && productData.priceAfterDiscount}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Seller
