import {Card,HStack,Text,FormControl,Input,FormLabel,Stack,Box,Button,Checkbox,Textarea,} from "@chakra-ui/react"

const ContactCard = () => {
  return (
    <Card p="6"  borderRadius="1rem"><Text fontWeight="medium" fontSize="sm" >You will receive information with in 24 hrs.</Text>
    <HStack  flexDir={{
        base:"column",
        md:"row",
       }}>
    <FormControl>
      <FormLabel >Name</FormLabel>
      <Input placeholder="Enter your name..." />
    
    </FormControl>
    <FormControl>
      <FormLabel>Surname</FormLabel>
      <Input placeholder="Enter your last name!!!" />
    
    </FormControl>
    </HStack>
    <FormControl py="2">
      <FormLabel>Email</FormLabel>
      <Input type="email" placeholder="Enter your last email!!!" />
      </FormControl>
      <FormControl>
      <FormLabel>Message</FormLabel>
      <Textarea placeholder="Enter your last message!!!" />
      </FormControl>
      <Checkbox defaultChecked py="2">I Agree<Box as="span" color="purple" py="2"> terms and condition</Box></Checkbox>
    <Stack><Button py="2" color="blue" bg="black">Send me a Message.
    </Button><Button>Book a Meeting.
    </Button>
    </Stack>
    </Card>
  )
}

export default ContactCard