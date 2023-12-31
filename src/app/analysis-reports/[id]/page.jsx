import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import AnalysisReportsOptions from '@/tabs/AnalysisReportsOptions/AnalysisReportsOptions'

const page = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aifs`}>
        <AnalysisReportsOptions />
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default page
