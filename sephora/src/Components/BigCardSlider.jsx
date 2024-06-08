import '../Styles/BigCardSlider.css'
import { Box, Button, Container, Text } from '@chakra-ui/react';

const BigCardSlider = () => {
  return (
    <>
      <Container className='big-card-cont'>
           <Box>
              <img src='https://www.sephora.com/ca_fr/contentimages/promo/beautyoffers/2024/June/2024-06-daily-care-hair-mbc-site-desktop-beauty-offers-page-banner-auto-replenish-us-can-2996.jpg?imwidth=240'/>
              <span style={{marginTop:'-50px'}}>PROFITER DE 10 % DE RÉDUCTION¶</span>
              <span>Super aubaines de réapprovisionnement</span>
              <Text>Obtenez 10 % de réduction¶ sur vos trois premières commandes de réapprovisionnement automatique de shampooing et de revitalisant.</Text>
              <Text>Réservé aux membres Beauty Insider. En ligne seulement • Fin 6/19/2024 ¶Des exceptions et des modalités s’appliquent.</Text>
              <Button padding={10} variant='outline' colorScheme='gray'>Magasiner</Button>
           </Box>
      </Container>
    </>
  )
}

export default BigCardSlider

