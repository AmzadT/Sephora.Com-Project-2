import { Box, Container, Heading, Text, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Styles/CardSlider2.css';


const CardSlider2 = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Heading textAlign="center" marginBottom={-15} marginTop={50}>Nouvel arrivage</Heading>


      <div className="slider-container">
        <IconButton
          aria-label="Scroll left"
          icon={<FaChevronLeft />}
          onClick={scrollLeft}
          className="slider-button left"
        />


        <Container className="cards-container" ref={containerRef}>




          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2743045-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>LANEIGE</Text>
            <Text>Trousse pour les lèvres Dreamy</Text>
            <span style={{ fontSize: '17px' }}>27,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2743128-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>LANEIGE</Text>
            <Text>Baume brillant à lèvres</Text>
            <span style={{ fontSize: '17px' }}>25,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2782001-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Dior</Text>
            <Text>Brillant à lèvres Dior Addict</Text>
            <span style={{ fontSize: '17px' }}>50,00 $ - 54,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2767457-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Gisou</Text>
            <Text>Huile hydratante pour les lèvres infusée de miel</Text>
            <span style={{ fontSize: '17px' }}>38,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2781565-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Summer Fridays</Text>
            <Text>Beurre pour les lèvres pour hydratation et...</Text>
            <span style={{ fontSize: '17px' }}>32,50 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2750081-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Dior</Text>
            <Text>Huile pour les lèvres Lip Glow</Text>
            <span style={{ fontSize: '17px' }}>54,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2753598-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Tower 28 Beauty</Text>
            <Text>Gelée pour les lèvres non collante ShineOn</Text>
            <span style={{ fontSize: '17px' }}>22,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2707735-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>SEPHORA COLLECTION</Text>
            <Text>Masque pour les lèvres hydratant à la cerise</Text>
            <span style={{ fontSize: '17px' }}>4,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2707875-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>SEPHORA COLLECTION</Text>
            <Text>Baume hydratant pour les lèvres</Text>
            <span style={{ fontSize: '17px' }}>10,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2762920-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Peter Thomas Roth</Text>
            <Text>Timbres de gel hydratant pour les yeux Clinically...</Text>
            <span style={{ fontSize: '17px' }}>11,00 $</span>
          </Box>

        </Container>


        <IconButton
          aria-label="Scroll right"
          icon={<FaChevronRight />}
          onClick={scrollRight}
          className="slider-button right"
        />

      </div>
    </>
  );
};
export default CardSlider2;
