import { Box, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../store/categoriesSlice'
import UploadImage from '../components/UploadImage/UploadImage'
import LoadButton from '../components/LoadButton/LoadButton'
import { PrimaryButton } from '../muiCustomize/PrimaryButton'
import { PrimaryTextField } from '../muiCustomize/PrimaryTextField'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { UploadImageContext } from '../context/UploadImageContext'
import { DashboardContext } from '../context/DashboardContext'

const EditUserProductForm = ({ loading, formik }) => {
  const { categories } = useSelector((state) => state.categories)
  const { productImageForEdit } = useContext(UploadImageContext)
  const { editUserProduct } = useContext(DashboardContext)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    if (productImageForEdit) {
      formik.values.imageURL = productImageForEdit
    }
  }, [productImageForEdit])
  return (
    <Box className={`grid jcs aic g30`}>
      {!editUserProduct.product.systemProduct &&
        (
          <>
            <Box className={`grid jcs aic g10`}>
              <Typography>{t("forms.edit_user_product.edit_image.label")}</Typography>
              <UploadImage type={"edit_product"} />
              <Box className={`flex jcc aic product_image_box`}>
                <LazyLoadImage src={productImageForEdit ? productImageForEdit : formik.values.imageURL} alt={"product"} />
              </Box>
            </Box>
            <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
              <Typography variant="h6">{t("forms.category.label")}</Typography>
              <PrimaryTextField
                fullWidth
                variant="outlined"
                id="category"
                name="category"
                select
                SelectProps={{
                  native: true,
                }}
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
              >
                <option key={-1} value={""}>
                </option>
                {
                  categories && categories.map((cat, i) => (
                    <option key={i} value={cat._id}>
                      {t("lang") === "ar" ? cat.arName : cat.enName}
                    </option>
                  ))
                }
              </PrimaryTextField>
            </Box>
            <Box className={`flex jcsb aic g30 sm_wrap`}>
              <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
                <Typography variant="h6">{t("forms.arabic_name.label")}</Typography>
                <PrimaryTextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  id="arName"
                  name="arName"
                  value={formik.values.arName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.arName && Boolean(formik.errors.arName)}
                  helperText={formik.touched.arName && formik.errors.arName}
                />
              </Box>
              <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
                <Typography variant="h6">{t("forms.english_name.label")}</Typography>
                <PrimaryTextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  id="enName"
                  name="enName"
                  value={formik.values.enName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.enName && Boolean(formik.errors.enName)}
                  helperText={formik.touched.enName && formik.errors.enName}
                />
              </Box>
            </Box>
            <Box className={`flex jcsb aic g30 md_wrap`}>
              <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
                <Typography variant="h6">{t("forms.arabic_description.label")}</Typography>
                <PrimaryTextField
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  type="text"
                  id="arDescription"
                  name="arDescription"
                  value={formik.values.arDescription}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.arDescription && Boolean(formik.errors.arDescription)}
                  helperText={formik.touched.arDescription && formik.errors.arDescription}
                />
              </Box>
              <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
                <Typography variant="h6">{t("forms.english_description.label")}</Typography>
                <PrimaryTextField
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  type="text"
                  id="enDescription"
                  name="enDescription"
                  value={formik.values.enDescription}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.enDescription && Boolean(formik.errors.enDescription)}
                  helperText={formik.touched.enDescription && formik.errors.enDescription}
                />
              </Box>
            </Box>
          </>
        )}
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
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.priceAfterDiscount.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="priceAfterDiscount"
          name="priceAfterDiscount"
          value={formik.values.priceAfterDiscount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.priceAfterDiscount && Boolean(formik.errors.priceAfterDiscount)}
          helperText={formik.touched.priceAfterDiscount && formik.errors.priceAfterDiscount}
        />
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
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.edit_product.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default EditUserProductForm