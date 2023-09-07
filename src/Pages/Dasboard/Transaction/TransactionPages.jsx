import DashboardLayout from "../../../components/DashboardLayout"
import {Button, Card, Flex,Icon,TabList,TabPanel,TabPanels,Tab,Tabs,Tag,InputGroup,InputLeftElement,Input} from "@chakra-ui/react"
import { BsDownload, BsSearch } from "react-icons/bs"
import TransactionTable from "./components/TransactionTable"
const TransactionPages = () => {

const tabs=[
  {
name:"All",
count:"346",
},
{
  name:"Deposit",
  count:"8546",
  },
  {
    name:"Withdraw",
    count:"3460",
    },
    {
      name:"Trade",
      count:"416",
      },
]

  return (
    <DashboardLayout title="Transcation">
    <Flex justify="end" mt="6" color="black" mb="3">
  
    <Button leftIcon={<Icon as={BsDownload} />}>Export CSV</Button>
    </Flex>
    <Card borderRadius="16px">
    <Tabs>
    <TabList pt="4" display="flex" justifyContent={"space-between"}>
    {
      tabs.map((tab)=>(<Tab key={tab.name} display="flex" gap="2" >{tab.name} <Tag colorScheme="grey" borderRadius="full">{tab.count}</Tag></Tab>))
    }
    <InputGroup maxW="200px"pb="2" pr="2">
    <InputLeftElement pointerEvents='none'>
    <Icon as={BsSearch} />
    </InputLeftElement>
    <Input type='tel' placeholder='Search...' />
  </InputGroup>
    </TabList>
  
    <TabPanels>
      <TabPanel>
       <TransactionTable />
      </TabPanel>
      <TabPanel>
      <TransactionTable />
      </TabPanel>
      <TabPanel>
      <TransactionTable />
      </TabPanel>
    </TabPanels>
  </Tabs>
  </Card>
    </DashboardLayout>
  )
}

export default TransactionPages