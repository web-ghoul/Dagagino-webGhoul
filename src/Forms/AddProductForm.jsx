import { Box, Typography } from "@mui/material"
import { PrimaryButton } from "@/muiCustomize/PrimaryButton"
import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { useTranslation } from "react-i18next";
import LoadButton from "../components/LoadButton/LoadButton";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { SecondaryButton } from "../muiCustomize/SecondaryButton";
import { DashboardContext } from "../context/DashboardContext";
import { getCategories } from "../store/categoriesSlice";
import UploadImage from "../components/UploadImage/UploadImage";

const AddProductForm = ({ loading, formik }) => {
  const { t } = useTranslation()
  const { handleToggleAddSystemProduct } = useContext(DashboardContext)
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <Box className={`grid jcs aic g30`}>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.product_image.label")}</Typography>
        <UploadImage type={"add_product"} />
      </Box>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.category.label")}</Typography>
        <PrimaryTextField
          id="category"
          name="category"
          select
          fullWidth
          SelectProps={{
            native: true,
          }}
          variant="outlined"
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
                {
                  t("lang") === "ar" ? cat.arName : cat.enName
                }
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
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.add_product.button.text")}</PrimaryButton>
      </LoadButton>
      <SecondaryButton onClick={handleToggleAddSystemProduct}>{t("forms.add_product.choose_product.button.text")}</SecondaryButton>
    </Box>
  )
}

export default AddProductForm
