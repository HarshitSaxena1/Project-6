import { Flex, Icon, Stack ,Text,Card, HStack,FormControl,FormLabel,Input, Textarea,Checkbox,Box, Button} from "@chakra-ui/react"
import {IoMdMail} from "react-icons/io"
import ContactCard from "./ContactCard"

const SupportCard = ({leftComponent,icon,text,title}) => {
  return (
  <Flex gap={6}
   flexDir={{
    base:"column",
    xl:"row",
   }}> <Stack color="white" maxW="380px">

    <Icon as={icon} boxSize={6} color="purple"/>
    <Text  textStyle="h2">{title}</Text>
    <Text textStyle="h6">{text}</Text>
</Stack>
{leftComponent}

</Flex>

  )
}

export default SupportCard