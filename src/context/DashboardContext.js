import { useState , createContext } from "react"

export const DashboardContext = createContext()

const DashboardProvider = ({children})=>{
    const [dashboardOption, setDashboardOption] = useState(false)

    //User Product
    const [openUserProductModal, setOpenUserProductModal] = useState(false)
    const [userProduct , setUserProduct] = useState(null)

    const handleOpenUserProductModal = (data)=>{
        setUserProduct(data)
        setOpenUserProductModal(true)
    }

    const handleCloseUserProductModal = ()=>{
        setOpenUserProductModal(false)
    }
    
    //Pending Sales
    const [openPendingSaleModal, setOpenPendingSaleModal] = useState(false)
    const [pendingSale , setPendingSale] = useState(null)

    const handleOpenPendingSaleModal = (data)=>{
        setPendingSale(data)
        setOpenPendingSaleModal(true)
    }

    const handleClosePendingSaleModal = ()=>{
        setOpenPendingSaleModal(false)
    }

    //Confirmed Invoices
    const [openConfirmedInvoiceModal, setOpenConfirmedInvoiceModal] = useState(false)
    const [confirmedInvoice , setConfirmedInvoice] = useState(null)

    const handleOpenConfirmedInvoiceModal = (data)=>{
        setConfirmedInvoice(data)
        setOpenConfirmedInvoiceModal(true)
    }

    const handleCloseConfirmedInvoiceModal = ()=>{
        setOpenConfirmedInvoiceModal(false)
    }


    //Pending Purchases
    const [openPendingPurchaseModal, setOpenPendingPurchaseModal] = useState(false)
    const [pendingPurchase , setPendingPurchase] = useState(null)

    const handleOpenPendingPurchaseModal = (data)=>{
        setPendingPurchase(data)
        setOpenPendingPurchaseModal(true)
    }

    const handleClosePendingPurchaseModal = ()=>{
        setOpenPendingPurchaseModal(false)
    }
    

    //Confirmed Purchases
    const [openConfirmedPurchaseModal, setOpenConfirmedPurchaseModal] = useState(false)
    const [confirmedPurchase , setConfirmedPurchase] = useState(null)

    const handleOpenConfirmedPurchaseModal = (data)=>{
        setConfirmedPurchase(data)
        setOpenConfirmedPurchaseModal(true)
    }

    const handleCloseConfirmedPurchaseModal = ()=>{
        setOpenConfirmedPurchaseModal(false)
    }

    const obj = {dashboardOption, setDashboardOption,openUserProductModal,openPendingSaleModal,openConfirmedInvoiceModal,openPendingPurchaseModal,openConfirmedPurchaseModal,handleOpenUserProductModal,handleCloseUserProductModal,handleOpenPendingSaleModal,handleClosePendingSaleModal,handleOpenConfirmedInvoiceModal,handleCloseConfirmedInvoiceModal,handleOpenPendingPurchaseModal,handleClosePendingPurchaseModal,handleOpenConfirmedPurchaseModal,handleCloseConfirmedPurchaseModal,userProduct,pendingSale,confirmedInvoice,pendingPurchase,confirmedPurchase}

    return(
        <DashboardContext.Provider value={obj}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider