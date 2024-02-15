
import { Box } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import Movie from './Joke';

const Home = () => {
   

    return (
        <Box>
            {<Movie/>}
        </Box>
      )
  
}

export default Home