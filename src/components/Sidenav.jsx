import { Box, HStack, Heading, Icon, Stack,Text } from "@chakra-ui/react"
import {RxDashboard} from "react-icons/rx";
import {BsArrowDownUp} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import {Link} from"react-router-dom"
import Support from "../Pages/Support/Support";

const Sidenav = () => {

const navLinks=[
    
    
    {

    icon:RxDashboard,
        text:"Dashboard",
        link:"/",

},
{

    icon:BsArrowDownUp,
        text:"Transaction",
        link:"/transaction",

},

]

 return (
 <Stack bg="white" justify="space-between" boxShadow={{base:"none",lg:"lg"}} w={{base:"full",lg:"16rem",}} h="100vh">

 <Box>  
<Heading textAlign="center" pt="56px" fontSize="20px" as="h1">@CRYPTOCURRENCY</Heading>
 <Box mt="6" mx="3">
 {navLinks.map((nav)=>(<Link to={nav.link} key={nav.text}>
     
 <HStack borderRadius="10px" mx="12px" py="3" 
 _hover={{
 bg:"#F3F3F7",
 color:"#171717"
 }}
 color="#797E82"
 ><Icon as={nav.icon} /><Text  fontWeight="medium"  fontSize="14px">{nav.text}</Text></HStack>
 </Link>
 ))}
 </Box>
 </Box>
 
<Box mt="6" mx="3" mb="5">
<Link to="/Support">
<HStack borderRadius="10px" mx="12px" py="3" 
_hover={{
bg:"#F3F3F7",
color:"#171717"
}}
color="#797E82">
<Icon as={BiSupport} /><Text  fontWeight="medium"  fontSize="14px">Support</Text></HStack></Link></Box>))

 </Stack>
  )
}

export default Sidenav