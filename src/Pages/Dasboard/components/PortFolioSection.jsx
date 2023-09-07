import { HStack, Stack,Icon,Text, Button} from "@chakra-ui/react"
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";

const PortFolioSection = () => {
  return (
    <HStack justify="space-between" borderRadius="xl" bg="white" p="6" spacing={16} align={{
        base:"flex-start",
        xl:"center",
    }} flexDir={{
        base:"column",
        lg:"row",
    }}>
    <Stack>
    <HStack color="#535D66" >
    <Text fontSize="14px" color="" >Total Value Portfolio</Text>
    <Icon as={AiOutlineInfoCircle}></Icon>

    </HStack>
    <Text>191230.25$</Text>
    </Stack>
    <Stack>
    <HStack color="#535D66" >
    <Text fontSize="14px" color="" >Wallet Balance</Text>
    </HStack>
    <HStack><Text>91230.25$</Text></HStack>
    
    </Stack>

<HStack>
<Button bg="palegreen"
leftIcon={<Icon as={AiOutlineArrowDown} />}

>Deposit</Button>
<Button bg="purple" leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdrawal</Button></HStack>
</HStack>
  )
}

export default PortFolioSection