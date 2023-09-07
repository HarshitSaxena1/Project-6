import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Text,
    
  } from '@chakra-ui/react'

const TransactionTable = () => {

const tableData=[{
id:"HBA234D",
date:"2023-5-8",
time:"7:85 AM",
type:{
    name:"INR DEPOSIT",
    tag:"E-Transfer",
},
amount:"+81542",
status:"pending",
},
{
id:"AQBA234D",
date:"2023-10-28",
time:"12:40 PM",
type:{
    name:"INR DEPOSIT",
    tag:"E-Transfer",
},
amount:"+815422",
status:"complete",
},
{
    id:"HBA23LKD",
date:"2023-12-18",
time:"10:45 AM",
type:{
    name:"INR DEPOSIT",
    tag:"E-Transfer",
},
amount:"+121542",
status:"pending",
},
{id:"WBA234SD",
date:"2023-7-21",
time:"9:45 AM",
type:{
    name:"DOLLAR DEPOSIT",
    tag:"E-Transfer",
},
amount:"$421542",
status:"complete",
},
]

  return (
    <TableContainer>
    <Table variant='simple'>
      
      <Thead>
        <Tr>
          <Td>ID</Td>
          <Td>Date & Time</Td>
          <Td>Type</Td>
          <Td>Amount</Td>
          <Td>Status</Td>
          
        </Tr>
        </Thead>
        <Tbody>
        {
            tableData.map((data)=>(<Tr key={data.id}>
            <Td>{data.id}</Td>
            <Td>
            <Stack>
            <Text>{data.date}</Text>
            <Text>{data.time}</Text>
            </Stack>
            </Td>
            <Td><Stack>
            <Text>{data.type.name}</Text>
            <Text>{data.type.tag}</Text>
            </Stack>
            </Td>
            <Td>{data.amount}</Td>
            <Td>{data.status}</Td>
            </Tr>))
            }
    </Tbody>   
     
    
    </Table>
  </TableContainer>
  )
}

export default TransactionTable