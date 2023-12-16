import React, { useEffect, useState } from 'react'
import styles from "./Cart.module.scss"
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { PrimaryTextField } from '../../muiCustomize/PrimaryTextField'
import Forms from '../../Forms/Forms'

const Order = ({ priceVals, setPriceVals, priceAfterDiscountVals, setTotalValue, setPriceAfterDiscountVals, setTotalAfterDiscount, product, number }) => {
  const { t } = useTranslation()
  const [val, setVal] = useState(0)
  useEffect(() => {
    console.log(priceVals, priceAfterDiscountVals)
    let v1 = priceVals
    if (v1.length >= number) {
      v1[number - 1] = val * +product.price
    }
    setPriceVals(v1)
    console.log(priceVals, priceAfterDiscountVals)
    let v2 = priceAfterDiscountVals
    console.log(v2, product.priceAfterDiscount)
    if (v2.length >= number) {
      v2[number - 1] = val * +product.priceAfterDiscount
    }
    console.log(v2)
    setPriceAfterDiscountVals(v2)
    let total1 = 0;
    v1.map((val) => {
      total1 += val
    })
    setTotalValue(total1)
    let total2 = 0;
    v2.map((val) => {
      total2 += val
    })
    setTotalAfterDiscount(total2)
    console.log(priceVals, priceAfterDiscountVals)
  }, [val])
  return (
    <Box className={`${styles.order} br6 pad10 grid jcs aic g20`}>
      <Box className={`flex jcsb aic g30`}>
        <Typography variant='h6' sx={{ color: (theme) => theme.palette.primary.main }}>#{number}</Typography>
        <Typography variant='h6' sx={{ color: (theme) => theme.palette.primary.main }}>{(val * product.priceAfterDiscount).toFixed(1)} {t("lang") === "ar" ? "ر.عُ" : "OMR"}</Typography>
      </Box>
      <Box className={`${styles.order_box} grid jcs aic g20`}>
        <Box sx={{ backgroundImage: `url('${product.product.imageURL}')` }} className={`${styles.order_image} br4`} />
        <Box className={`grid jcs aic g20`}>
          <Box className={`${styles.order_data} grid jcs aic g10`}>
            <Box className={`flex jcs aic g5`}>
              <Typography variant='h6'>{t("lang") === "ar" ? product.product.arName : product.product.enName}</Typography>
              <Typography variant={"h6"} sx={{ color: (theme) => theme.palette.primary.main }}>-</Typography>
              <Typography variant='h6'>{t("lang") === "ar" ? product.product.arDescription : product.product.enDescription}</Typography>
            </Box>
            {product.priceAfterDiscount === product.price ?
              <Typography variant='h6' sx={{ color: (theme) => theme.palette.primary.main }}>{product.price.toFixed(1)} {t("lang") === "ar" ? "ر.عُ" : "OMR"}</Typography>
              : (
                <Box className={`flex jcs aic g10`}>
                  <Typography variant='h6'><del>{product.price.toFixed(1)}</del></Typography>
                  <Typography variant='h6' sx={{ color: (theme) => theme.palette.primary.main }}>{product.priceAfterDiscount.toFixed(1)} {t("lang") === "ar" ? "ر.عُ" : "OMR"}</Typography>
                </Box>
              )
            }
            <Box className={`flex jcs aic g10 flex_wrap`}>
              <Typography variant='h6'>{t("cart.avaliable_pieces")}</Typography>
              <Typography variant='h6' sx={{ color: (theme) => theme.palette.primary.main }}>{product.stock}</Typography>
            </Box>
          </Box>
          <Box className={`grid jcs aic g5`}>
            <Typography variant='h6'>{t("cart.set_quantity")}</Typography>
            <PrimaryTextField
              fullWidth
              variant="outlined"
              type="number"
              id="stock"
              name="stock"
              value={val}
              onChange={(e) => setVal(+e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <Forms type={"remove_product_from_cart"} removeProductId={product._id} />
    </Box>
  )
}

export default Order