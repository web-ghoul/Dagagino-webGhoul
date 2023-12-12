"use client"
import { Box } from "@mui/material"
import LoadingProduct from "@/components/Product/LoadingProduct"
import styles from "./ProductsSection.module.scss"

const LoadingProductsSection = () => {
    return (
      <Box className={`${styles.products} grid jcs aic g30`}>
        {
            new Array(10).fill(0).map((_,i)=>(
                <LoadingProduct key={i}/>
            ))
        }
      </Box>
    )
  }
  
  export default LoadingProductsSection
  