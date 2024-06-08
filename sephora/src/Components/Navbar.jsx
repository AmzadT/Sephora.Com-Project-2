import { Box, Container, Flex, Heading, Input,Text } from '@chakra-ui/react';
import '../Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faUsers,faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
  return (
    <Container className='container'>
      <Heading fontWeight='medium'>SEPHORA</Heading>
      <Box position='relative' display='inline-block'>
        <Input p={8} focusBorderColor='gray' pl={10} pr={120} borderRadius={50} border='1px solid gray' variant='outline' placeholder='Recherche'  _placeholder={{ color: 'gray.500' }} 
         _focus={{ borderColor: 'gray.500' }} paddingLeft={40} />
        <Box position='absolute' top='50%' left='10px' transform='translateY(-50%)'>
          <FontAwesomeIcon className='icons' icon={faMagnifyingGlass} />
        </Box>
      </Box>

      <Flex justifyContent='center' alignItems='center'>
      <FontAwesomeIcon className='icons' icon={faHouse} style={{marginRight:'10px'}}/>
        <Box >
          <span>Magasins et services</span>
          <p style={{marginTop:'5px', marginBottom:'-2px'}}>Choisissez votre magasin</p>
        </Box>
      </Flex>

      <Flex>
        <FontAwesomeIcon className='icons' icon={faUsers}  style={{marginTop:'15px', marginRight:'10px'}}/>
        <Text>Collectivité</Text>
      </Flex>

      <Flex justifyContent='center' alignItems='center'>
        <img className='icons' style={{marginRight:'10px'}} src='https://www.sephora.com/img/ufe/icons/me-active.svg'/>
        <Box >
          <span>Ouvrir une session</span>
          <p style={{marginTop:'2px', marginBottom:'-2px'}}>pour profiter de l’expédition GRATUITE 🚚</p>
        </Box>
      </Flex>

      <FontAwesomeIcon className='heart' icon={faHeart}/>
      <FontAwesomeIcon className='cart' icon={faCartShopping}/>
    </Container>
  );
}

export default Navbar;


