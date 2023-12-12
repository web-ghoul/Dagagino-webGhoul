import { useState , createContext } from "react"

export const ProfileContext = createContext()

const ProfileProvider = ({children})=>{
  const [profileData , setProfileData] = useState(null)
    
    //Change Avatar
    const [openChangeAvatarModal , setOpenChangeAvatarModal] = useState(false)
    const handleOpenChangeAvatarModal=(data)=>{
      setProfileData(data)
      setOpenChangeAvatarModal(true)
    }
    const handleCloseChangeAvatarModal=()=>{
      setOpenChangeAvatarModal(false)
    }

    //View Avatar
    const [openViewAvatarModal , setOpenViewAvatarModal] = useState(false)
    const handleOpenViewAvatarModal=(data)=>{
      setOpenViewAvatarModal(true)
      setProfileData(data)
    }
    const handleCloseViewAvatarModal=()=>{
      setOpenViewAvatarModal(false)
    }

    //Edit Profile
    const [openEditProfileModal , setOpenEditProfileModal] = useState(false)
    const handleOpenEditProfileModal=(data)=>{
      setOpenEditProfileModal(true)
      setProfileData(data)
    }
    const handleCloseEditProfileModal=()=>{
      setOpenEditProfileModal(false)
    }
    return(
        <ProfileContext.Provider value={{openEditProfileModal ,openChangeAvatarModal,openViewAvatarModal ,handleOpenChangeAvatarModal,handleCloseEditProfileModal,handleOpenEditProfileModal,handleCloseChangeAvatarModal,handleOpenViewAvatarModal,handleCloseViewAvatarModal,profileData , setProfileData}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider