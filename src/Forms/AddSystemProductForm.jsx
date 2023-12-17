import { Box, Typography } from "@mui/material"
import { PrimaryButton } from "@/muiCustomize/PrimaryButton"
import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { useTranslation } from "react-i18next";
import LoadButton from "../components/LoadButton/LoadButton";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { getSystemProducts } from "../store/systemProductsSlice";
import { SecondaryButton } from "../muiCustomize/SecondaryButton";
import { DashboardContext } from "../context/DashboardContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AddSystemProductForm = ({ loading, formik }) => {
  const { t } = useTranslation()
  const { handleToggleAddSystemProduct } = useContext(DashboardContext)
  const [product, setProduct] = useState(null)
  const { systemProducts } = useSelector((state) => state.systemProducts)
  const dispatch = useDispatch()
  const handleChooseSystemProduct = (data) => {
    setProduct(data)
  }
  useEffect(() => {
    dispatch(getSystemProducts({ index: 0 }))
  }, [dispatch])

  useEffect(() => {
    if (systemProducts) {
      handleChooseSystemProduct(systemProducts[formik.values.systemProduct])
    }
  }, [formik, systemProducts])

  return (
    <Box className={`grid jcs aic g30`}>
      {
        product && (
          <Box className={`flex jcc aic product_image_box`}>
            <LazyLoadImage src={product.imageURL} alt={"product"} />
          </Box>
        )
      }
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.systemProduct.label")}</Typography>
        <PrimaryTextField
          id="systemProduct"
          name="systemProduct"
          select
          fullWidth
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          value={formik.values.systemProduct}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.systemProduct && Boolean(formik.errors.systemProduct)}
          helperText={formik.touched.systemProduct && formik.errors.systemProduct}
        >
          <option key={-1} value={""}>
          </option>
          {
            systemProducts && systemProducts.map((pro, i) => (
              <option key={i} value={i}>
                {
                  t("lang") === "ar" ? pro.arName : pro.enName
                }
              </option>
            ))
          }
        </PrimaryTextField>
      </Box>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.quantity.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="stock"
          name="stock"
          value={formik.values.stock}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.stock && Boolean(formik.errors.stock)}
          helperText={formik.touched.stock && formik.errors.stock}
        />
      </Box>
      <Box className={`flex jcsb aic g30 sm_wrap`}>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.price.label")}</Typography>
          <PrimaryTextField
            fullWidth
            variant="outlined"
            type="text"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Box>
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.add_product.button.text")}</PrimaryButton>
      </LoadButton>
      <SecondaryButton onClick={handleToggleAddSystemProduct}>{t("forms.add_product.add_your_product.button.text")}</SecondaryButton>
    </Box>
  )
}

export default AddSystemProductForm
