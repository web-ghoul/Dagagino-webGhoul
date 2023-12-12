"use client"
import { Box } from "@mui/material"
import Main from "./Main"
import { useTranslation } from "react-i18next"
import "../assets/styles/webGhoul.scss"
import "./fonts.css"
import { Provider } from "react-redux"
import { store } from "@/store/store"

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
              {children}
            </Main>
          </Box>
        </Provider>
      </body>
    </html>
  )
}
