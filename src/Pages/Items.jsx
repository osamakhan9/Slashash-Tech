import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useToast, Flex, } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Items = ({ el }) => {
  
    const navigate = useNavigate();
    const toast = useToast()
    const handlefav = async () => {
        let value ={
            data: el,
        }
       
        let res = await axios.post("https://slashash.onrender.com/favourite",value);
        console.log(res.data);
        // navigate(`/favourite`)
        toast({
            title: "Added to your favourite",
            status: 'success',
            isClosable: true,
        });
    }
   
    return (
        <>
            

            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                bg="white"
            >

                <Box h='350' w='100%' m='auto'>
                    <Image h='70%' w='100%' src={`https://gumlet.assettype.com/Prabhatkhabar/2021-12/87ef4f37-ff61-4c0d-87e8-602cbf9cdc05/fun.jpg`} alt='Image' />
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


                    <Box display='flex' gap='10' justifyContent='center' mt='10'>
                        <Button _hover={{ bg: 'blue' }} color='white' bg='black' onClick={handlefav}>
                            Favourite
                        </Button>

                    </Box>


                 
                </Box>
            </Box>
        </>
    )
}

export default Items