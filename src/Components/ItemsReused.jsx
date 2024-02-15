import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ItemsReused = ({el}) => {
    const navigate = useNavigate();

  return (
    <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                bg="white"
                justifyContent='center'
                alignContent='center'
                position ='relative'
                cursor='pointer'
                
                
            >

                <Box h='350' w='100%' m='auto'>
                    <Image h='100%' w='100%' src={`https://gumlet.assettype.com/Prabhatkhabar/2021-12/87ef4f37-ff61-4c0d-87e8-602cbf9cdc05/fun.jpg`} alt='Image' />
                </Box>
                <Box p="6">
                    <Box alignItems="baseline">
                        <Box gap='10px'>
                            <Box gap='7px' alignItems='center'>
                               
                                <Text fontSize="sm" fontWeight="semibold" color="gray.600" mr="2">
                                    Joke : {el.joke}
                                </Text>

                            </Box>
                        </Box>


                    </Box>


                   


                 
                </Box>
            </Box>
  )
}

export default ItemsReused