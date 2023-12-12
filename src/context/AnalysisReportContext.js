import { useState , createContext } from "react"
import {handleStartDateAndEndDate} from "../functions/handleStartDateAndEndDate"

export const AnalysisReportContext = createContext()

const AnalysisReportProvider = ({children})=>{
    const [option, setOption] = useState(0)
    const [startDate, setStartDate] = useState(handleStartDateAndEndDate().startDate)
    const [endDate, setEndDate] = useState(handleStartDateAndEndDate().endDate)
    return(
        <AnalysisReportContext.Provider value={{startDate,endDate,setStartDate,setEndDate,option, setOption}}>
            {children}
        </AnalysisReportContext.Provider>
    )
}

export default AnalysisReportProvider