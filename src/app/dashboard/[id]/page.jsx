import DashboardOptions from '@/tabs/DashboardOptions/DashboardOptions'
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'

const page = () => {
    return (
        <PrimaryBox>
            <PrimaryContainer className={`grid jcs aifs g50`} sx={{ height: "fit-content !important" }}>
                <DashboardOptions />
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default page
