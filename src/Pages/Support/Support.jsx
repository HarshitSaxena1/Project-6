import { AiTwotoneMessage } from "react-icons/ai"
import DashboardLayout from "../../components/DashboardLayout"
import ContactCard from "../Dasboard/Transaction/Support/components/ContactCard"
import SupportCard from "../Dasboard/Transaction/Support/components/SupportCard"
import InfoCard from "../Dasboard/components/InfoCard"
import { IoMdMail } from "react-icons/io"
import { Box, GridItem, Stack } from "@chakra-ui/react"

const Support = () => {
  return (
    <DashboardLayout>
  <SupportCard   leftComponent={<ContactCard />}

  icon={IoMdMail}
   title="CONTACT US" text="Have a question or u want  to know more?  feel free to reach out us!!!" />
<Stack pt="4">

   <SupportCard   leftComponent={ 
    <InfoCard
    inverted={true}
    tagText="Contact"
    imgUrl="/grid_bg.svg"
    text="Learn  more about real State.. and Invest with Proper strategy. Happy! Trading"
    
    />
  }
    

  icon={AiTwotoneMessage}

   title="LIVE CHAT" text="Don't have time to wait for your answer?Chat with us now." /></Stack>
    </DashboardLayout>
  )
}

export default Support