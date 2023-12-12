import { Box, Typography } from '@mui/material'
import styles from "./ProfileDataBox.module.scss"
import { useTranslation } from 'react-i18next'
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { ProfileContext } from '@/context/ProfileContext'
import { useContext ,useState,useEffect} from 'react'
import DataBox from './DataBox'
import governorates from "../../data/governorates.json"
import { getGovAndStateNames } from '../../functions/getGovAndStateNames'

const govs = governorates.governorates

const ProfileDataBox = ({editable, data}) => {
  const { t } = useTranslation()
  const {arName, enName, arDescription , enDescription,email,governorate, state,address , client , commercialRegistrationNo} = data
  const {handleOpenEditProfileModal} = useContext(ProfileContext)
  const [govName , setGovName] = useState("")
  const [stateName , setStateName] = useState("")

  useEffect(()=>{
    const d = getGovAndStateNames(governorate,state,t("lang"))
    setGovName(d.governorate)
    setStateName(d.state)
  },[governorate, state])

  return (
    <Box className={`grid jcs aic g30 ${styles.profile}`}>
      <Box className={`${styles.profile_box} flex jcfs flex_wrap aic g30 pad20 br10`}>
        <DataBox data={t("lang") === "ar" ? arName : enName} title={t("profile.name")}/>
        <DataBox data={t("lang") === "ar" ? arDescription : enDescription} title={t("profile.description")}/>  
        <DataBox data={email} title={t("profile.email")}/>  
        <DataBox data={address} title={t("profile.address")}/>    
        <DataBox data={govName} title={t("profile.governorate")}/>    
        <DataBox data={stateName} title={t("profile.state")}/>    
        {client &&
          (
            <DataBox data={t("lang") === "ar" ? client.clientType.arName : client.clientType.enName} title={t("profile.clientType")}/>    
          )
        }
        {commercialRegistrationNo &&
          (
            <DataBox data={commercialRegistrationNo} title={t("profile.commercialRegistrationNo")}/>    
          )
        }
      </Box>
      {editable && (
        <PrimaryButton onClick={()=>{handleOpenEditProfileModal(data)}} sx={{width:"fit-content"}}>{t("profile.edit_profile.button")}</PrimaryButton>
      )}
    </Box>
  )
}

export default ProfileDataBox
