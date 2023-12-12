import {  useContext } from "react";
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../muiCustomize/PrimaryButton";
import  UploadImage  from "../components/UploadImage/UploadImage";
import LoadButton from "../components/LoadButton/LoadButton";
import { UploadImageContext } from "@/context/UploadImageContext";

const ChangeAvatarForm = ({loading,formik}) => {
  const {avatarForChange } = useContext(UploadImageContext)
  const {t} = useTranslation()
  return (
    <Box className={`grid jcs aic g30 change_avatar_box`} >
      <Box className={`flex jcc aic change_avatar_box`}>
        <Box sx={{backgroundImage:`url('${avatarForChange ? avatarForChange : formik.values.imageURL}')`}} className={"change_avatar"}/>
      </Box>
      <UploadImage type={"change_avatar"}/>
      <LoadButton loading={loading}>
        <PrimaryButton type={"submit"}>{t("forms.change_avatar.button.text")}</PrimaryButton>
      </LoadButton>
    </Box>
  )
}

export default ChangeAvatarForm
