import { Box } from "@mui/material"
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
      <UploadImage />
      <PrimaryTextField
        id="category"
        name="category"
        select
        fullWidth
        SelectProps={{
          native: true,
        }}
        variant="outlined"
        label={t("forms.category.label")}
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
      <Box className={`flex jcsb aic g30`}>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="arName"
          name="arName"
          label={t("forms.arabic_name.label")}
          value={formik.values.arName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.arName && Boolean(formik.errors.arName)}
          helperText={formik.touched.arName && formik.errors.arName}
        />
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="enName"
          name="enName"
          label={t("forms.english_name.label")}
          value={formik.values.enName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.enName && Boolean(formik.errors.enName)}
          helperText={formik.touched.enName && formik.errors.enName}
        />
      </Box>
      <Box className={`flex jcsb aic g30`}>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="arDescription"
          name="arDescription"
          label={t("forms.arabic_description.label")}
          value={formik.values.arDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.arDescription && Boolean(formik.errors.arDescription)}
          helperText={formik.touched.arDescription && formik.errors.arDescription}
        />
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="enDescription"
          name="enDescription"
          label={t("forms.english_description.label")}
          value={formik.values.enDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.enDescription && Boolean(formik.errors.enDescription)}
          helperText={formik.touched.enDescription && formik.errors.enDescription}
        />
      </Box>
      <Box className={`flex jcsb aic g30`}>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="price"
          name="price"
          label={t("forms.price.label")}
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="stock"
          name="stock"
          label={t("forms.quantity.label")}
          value={formik.values.stock}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.stock && Boolean(formik.errors.stock)}
          helperText={formik.touched.stock && formik.errors.stock}
        />
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.add_product.button.text")}</PrimaryButton>
      </LoadButton>
      <SecondaryButton onClick={handleToggleAddSystemProduct}>{t("forms.add_product.choose_product.button.text")}</SecondaryButton>
    </Box>
  )
}

export default AddProductForm
