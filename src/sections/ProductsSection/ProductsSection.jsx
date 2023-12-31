"use client"
import Product from "@/components/Product/Product"
import LoadButton from "@/components/LoadButton/LoadButton"
import { PrimaryBox } from "@/muiCustomize/PrimaryBox"
import { PrimaryContainer } from "@/muiCustomize/PrimaryContainer"
import { SecondaryButton } from "@/muiCustomize/SecondaryButton"
import { getProducts } from "@/store/productsSlice"
import { Box, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import LoadingProductsSection from "./LoadingProductsSection"
import styles from "./ProductsSection.module.scss"
import FilterByCategory from "../../components/FilterByCategory/FilterByCategory"
import { ProductsContext } from "../../context/ProductsContext"

const ProductsSection = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { isLoading, products, index, last } = useSelector((state) => state.products)
  const [loading, setLoading] = useState(false)
  const { category } = useContext(ProductsContext)

  const handleShowMore = async () => {
    setLoading(true)
    if (category) {
      await dispatch(getProducts({ categoryId: category, index: index + 10 }))
    } else {
      await dispatch(getProducts({ index: index + 10 }))
    }
    setLoading(false)
  }

  useEffect(() => {
    dispatch(getProducts({ index: 0 }))
  }, [dispatch])
  return (
    <PrimaryBox>
      <PrimaryContainer className={` grid jcs aic g50 acfs`}>
        <Typography variant="h4" className={`tac`}>{t("products.title")}</Typography>
        <FilterByCategory />
        <Box>
          {
            isLoading ? (<LoadingProductsSection />) : (products && products.length > 0) ? (
              <Box className={`${styles.products} grid jcs aifs g30`}>
                {
                  products.map((product, i) => (
                    <Product key={i} product={product} />
                  ))
                }
              </Box>
            )
              : (
                <Typography variant="h5" className={`tac`} sx={{ color: (theme) => theme.palette.gray }}>{t("products.no_products_yet")}</Typography>
              )
          }
        </Box>
        {!last && products && products.length >= 10 &&
          (
            <LoadButton loading={loading}>
              <SecondaryButton onClick={handleShowMore}>{t("products.load_more_button")}</SecondaryButton>
            </LoadButton>
          )}
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default ProductsSection
