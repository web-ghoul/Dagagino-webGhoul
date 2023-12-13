import { Button, List, useMediaQuery, ListItem, ListItemButton, Divider, Typography } from '@mui/material'
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { SecondaryButton } from '@/muiCustomize/SecondaryButton'
import Link from 'next/link'
import styles from "./Header.module.scss"
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Box } from '@mui/material'

const HeaderMenu = ({ activeMenu, activeLanguagesMenu, handleLogout, handleToggleLanguagesMenu, handleCloseMenu }) => {
  const { signed, userId, userType } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  const router = useRouter()
  const lgSize = useMediaQuery("(max-width:1200px)")
  const mdSize = useMediaQuery("(max-width:992px)")
  const smSize = useMediaQuery("(max-width:768px)")
  return (
    <List className={`${styles.header_menu} ${t("lang") === "ar" ? styles.header_menu_arabic : styles.header_menu_english} ${activeMenu && styles.header_menu_active} grid jcs aic pad20 br10 g10`} >
      {
        signed && mdSize && (
          <>
            <ListItem>
              <Link href={`${process.env.NEXT_PUBLIC_PRODUCTS_ROUTE}`}>
                <Typography variant="h6">{t('header.navbar.products')}</Typography>
              </Link>
            </ListItem>

            <ListItem>
              <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_ROUTE}/${userId}`}>
                <Typography variant="h6">{userType === "client" ? t('header.navbar.purchases') : t('header.navbar.dashboard')}</Typography>
              </Link>
            </ListItem>

            {userType !== "client" && (
              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_ANALYSIS_REPORTS_ROUTE}/${userId}`}>
                  <Typography variant="h6">{t('header.navbar.analysis_reports')}</Typography>
                </Link>
              </ListItem>
            )}

            <ListItem>
              <Link href={`${process.env.NEXT_PUBLIC_PROFILE_ROUTE}/${userId}`}>
                <Typography variant="h6">{t('header.navbar.profile')}</Typography>
              </Link>
            </ListItem>
            <Divider />
          </>
        )
      }
      <ListItem onClick={handleCloseMenu}>
        <Link href={`${process.env.NEXT_PUBLIC_HOME_ROUTE}`}>
          <Typography variant="h6">{t('header.navbar.home')}</Typography>
        </Link>
      </ListItem>

      <ListItem onClick={handleCloseMenu}>
        <Link href={`${process.env.NEXT_PUBLIC_ABOUT_ROUTE}`}>
          <Typography variant="h6">{t('header.navbar.about')}</Typography>
        </Link>
      </ListItem>

      <ListItem onClick={handleCloseMenu}>
        <Link href={`${process.env.NEXT_PUBLIC_HOME_ROUTE}`}>
          <Typography variant="h6">{t('header.navbar.app')}</Typography>
        </Link>
      </ListItem>

      <ListItem onClick={handleCloseMenu}>
        <Link href={`${process.env.NEXT_PUBLIC_REPORT_ROUTE}`}>
          <Typography variant="h6">{t('header.navbar.contact')}</Typography>
        </Link>
      </ListItem>
      {
        smSize && (
          signed ? (
            <PrimaryButton onClick={handleLogout}>
              {t('header.logout')}</PrimaryButton>
          ) : (
            <Box className={`grid jcs aic g20`}>
              <PrimaryButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_LOGIN_ROUTE}`)}>{t('header.login')}</PrimaryButton>
              <SecondaryButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_REGISTER_ROUTE}`)}>{t('header.register')}</SecondaryButton>
            </Box>
          )
        )
      }
    </List>
  )
}

export default HeaderMenu
