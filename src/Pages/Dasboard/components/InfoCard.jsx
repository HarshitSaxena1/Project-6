import { CustomCard } from "../../../chakra/Card"

import { Tag,Text } from "@chakra-ui/react"
const InfoCard = ({imgUrl,text,tagText}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize={"cover"} bgRepeat={"no-repeat"}><Tag bg="purple" color={"white"} borderRadius={"full"}>{tagText}</Tag>
    <Text fontSize="sm" mt={4}>
    </Text>
    {text}
    </CustomCard>
  )
}

export default InfoCard