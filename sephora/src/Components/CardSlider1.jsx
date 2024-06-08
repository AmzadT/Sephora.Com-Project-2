import { Box, Container, Heading, Text, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Styles/CardSlider1.css';

const CardSlider1 = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Heading marginTop={60} textAlign="center" marginBottom={-10}>Choisis pour vous</Heading>


      <div className="slider-container">
        <IconButton
          aria-label="Scroll left"
          icon={<FaChevronLeft />}
          onClick={scrollLeft}
          className="slider-button left"
        />


        <Container className="cards-container" ref={containerRef}>

  
          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2640241-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Rare Beauty by Selena Go...</Text>
            <Text>Fard à joues liquide Soft Pinch</Text>
            <span style={{ fontSize: '17px' }}>19,00 $ - 32,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2495497-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Summer Fridays</Text>
            <Text>Beurre pour les lèvres pour hydratation et...</Text>
            <span style={{ fontSize: '17px' }}>32,50 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2461150-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>SEPHORA COLLECTION</Text>
            <Text>Duo illuminateur Golden Hour</Text>
            <span style={{ fontSize: '17px' }}>9,60 $ 24,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2774768-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Sol de Janeiro</Text>
            <Text>Brume parfumée Carioca Crush</Text>
            <span style={{ fontSize: '17px' }}>32,50 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2743060-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>LANEIGE</Text>
            <Text>Baume brillant à lèvres</Text>
            <span style={{ fontSize: '17px' }}>25,50 $</span>
          </Box>

  
          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2683464-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Gisou</Text>
            <Text>Huile hydratante pour les lèvres infusée de miel</Text>
            <span style={{ fontSize: '17px' }}>38,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2031391-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>The Ordinary</Text>
            <Text>Sérum régulateur de sébum avec niacinamide...</Text>
            <span style={{ fontSize: '17px' }}>6,60 $ - 23,50 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2535581-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>Glow Recipe</Text>
            <Text>Lotion tonique resserrant les pores PHA + BHA...</Text>
            <span style={{ fontSize: '17px' }}>22,00 $ - 47,50 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2739415-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>HUDA BEAUTY</Text>
            <Text>poudre libre cuite et fixateur Easy Bake</Text>
            <span style={{ fontSize: '17px' }}>30,00 $ - 52,00 $</span>
          </Box>


          <Box className="cards">
            <img src="https://www.sephora.com/productimages/sku/s2737005-main-zoom.jpg?imwidth=166" />
            <Text className='bolder'>MILK MAKEUP</Text>
            <Text>Encre pour les lèvres et les joues en gelée teintée...</Text>
            <span style={{ fontSize: '17px' }}>19,00 $ - 33,00 $</span>
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

export default CardSlider1;
