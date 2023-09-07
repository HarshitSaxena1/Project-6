import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import PortFolioSection from "./components/PortFolioSection"
import PriceSection from "./components/PriceSection"
import Transaction from "./components/Transaction"
import InfoCard from "./components/InfoCard"


const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
    <Grid
    gridTemplateColumns={{
md:"repeat(1,1fr)",
base:"repeat(2,1fr)",
}}
gap="6">
    <GridItem colSpan={20}><PortFolioSection /></GridItem>
    <GridItem colSpan={1}><PriceSection /></GridItem>
    <GridItem colSpan={19}><Transaction /></GridItem>
    <GridItem colSpan={1}><InfoCard imgUrl="/dot_bg.svg" text="Learn more about your wealth and keep healthy Trading for future!!!"
    tagText="Loan" /></GridItem>
    <GridItem colSpan={19}><InfoCard imgUrl="/grid_bg.svg" text="Keep Contact us for any  requirement for trading tips. Happy Trading!!"  
    tagText="Contact" /></GridItem>
   </Grid>
    </DashboardLayout>
  )
}

export default Dashboard