import {ListItem , List, Typography} from '@mui/material'
import styles from "./Header.module.scss"
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n'

const LanguagesMenu = ({activeLanguagesMenu,handleCloseLanguagesMenu}) => {
    const {t} = useTranslation()

    const handleArabicLanguage=()=>{
        i18n.changeLanguage("ar")
        localStorage.setItem("lang","ar")
        handleCloseLanguagesMenu()
    }

    const handleEnglishLanguage=()=>{
        i18n.changeLanguage("en")
        localStorage.setItem("lang","en")
        handleCloseLanguagesMenu()
    }
    return (
        <List className={`${styles.header_languages_menu} ${activeLanguagesMenu && styles.header_languages_menu_active} grid jcs aic pad10`} sx={{left:`${t("lang") === "ar" ? "0" : "auto" }`,right:`${t("lang") === "en" ? "0" : "auto" }`}}>
            <ListItem onClick={handleArabicLanguage} className={`${t("lang") === "ar" && styles.active}`}>
                <Typography variant="h6">عربى</Typography>
            </ListItem>
            <ListItem onClick={handleEnglishLanguage}  className={`${t("lang") === "en" && styles.active}`}>
                <Typography variant="h6">English</Typography>
            </ListItem>
        </List>
    )
}

export default LanguagesMenu
