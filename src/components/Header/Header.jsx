"use client"
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { PrimaryButton } from '@/muiCustomize/PrimaryButton'
import { SecondaryButton } from '@/muiCustomize/SecondaryButton'
import { AppBar, List, ListItem, Typography, Box, IconButton, useMediaQuery } from '@mui/material'
import Logo from '../Logo/Logo'
import styles from "./Header.module.scss"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowDropUpRounded, ArrowDropDownRounded, ViewListRounded, LanguageRounded, ShoppingCartRounded } from '@mui/icons-material'
import HeaderMenu from '@/components/Header/HeaderMenu'
import { logout } from '@/store/authSlice'
import LanguagesMenu from '@/components/Header/LanguagesMenu'
import { handleAlert } from '../../functions/handleAlert'
import { CartContext } from '../../context/CartContext'
import { SpecialIconButton } from '../../muiCustomize/SpecialIconButton'

const Header = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const [active, setActive] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)
  const [activeLanguagesMenu, setActiveLanguagesMenu] = useState(false)
  const { handleOpenCart } = useContext(CartContext)
  const { userId, userType, signed } = useSelector((state) => state.auth)
  const lgSize = useMediaQuery("(max-width:1200px)")
  const mdSize = useMediaQuery("(max-width:992px)")
  const smSize = useMediaQuery("(max-width:768px)")
  const dispatch = useDispatch()

  const handleCloseMenu = () => {
    setActiveMenu(false)
  }

  const handleLogout = () => {
    dispatch(logout())
    router.push(`${process.env.NEXT_PUBLIC_HOME_ROUTE}`)
    handleAlert(t("logout.message"), "success")
    handleCloseMenu()
  }

  const handleToggleMenu = () => {
    setActiveMenu(!activeMenu)
  }

  const handleToggleLanguagesMenu = () => {
    setActiveLanguagesMenu(!activeLanguagesMenu)
  }

  const handleCloseLanguagesMenu = () => {
    setActiveLanguagesMenu(false)
  }

  // Handle Clickable on Menu
  if (typeof window !== "undefined") {
    window.addEventListener('click', (e) => {
      const classes = e.target.classList
      //For Menu List
      if (!(classes.contains("Header_header_menu_button__Qgj0A") || classes.contains("MuiSvgIcon-root") || (e.target.parentElement && e.target.parentElement.classList.contains("MuiSvgIcon-root")))) {
        setActiveMenu(false)
      }

      //For Languages List
      if (!(classes.contains("css-1qnayxv-MuiTypography-root") || classes.contains("css-wtk2ev-MuiButtonBase-root-MuiButton-root") || classes.contains("MuiSvgIcon-root") || (e.target.parentElement && e.target.parentElement.classList.contains("MuiSvgIcon-root")) || classes.contains("css-1vo6ci0"))) {
        setActiveLanguagesMenu(false)
      }
    })
  }

  //Handle Header Activation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [active]);

  //Responsive Header
  const lgHeader = (
    <>
      <List className={`${styles.header_list} flex jcc aic g10`}>
        {
          signed ? (
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
            </>
          ) : (
            <>
              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_HOME_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.home')}</Typography>
                </Link>
              </ListItem>

              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_ABOUT_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.about')}</Typography>
                </Link>
              </ListItem>

              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_APP_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.app')}</Typography>
                </Link>
              </ListItem>

              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_CONTACT_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.contact')}</Typography>
                </Link>
              </ListItem>
            </>
          )
        }
      </List>

      <Box className={`flex jcfe aic g10`}>
        {signed && (<Box className={`flex jcc aic g20`}>
          <SpecialIconButton onClick={handleToggleMenu} className={` flex jcc aic`}>
            <ViewListRounded sx={{ color: (theme) => theme.palette.primary.main }} />
          </SpecialIconButton>
          <SpecialIconButton onClick={handleOpenCart} className={`${styles.cart_button}  flex jcc aic`}>
            <ShoppingCartRounded sx={{ color: (theme) => theme.palette.primary.main }} />
          </SpecialIconButton>
        </Box>)}

        <Box className={`flex jcc aic g20`}>
          {
            !signed && (
              <>
                <PrimaryButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_LOGIN_ROUTE}`)}>{t('header.login')}</PrimaryButton>
                <SecondaryButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_REGISTER_ROUTE}`)}>{t('header.register')}</SecondaryButton>
              </>
            )
          }
        </Box>
        <PrimaryButton onClick={handleToggleLanguagesMenu} className={`${styles.header_languages_list_button} flex jcc aic g10`}>
          {
            activeLanguagesMenu ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />
          }
          <Typography variant='subtitle1' className={`${styles.change_language_text}`}>{t('header.change_language_text')}</Typography>
        </PrimaryButton>
      </Box>
    </>
  )

  const mdHeader = (
    <>
      <List className={`${styles.header_list} flex jcc aic`}>
        {
          signed ? (
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
            </>
          ) : (
            <>
              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_HOME_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.home')}</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_ABOUT_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.about')}</Typography>
                </Link>
              </ListItem>

              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_APP_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.app')}</Typography>
                </Link>
              </ListItem>

              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_CONTACT_ROUTE}`}>
                  <Typography variant="h6">{t('header.navbar.contact')}</Typography>
                </Link>
              </ListItem>
            </>
          )
        }
      </List>

      <Box className={`flex jcfe aic g10`}>
        {signed && (<>
          <SpecialIconButton onClick={handleToggleMenu} className={` flex jcc aic`}>
            <ViewListRounded sx={{ color: (theme) => theme.palette.primary.main }} />
          </SpecialIconButton>
          <SpecialIconButton onClick={handleOpenCart} className={`${styles.cart_button}  flex jcc aic`}>
            <ShoppingCartRounded sx={{ color: (theme) => theme.palette.primary.main }} />
          </SpecialIconButton>
        </>)}



        <Box className={`flex jcc aic g20`}>
          {
            !signed && (
              <PrimaryButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_LOGIN_ROUTE}`)}>{t('header.login')}</PrimaryButton>
            )
          }
        </Box>
        <PrimaryButton onClick={handleToggleLanguagesMenu} className={`${styles.header_languages_list_button} flex jcc aic`}>
          {
            activeLanguagesMenu ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />
          }
          <LanguageRounded />
        </PrimaryButton>
      </Box>
    </>
  )

  const smHeader = (
    <>
      <Box className={`flex jcfe aic g20`}>
        <SpecialIconButton onClick={handleToggleMenu} className={` flex jcc aic`}>
          <ViewListRounded sx={{ color: (theme) => theme.palette.primary.main }} />
        </SpecialIconButton>
        {signed &&
          <SpecialIconButton onClick={handleOpenCart} className={`${styles.cart_button} flex jcc aic`}>
            <ShoppingCartRounded sx={{ color: (theme) => theme.palette.primary.main }} />
          </SpecialIconButton>
        }
        <PrimaryButton onClick={handleToggleLanguagesMenu} className={`${styles.header_languages_list_button} flex jcc aic`}>
          {
            activeLanguagesMenu ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />
          }
          <LanguageRounded />
        </PrimaryButton>
      </Box>
    </>
  )

  return (
    <AppBar className={`${active && styles.active} ${styles.header}`}>
      <PrimaryContainer className={`${styles.header_contain}`}>
        <Box className={`${styles.header_contain_box} flex jcsb aic g20`}>

          {/* Menus */}
          <HeaderMenu handleLogout={handleLogout} activeMenu={activeMenu} handleCloseMenu={handleCloseMenu} />
          <LanguagesMenu activeLanguagesMenu={activeLanguagesMenu} handleCloseLanguagesMenu={handleCloseLanguagesMenu} />
          {/* Menus */}

          <Logo />
          {
            lgSize &&
              mdSize ?
              smSize ? smHeader : mdHeader : lgHeader
          }
        </Box>
      </PrimaryContainer>
    </AppBar>
  )
}

export default Header
