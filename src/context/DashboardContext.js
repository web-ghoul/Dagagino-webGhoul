import { useState, createContext } from "react"

export const DashboardContext = createContext()

const DashboardProvider = ({ children }) => {
    const [dashboardOption, setDashboardOption] = useState(false)
    const [addSystemProduct, setAddSystemProduct] = useState(true)

    //Toggle Add System Product
    const handleToggleAddSystemProduct = () => {
        setAddSystemProduct(!addSystemProduct)
    }

    //User Product
    const [openUserProductModal, setOpenUserProductModal] = useState(false)
    const [userProduct, setUserProduct] = useState(null)

    const handleOpenUserProductModal = (data) => {
        setUserProduct(data)
        setOpenUserProductModal(true)
    }

    const handleCloseUserProductModal = () => {
        setOpenUserProductModal(false)
    }


    //Delete User Product
    const [openDeleteUserProductModal, setOpenDeleteUserProductModal] = useState(false)
    const [deleteUserProductId, setDeleteUserProductId] = useState(null)

    const handleOpenDeleteUserProductModal = (id) => {
        setOpenUserProductModal(false)
        setDeleteUserProductId(id)
        setOpenDeleteUserProductModal(true)
    }

    const handleCloseDeleteUserProductModal = () => {
        setOpenDeleteUserProductModal(false)
    }


    //Edit User Product
    const [openEditUserProductModal, setOpenEditUserProductModal] = useState(false)
    const [editUserProduct, setEditUserProduct] = useState(null)

    const handleOpenEditUserProductModal = (data) => {
        setOpenUserProductModal(false)
        setEditUserProduct(data)
        setOpenEditUserProductModal(true)
    }

    const handleCloseEditUserProductModal = () => {
        setOpenEditUserProductModal(false)
    }


    //Pending Sales
    const [openPendingSaleModal, setOpenPendingSaleModal] = useState(false)
    const [pendingSale, setPendingSale] = useState(null)

    const handleOpenPendingSaleModal = (data) => {
        setPendingSale(data)
        setOpenPendingSaleModal(true)
    }

    const handleClosePendingSaleModal = () => {
        setOpenPendingSaleModal(false)
    }

    //Confirmed Invoices
    const [openConfirmedInvoiceModal, setOpenConfirmedInvoiceModal] = useState(false)
    const [confirmedInvoice, setConfirmedInvoice] = useState(null)

    const handleOpenConfirmedInvoiceModal = (data) => {
        setConfirmedInvoice(data)
        setOpenConfirmedInvoiceModal(true)
    }

    const handleCloseConfirmedInvoiceModal = () => {
        setOpenConfirmedInvoiceModal(false)
    }


    //Pending Purchases
    const [openPendingPurchaseModal, setOpenPendingPurchaseModal] = useState(false)
    const [pendingPurchase, setPendingPurchase] = useState(null)

    const handleOpenPendingPurchaseModal = (data) => {
        setPendingPurchase(data)
        setOpenPendingPurchaseModal(true)
    }

    const handleClosePendingPurchaseModal = () => {
        setOpenPendingPurchaseModal(false)
    }


    //Confirmed Purchases
    const [openConfirmedPurchaseModal, setOpenConfirmedPurchaseModal] = useState(false)
    const [confirmedPurchase, setConfirmedPurchase] = useState(null)

    const handleOpenConfirmedPurchaseModal = (data) => {
        setConfirmedPurchase(data)
        setOpenConfirmedPurchaseModal(true)
    }

    const handleCloseConfirmedPurchaseModal = () => {
        setOpenConfirmedPurchaseModal(false)
    }



    const obj = { dashboardOption, setDashboardOption, openUserProductModal, openPendingSaleModal, openConfirmedInvoiceModal, openPendingPurchaseModal, openConfirmedPurchaseModal, handleOpenUserProductModal, handleCloseUserProductModal, handleOpenDeleteUserProductModal, handleCloseDeleteUserProductModal, deleteUserProductId, openDeleteUserProductModal, handleOpenEditUserProductModal, handleCloseEditUserProductModal, editUserProduct, openEditUserProductModal, handleOpenPendingSaleModal, handleClosePendingSaleModal, handleOpenConfirmedInvoiceModal, handleCloseConfirmedInvoiceModal, handleOpenPendingPurchaseModal, handleClosePendingPurchaseModal, handleOpenConfirmedPurchaseModal, handleCloseConfirmedPurchaseModal, userProduct, pendingSale, confirmedInvoice, pendingPurchase, confirmedPurchase, addSystemProduct, handleToggleAddSystemProduct }

    return (
        <DashboardContext.Provider value={obj}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider