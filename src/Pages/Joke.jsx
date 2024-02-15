import { Avatar, Box, Button, Input, Text,  Flex, Spacer, ButtonGroup, Divider, Image,SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Items from './Items';
import { useNavigate } from 'react-router-dom';
const Movie = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  

  const [isOpen, setIsOpen] = useState(false)



 
  const getData = async (page, search) => {
    if (search === "") {
      
      // let res = await axios.get(`https://icanhazdadjoke.com/search?term=${search}&api_key=2a4603c257`)
      let res = await axios({
        url: `https://icanhazdadjoke.com/search?joke?term=${search}&page=${page}`,
        method: "GET",
        headers: {
            'accept': 'application/json',
        }
      })
      setData(res.data);
      // console.log(res.data)
    } else {
      // let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2a4603c2f8e8f6c24e8db5289c101280&page=${page}&query=${search}`);
      setData(res.data);
    }
  }
 
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    getData(page, search)
  }, [page, search]);

  console.log(data);
  return (
    <>
      {/*Navbar */}


      <Box onClick={() => handleClick()} padding='10px 20px' color='white' bg='black' display={['none', 'none', 'none', 'block']} position='sticky' zIndex='10' top='0'>
        <Flex minWidth='max-content' alignItems='center' gap='2' >
          <Box p='2'>
            <Link to='/' >
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





      {/* Main section */}



      <Box w='100%' m='auto' mt='40px' mb='50px'>
      <Input type="text" placeholder='Search Joke' margin='auto' htmlSize={"50"} width='auto' bg={"white"} onChange={(e)=>setSearch(e.target.value)} display={{sm:"none",lg:"block"}}/>
      </Box>
      <SimpleGrid gap='20px' columns={['1','1','2','5']}>
        {data.results?.map((el, i) => (
          <Items key={i} el={el} />
        ))}
      </SimpleGrid>
      <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} w="20%" margin="auto" mt="30px">
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
        <Button>{page}</Button>
        <Button isDisabled={data.total_results === page} onClick={() => setPage(page + 1)}>Next</Button>
      </Box>





    </>
  )
}

export default Movie