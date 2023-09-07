import { CustomCard } from "../../../chakra/Card"
import { Flex, Stack, Text,Box ,Icon,Grid, Divider,Button} from "@chakra-ui/react"
import { Fragment } from "react"
import { BsCurrencyRupee,BsCurrencyDollar,BsCurrencyBitcoin } from "react-icons/bs"
const Transaction = () => {

const transactions=[
    {
id:"1",
icon:BsCurrencyRupee,
amount:"81545",
text:"INR DEPOSIT",
timestamp:"7:55PM",
 },
 {
    id:"2",
 icon:BsCurrencyBitcoin,
amount:"$101545",
text:"BTC DEPOSIT",
timestamp:"13:55PM",
 },
 {
    id:"3",
 icon:BsCurrencyDollar,
amount:"$51545",
text:"USA  DEPOSIT",
timestamp:"10:55AM",
 },
]



  return (
    <CustomCard><Text mb="6" fontSize="sm" color="black">Recent Transaction</Text>
    <Stack>
    {transactions.map((transaction)=>(
        <Fragment key={transaction.id}>
        <Divider mt=".5" />
        <Flex gap={4} w="full">
        <Grid placeItems="center" bg="black" boxSize="5" color="white" borderRadius="full" ><Icon as={transaction.icon} /></Grid>
        <Flex justify="space-between" w="full">
<Stack spacing={0}>
<Text textStyle="h1" color="black">
{transaction.text} 
</Text>
<Text fontSize="sm" color="black">
{transaction.timestamp} 
</Text>
</Stack>
<Text textStyle="h1" color="black">
{transaction.amount}</Text>
        </Flex>
        
        
        </Flex>

</Fragment>
    ))}
    
    </Stack>
    
    <Button w="full">View All</Button>
    
    
    </CustomCard>
  )
}

export default Transaction