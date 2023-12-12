
import VerifyOTPSection from "@/sections/VerifyOTPSection/VerifyOTPSection"

const page = () => {
  return (
    <VerifyOTPSection/>
  )
}

export default page


// console.log(values)
      
//       if(sendOTP){
//         await handleVerifyOTP(OTP)
//         await axios.post(`${server_url}/Authentication/ClientRegister`).then((res)=>{
//           console.log(res)
//           handleAlert(t("forms.create_account_successfully.message"),"success")
//           router.push(`${process.env.NEXT_PUBLIC_LOGIN_ROUTE}`)
//         }).catch((err)=>{
//           console.log(err)
//         })
//       }else{

//       }
