import { Box } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../store/categoriesSlice"
import { PrimaryTextField } from "../../muiCustomize/PrimaryTextField"
import { useTranslation } from "react-i18next"
import { filterByCategory, getProducts } from "../../store/productsSlice"

const FilterByCategory = () => {
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <Box className={`flex jcs aic`}>
      <PrimaryTextField
        id="categories"
        name="categories"
        select
        fullWidth
        SelectProps={{
          native: true,
        }}
        variant="outlined"
        label={t("filter_by_category.label")}
        onChange={async (e) => { await dispatch(getProducts({ index: 0 })); dispatch(filterByCategory(e.target.value)) }}
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
  )
}

export default FilterByCategory