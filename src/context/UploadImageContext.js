import { useState, createContext } from "react"

export const UploadImageContext = createContext()

const UploadImageProvider = ({ children }) => {
    const [avatarForChange, setAvatarForChange] = useState(null)
    const [avatarForRegister, setAvatarForRegister] = useState(null)
    const [productImageForEdit, setProductImageForEdit] = useState(null)
    const [productImageForCreate, setProductImageForCreate] = useState(null)
    const [avatarForProduct, setAvatarForProduct] = useState(null)
    const [loadingUploading, setLoadingUploading] = useState(false)
    const handleClearAll = () => {
        setAvatarForChange(null)
        setAvatarForRegister(null)
        setProductImageForEdit(null)
        setProductImageForCreate(null)
        setAvatarForProduct(null)
        setLoadingUploading(null)
    }
    return (
        <UploadImageContext.Provider value={{ avatarForChange, setAvatarForChange, avatarForRegister, setAvatarForRegister, loadingUploading, setLoadingUploading, avatarForProduct, setAvatarForProduct, productImageForEdit, setProductImageForEdit, productImageForCreate, setProductImageForCreate, handleClearAll }}>
            {children}
        </UploadImageContext.Provider>
    )
}

export default UploadImageProvider