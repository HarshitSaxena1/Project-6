import { Stack,HStack,Text,Button,Icon, Img,Tab,Tabs,TabList,TabPanels,TabPanel,Flex } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/Card"

import { BiMinus, BiPlus } from "react-icons/bi";


const PriceSection = () => {

const timestamps=["7:55pm","9;30pm", "9:20am","12:00pm","3:10pm"];


  return (
    <CustomCard>
    <HStack spacing="32"><Stack>
    <HStack color="#535D66" >
    <Text fontSize="14px" color="" >Wallet Balance</Text>
    </HStack>
    <HStack><Text>91230.25$</Text></HStack>
    
    </Stack>
    <HStack>
<Button bg="palegreen"
leftIcon={<Icon as={BiPlus} />}>Buy</Button>
<Button bg="purple" leftIcon={<Icon as={BiMinus} />}>Sell</Button></HStack>

    </HStack>
    <Tabs variant='soft-rounded' colorScheme='green'>
    <Flex justify="end">
    <TabList>
    {["1H","1D","1W","1M"].map((tab)=>(

            <Tab key={tab} fontSize="sm" p="6px" borderRadius="4px">{tab}</Tab>
    ))}
    </TabList>
    </Flex>
    <TabPanels>
      <TabPanel>
      <Img w="100%" src="/graph.svg" />
      <HStack justify="space-between">
      {
          timestamps.map((timestamp)=>(<Text key={timestamp} fontSize="sm" color="black">{timestamp}</Text>))
      }</HStack>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>


    </CustomCard>
  )
}

export default PriceSection