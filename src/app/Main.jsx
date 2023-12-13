"use client"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"
import { useEffect } from "react"
import i18n from "@/i18n"
import LangProvider from "@/context/LangContext"
import ProfileProvider from "@/context/ProfileContext"
import { toast, Toaster } from "react-hot-toast"
import Cookies from "js-cookie"
import { useDispatch } from "react-redux"
import { useTranslation } from 'react-i18next';
import { logout, setAuth } from "@/store/authSlice";
import ChangeAvatarModal from "@/models/ChangeAvatarModal"
import EditProfileModal from "@/models/EditProfileModal"
import ViewAvatarModal from "@/models/ViewAvatarModal"
import { useParams, usePathname, useRouter } from "next/navigation"
import UploadImageProvider from "@/context/UploadImageContext"
import AnalysisReportProvider from "@/context/AnalysisReportContext"
import DashboardProvider from "@/context/DashboardContext"
import UserProductModal from "../models/UserProductModal"
import PendingSaleModal from "../models/PendingSaleModal"
import PendingPurchaseModal from './../models/PendingPurchaseModal';
import ConfirmedInvoiceModal from './../models/ConfirmedInvoiceModal';
import ConfirmedPurchaseModal from './../models/ConfirmedPurchaseModal';
import DeleteUserProductModal from "../models/DeleteUserProductModal"
import EditUserProductModal from "../models/EditUserProductModal"
import SlideUp from "../components/SlideUp/SlideUp"


const Main = ({ children }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { id } = useParams()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"))
    }

  }, [])

  useEffect(() => {
    try {
      const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
      const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
      const userTypeId = Cookies.get(`${process.env.NEXT_PUBLIC_USERTYPEID_NAME}`)
      const userType = Cookies.get(`${process.env.NEXT_PUBLIC_USERTYPE_NAME}`)
      if (token && userId && userTypeId && userType) {
        dispatch(setAuth({ token, userId, userType, userTypeId }))
      } else {
        if (pathname === `${process.env.NEXT_PUBLIC_PROFILE_ROUTE}/${id}` || pathname === `${process.env.NEXT_PUBLIC_DASHBOARD_ROUTE}` || pathname === `${process.env.NEXT_PUBLIC_PRODUCTS_ROUTE}` || pathname === `${process.env.NEXT_PUBLIC_PRODUCT_ROUTE}/${id}` || pathname === `${process.env.NEXT_PUBLIC_REPORTS_ROUTE}`) {
          dispatch(logout())
          router.push(`${process.env.NEXT_PUBLIC_LOGIN_ROUTE}`)
        }
      }
    } catch (err) {
      toast.error(t("forms.fetch.public_error.message"))
    }
  }, [dispatch, id, pathname, router])
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <ProfileProvider>
          <UploadImageProvider>
            <AnalysisReportProvider>
              <DashboardProvider>
                <Header />
                {children}
                {/* Modals */}
                <ChangeAvatarModal />
                <EditProfileModal />
                <ViewAvatarModal />
                <UserProductModal />
                <DeleteUserProductModal />
                <EditUserProductModal />
                <PendingSaleModal />
                <PendingPurchaseModal />
                <ConfirmedInvoiceModal />
                <ConfirmedPurchaseModal />
                <SlideUp />
                {/* Modals */}
                <Toaster />
                <Footer />
              </DashboardProvider>
            </AnalysisReportProvider>
          </UploadImageProvider>
        </ProfileProvider>
      </LangProvider>
    </ThemeProvider>
  )
}

export default Main
