import { useState, createContext } from "react"

export const UploadImageContext = createContext()

const UploadImageProvider = ({ children }) => {
    const [avatarForChange, setAvatarForChange] = useState(null)
    const [avatarForRegister, setAvatarForRegister] = useState(null)
    const [avatarForEdit, setAvatarForEdit] = useState(null)
    const [productImageForEdit, setProductImageForEdit] = useState(null)
    const [productImageForCreate, setProductImageForCreate] = useState(null)
    const [avatarForProduct, setAvatarForProduct] = useState(null)
    const [loadingUploading, setLoadingUploading] = useState(false)
    const handleClearAll = () => {
        setAvatarForChange(null)
        setAvatarForRegister(null)
        setAvatarForEdit(null)
        setAvatarForEdit(null)
        setProductImageForCreate(null)
        setAvatarForProduct(null)
        setLoadingUploading(null)
    }
    return (
        <UploadImageContext.Provider value={{ avatarForChange, setAvatarForChange, avatarForRegister, setAvatarForRegister, avatarForEdit, setAvatarForEdit, loadingUploading, setLoadingUploading, avatarForProduct, setAvatarForProduct, productImageForEdit, setProductImageForEdit, productImageForCreate, setProductImageForCreate, handleClearAll }}>
            {children}
        </UploadImageContext.Provider>
    )
}

export default UploadImageProvider