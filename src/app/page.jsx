import ContactSection from "@/sections/ContactSection/ContactSection"
import FollowUsSection from "../sections/FollowUsSection/FollowUsSection"
import AppSection from "../sections/AppSection/AppSection"
import AboutSection from "../sections/AboutSection/AboutSection"
import MainSection from "../sections/MainSection/MainSection"

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutSection />
      <AppSection />
      <FollowUsSection />
      <ContactSection />
    </>
  )
}
