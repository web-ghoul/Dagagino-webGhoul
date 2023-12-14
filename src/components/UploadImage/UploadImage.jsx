import { UploadImageContext } from "@/context/UploadImageContext";
import { handleAlert } from "@/functions/handleAlert";
import { Box } from "@mui/material"
import axios from "axios";
import { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useTranslation } from "react-i18next";
import LoadUploadingImage from "../LoadUploadingImage/LoadUploadingImage";

const fileTypes = ["JPG", "PNG", "GIF", "jpeg"];

const UploadImage = ({ type }) => {
  const { t } = useTranslation()
  const { setAvatarForRegister, setAvatarForEdit, loadingUploading, setLoadingUploading, setAvatarForChange, setProductImageForEdit } = useContext(UploadImageContext)
  const handleChange = async (file) => {
    const formData = new FormData()
    formData.append("image", file)
    setLoadingUploading(true)
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/Uploads/UploadUserImage`, formData).then((res) => {
      try {
        if (type === "register") {
          setAvatarForRegister(res.data.data.url);
        } else if (type === "change_avatar") {
          setAvatarForChange(res.data.data.url)
        } else if (type === "edit_profile") {
          setAvatarForEdit(res.data.data.url)
        } else if (type === "edit_product") {
          setProductImageForEdit(res.data.data.url)
        }
      } catch (err) {
        console.log(err)
        handleAlert(t("forms.fetch.public_error.message"), "error")
      }
    }).catch((err) => {
      console.log(err)
      handleAlert(t("forms.fetch.public_error.message"), "error")
    })
    setLoadingUploading(false)
  };
  return (
    <Box className={`flex jcs aic`}>
      <LoadUploadingImage loading={loadingUploading}>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      </LoadUploadingImage>
    </Box>
  )
}

export default UploadImage
