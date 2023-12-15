"use client"
import { Box } from "@mui/material"
import Main from "./Main"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { useTranslation } from "react-i18next"
import "../assets/styles/webGhoul.scss"
import "./fonts.css"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import EditProfileModal from "@/models/EditProfileModal"
import ViewAvatarModal from "@/models/ViewAvatarModal"
import ChangeAvatarModal from "@/models/ChangeAvatarModal"
import UserProductModal from "../models/UserProductModal"
import PendingSaleModal from "../models/PendingSaleModal"
import PendingPurchaseModal from './../models/PendingPurchaseModal';
import ConfirmedInvoiceModal from './../models/ConfirmedInvoiceModal';
import ConfirmedPurchaseModal from './../models/ConfirmedPurchaseModal';
import DeleteUserProductModal from "../models/DeleteUserProductModal"
import EditUserProductModal from "../models/EditUserProductModal"
import ConfirmPendingSaleModal from "../models/ConfirmPendingSaleModal"
import Cart from "../components/Cart/Cart"
import SlideUp from "../components/SlideUp/SlideUp"
import { Toaster } from "react-hot-toast"

export default function RootLayout({ children }) {
  const { t } = useTranslation()
  return (
    <html lang={t("lang")} dir={t("lang") === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="stylesheet" href={"./fonts.css"} />

        <title>{t("title")}</title>
      </head>
      <body>
        <Provider store={store}>
          <Box component={"main"} className={`grid jcs aic acsb`}>
            <Main>
              <Header />
              <Cart />
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
              <ConfirmPendingSaleModal />
              {/* Modals */}
              <SlideUp />
              <Toaster />
              <Footer />
            </Main>
          </Box>
        </Provider>
      </body>
    </html>
  )
}
