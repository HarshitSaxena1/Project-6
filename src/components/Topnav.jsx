import { Container, Flex,Heading,Menu,MenuButton,MenuItem,MenuList,Button, HStack,Box, Icon } from "@chakra-ui/react"
import {FaBars, FaUserTie} from "react-icons/fa"


const Topnav = ({title,onOpen}) => {
  return (
<Box px="2" >
<HStack maxW="90rem" mx="auto"   h={16}  justify={"space-between"}  >    
<Icon as={FaBars} onClick={onOpen}  display={{
    base:"block",
    lg:"none",
}} />
<Heading fontSize="28px">{title}</Heading>
<Menu>
  <MenuButton>
<Icon as={FaUserTie}  fontSize={24}/>
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

    
</HStack>
</Box>
  )}

export default Topnav