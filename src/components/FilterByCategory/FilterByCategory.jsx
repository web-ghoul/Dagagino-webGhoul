import { Box, Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../store/categoriesSlice"
import { PrimaryTextField } from "../../muiCustomize/PrimaryTextField"
import { useTranslation } from "react-i18next"
import { getProducts } from "../../store/productsSlice"

const FilterByCategory = () => {
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleChange = (e) => {
    let val = e.target.value
    if (val === "") {
      dispatch(getProducts({ index: 0 }))
    } else {
      dispatch(getProducts({ categoryId: val }))
    }
  }
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <Box className={`flex jcs aic`}>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("filter_by_category.label")}</Typography>
        <PrimaryTextField
          id="categories"
          name="categories"
          select
          fullWidth
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          onChange={handleChange}
        >
          <option value={""}>
            {t("filter_by_category.all")}
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
    </Box>
  )
}

export default FilterByCategory