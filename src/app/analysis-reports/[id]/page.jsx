import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import Forms from '@/Forms/Forms'
import AnalysisReportsOptions from '@/tabs/AnalysisReportsOptions/AnalysisReportsOptions'

const page = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aifs g50`} sx={{height:"fit-content !important"}}>
        <Forms type={"handle_report_dates"}/>
        <AnalysisReportsOptions/>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default page
