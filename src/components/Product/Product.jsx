import { Box, Typography } from "@mui/material"
import styles from "./Product.module.scss"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import Link from "next/link"

const Product = ({product}) => {
  const {t} = useTranslation()
  const [name, setName] = useState(product.arName)
  const [description, setDescription] = useState(product.arDescription)
  useEffect(()=>{
    if(t("lang") === "en"){
      setName(product.enName)
      setDescription(product.enDescription)
    }else{
      setName(product.arName)
      setDescription(product.arDescription)
    }
  },[t , name , description , product])
  return (
    <Link href={`${process.env.NEXT_PUBLIC_PRODUCT_ROUTE}/${product._id}`} className={`${styles.product} grid jcs aic g30 pad20 br6`}>
      <Box className={`${styles.product_image_box} br4`} sx={{backgroundImage:`url('${product.imageURL}')`}} />
      <Box className={`grid jcs aic g10`}>
        <Typography sx={{color:(theme)=>theme.palette.primary.main}} variant="h5">{name}</Typography>
        <Typography variant="h6">{description}</Typography>
      </Box>
    </Link>
  )
}

export default Product
