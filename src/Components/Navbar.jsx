import { Avatar, Box, Button,  Text, Flex, Spacer, ButtonGroup, Divider, Image } from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    
   
      const handleClick = () => {
        setIsOpen(!isOpen)
      }
  return (
    <>
        <Box onClick={() => handleClick()} padding='10px 20px' color='white' bg='black' display={['none', 'none', 'none', 'block']} position='sticky' zIndex='10' top='0'>
        <Flex minWidth='max-content' alignItems='center' gap='2' >
          <Box p='2'>
          <Link to='/'>
          LOGO
          </Link>
           
          </Box>
          <Spacer />
          <ButtonGroup gap='10'>



            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/")}>Home</Text>

            <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/favourite")}>Favourites</Text>

         


          


          </ButtonGroup>


        </Flex>
      </Box>




      <Box padding='20px' color='white' display={['block', 'block', 'blog', 'none']} bg='#202A44' position='sticky' zIndex='10' top='0'>
        <Flex w='100%' m='auto' justifyContent='space-between' padding='0px 30px' alignItems='center'>
          <Box>

            <Link to='/'>
           
              <Image maxW='100px' src='http://competishun.com/wp-content/uploads/2022/10/logo-1-e1666417639125.png' />
            </Link>
           
          </Box>
          <Box color='#f06' onClick={() => setIsOpen(!isOpen)}>
            {

              isOpen ? <Text fontWeight='600' fontSize='21px'>✖</Text> : <Text fontWeight='600' fontSize='25px'>☰</Text>
            }
          </Box>
        </Flex>

        <Flex bg='#202A44' h='100vh' w='100%' padding='20px 50px' flexDirection='column' position='absolute' left={isOpen ? '0px' : '-1000px'} top='60px' transition='.3s all ease'>



          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/")}>Home</Text>

          <Text mt='3' _hover={{ color: 'blue.500' }} onClick={() => navigate("/favourite")}>Favourites</Text>

          


 


        </Flex>

      </Box>

      <Divider />
    </>
  )
}

export default Navbar