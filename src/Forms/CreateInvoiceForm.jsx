import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import LoadButton from "@/components/LoadButton/LoadButton";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import governorates from "../data/governorates.json"
import { ConfirmButton } from "@/muiCustomize/ConfirmButton";

const CreateInvoiceForm = ({ loading, formik }) => {
  const { t } = useTranslation()
  const [states, setStates] = useState([])
  const dispatch = useDispatch()
  const { userTypes } = useSelector((state) => state.userTypes)

  useEffect(() => {
    if (formik.values.governorate !== "") {
      const governorate = governorates.governorates.find((gov) => gov._id === formik.values.governorate)
      setStates(governorate.states)
    }
  }, [formik, dispatch])

  return (
    <Box className={`grid jcs aic g30`}>
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.address.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </Box>
      <Box className={`flex jcsb aic g30 sm_wrap`}>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.governorate.label")}</Typography>
          <PrimaryTextField
            id="governorate"
            name="governorate"
            select
            fullWidth
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            value={formik.values.governorate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.governorate && Boolean(formik.errors.governorate)}
            helperText={formik.touched.governorate && formik.errors.governorate}
          >
            <option key={-1} value={""}>
            </option>
            {
              governorates.governorates.map((gov, i) => (
                <option key={i} value={gov._id}>
                  {
                    t("lang") === "ar" ? gov.arName : gov.enName
                  }
                </option>
              ))
            }
          </PrimaryTextField>
        </Box>
        <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
          <Typography variant="h6">{t("forms.state.label")}</Typography>
          <PrimaryTextField
            id="state"
            name="state"
            select
            fullWidth
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          >
            <option key={-1} value={""}>
            </option>
            {
              states.map((state, i) => (
                <option key={i} value={state._id}>
                  {
                    t("lang") === "ar" ? state.arName : state.enName
                  }
                </option>
              ))
            }
          </PrimaryTextField>
        </Box>
      </Box>
      <LoadButton loading={loading}>
        <ConfirmButton type={"submit"}>{t("cart.confirm_order.button")}</ConfirmButton>
      </LoadButton>
    </Box>
  )
}

export default CreateInvoiceForm
