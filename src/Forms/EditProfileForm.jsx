import { PrimaryTextField } from "@/muiCustomize/PrimaryTextField"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import 'react-phone-input-2/lib/style.css'
import { PrimaryButton } from "@/muiCustomize/PrimaryButton";
import LoadButton from "@/components/LoadButton/LoadButton";
import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux"
import governorates from "../data/governorates.json"
import { getUserTypes } from "@/store/userTypesSlice";
import UploadImage from "@/components/UploadImage/UploadImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UploadImageContext } from "@/context/UploadImageContext";
import { DeleteButton } from "@/muiCustomize/DeleteButton";

const EditProfileForm = ({ loading, formik, type }) => {
  const { avatarForEdit, setAvatarForEdit } = useContext(UploadImageContext)
  const { t } = useTranslation()
  const [states, setStates] = useState([])
  const dispatch = useDispatch()
  const { userTypes } = useSelector((state) => state.userTypes)

  useEffect(() => {
    if (type === "client") {
      dispatch(getUserTypes())
    }
    if (formik.values.governorate !== "") {
      const governorate = governorates.governorates.find((gov) => gov._id === formik.values.governorate)
      setStates(governorate.states)
    }
  }, [formik, dispatch, type])

  return (
    <Box className={`grid jcs aic g30`}>
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
      <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
        <Typography variant="h6">{t("forms.email.label")}</Typography>
        <PrimaryTextField
          fullWidth
          variant="outlined"
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
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
      {
        type !== "client" ? (
          <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
            <Typography variant="h6">{t("forms.commercial_number.label")}</Typography>
            <PrimaryTextField
              fullWidth
              variant="outlined"
              type="text"
              id="commercialRegistrationNo"
              name="commercialRegistrationNo"
              value={formik.values.commercialRegistrationNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.commercialRegistrationNo && Boolean(formik.errors.commercialRegistrationNo)}
              helperText={formik.touched.commercialRegistrationNo && formik.errors.commercialRegistrationNo}
            />
          </Box>
        ) : (
          <Box className={`grid jcs aic g10`} sx={{ width: "100%" }}>
            <Typography variant="h6">{t("forms.client_type.label")}</Typography>
            <PrimaryTextField
              id="clientType"
              name="clientType"
              select
              fullWidth
              variant="outlined"
              SelectProps={{
                native: true,
              }}
              value={formik.values.clientType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.clientType && Boolean(formik.errors.clientType)}
              helperText={formik.touched.clientType && formik.errors.clientType}
            >
              <option key={-1} value={""}>
              </option>
              {
                userTypes && userTypes[2].subTypes.map((type, i) => (
                  <option key={i} value={type._id}>
                    {t("lang") === "ar" ? type.arName : type.enName}
                  </option>
                ))
              }
            </PrimaryTextField>
          </Box>
        )
      }
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
      <Box className={`grid jcs aic g20`}>
        <Typography variant={"h6"}>{t("forms.register.upload_avatar.label")}</Typography>
        {!avatarForEdit && <UploadImage type={"edit_profile"} />}
        {
          avatarForEdit &&
          (<Box className={`grid jcfs aic g20`}>
            <DeleteButton sx={{ width: "fit-content" }} onClick={() => setAvatarForEdit(null)}>Remove Avatar</DeleteButton>
            <Box className={`flex jcfs aic avatar`}>
              <LazyLoadImage src={avatarForEdit} className={`br6`} alt={"avatar"} />
            </Box>
          </Box>)
        }
      </Box>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.edit_profile.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default EditProfileForm
