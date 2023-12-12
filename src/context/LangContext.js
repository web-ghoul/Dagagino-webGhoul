import { useTranslation } from "react-i18next"
import { useState , createContext } from "react"

export const LangContext = createContext()

const LangProvider = ({children})=>{
    const {t} = useTranslation()
    return(
        <LangContext.Provider value={{lang:t('lang')}}>
            {children}
        </LangContext.Provider>
    )
}

export default LangProvider