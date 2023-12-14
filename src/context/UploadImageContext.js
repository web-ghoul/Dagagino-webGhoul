import { useState, createContext } from "react"

export const UploadImageContext = createContext()

const UploadImageProvider = ({ children }) => {
    const [avatarForChange, setAvatarForChange] = useState(null)
    const [avatarForRegister, setAvatarForRegister] = useState(null)
    const [avatarForEdit, setAvatarForEdit] = useState(null)
    const [productImageForEdit, setProductImageForEdit] = useState(null)
    const [avatarForProduct, setAvatarForProduct] = useState(null)
    const [loadingUploading, setLoadingUploading] = useState(false)
    return (
        <UploadImageContext.Provider value={{ avatarForChange, setAvatarForChange, avatarForRegister, setAvatarForRegister, avatarForEdit, setAvatarForEdit, loadingUploading, setLoadingUploading, avatarForProduct, setAvatarForProduct, productImageForEdit, setProductImageForEdit }}>
            {children}
        </UploadImageContext.Provider>
    )
}

export default UploadImageProvider