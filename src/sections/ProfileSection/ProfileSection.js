"use client"
import ProfileDataBox from '@/components/ProfileDataBox/ProfileDataBox'
import Avatar from '@/components/Avatar/Avatar'
import { PrimaryBox } from '@/muiCustomize/PrimaryBox'
import { PrimaryContainer } from '@/muiCustomize/PrimaryContainer'
import { getProfile } from '@/store/profileSlice'
import { useParams } from 'next/navigation'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingProfileSection from './LoadingProfileSection'
import {useMediaQuery} from "@mui/material"

const ProfileSection = () => {
    const {id} = useParams()
    const {profile, isLoading} = useSelector((state)=>state.profile)
    const {userId} = useSelector((state)=>state.auth)
    const dispatch= useDispatch()
    const smSize = useMediaQuery("(max-width:768px)")

    useEffect(()=>{
        dispatch(getProfile({id}))
    },[dispatch, id])

    return (
        <PrimaryBox>
            <PrimaryContainer className={` ${smSize ? "grid" : "flex"} jcsb aifs g30`}>
                {isLoading ? (<LoadingProfileSection/>) : 
                    profile ? (
                        <>
                            <Avatar data={profile} />
                            <ProfileDataBox editable={id === userId} data ={profile}/>
                        </> ) : 
                        (
                            <></>
                        )
                }
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default ProfileSection
