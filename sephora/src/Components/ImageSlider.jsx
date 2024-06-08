import { Box, Container, Heading, Text, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Styles/ImageSlider.css';

const ImageSlider = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>

      <div className="slider-container1">
        <IconButton
          aria-label="Scroll left"
          icon={<FaChevronLeft />}
          onClick={scrollLeft}
          className="slider-button left1"
        />

        <Container className="box-container" ref={containerRef}>

          <Box className="cards1">
                <img src="https://www.sephora.com/ca_fr/contentimages/2024-may-clean-makeup-story-site-desktop-home-page-rwd-hero-banner-lip-1200x800-can-3183.jpg?imwidth=545" />

                <div className='down-box1'>
                    <Heading as='h2' size='md'>Favoris tendance pour les lèvres</Heading>
                    <Text>Salutations à ILIA, Tower 28 Beauty, Summer Fridays et plus encore.</Text>
                    <span style={{ fontSize: '15px' }}>EN SAVOIR PLUS ▸</span>
                </div>
          </Box>


          <Box className="cards1">
                <img src="https://www.sephora.com/ca_fr/contentimages/2024-06-05-slotting-just-arrived-v4-standard-site-rwd-home-page-hero-banner-english-CA-handoff_01.jpg?imwidth=545" />



                <div className='down-box2'>
                    <Heading as='h2' size='md'>Arrivage de nouveaux essentiels beauté!</Heading>
                    <Text>Découvrez les nouveautés Summer Fridays.</Text>
                    <span style={{ fontSize: '15px' }}>MAGASINER ▸</span>
                </div>
          </Box>


          <Box className="cards1">
                <img src="https://www.sephora.com/ca_fr/contentimages/2024-5-30-fday-fragrance-site-desktop-mobile-app-home-page-rwd-hero-banner-1200x800-can-2966.jpg?imwidth=545" />


                <div className='down-box3'>
                    <Heading as='h2' size='md'>Cadeaux parfumés pour la fête des Pères</Heading>
                    <Text>Offrez de nouveaux parfums tendance aux pères dans votre vie.</Text>
                    <span style={{ fontSize: '15px' }}>MAGASINER ▸</span>
                </div>
          </Box>


          <Box className="cards1">
                <img src="https://www.sephora.com/ca_fr/contentimages/2024-05-27-slotting-just-arrived-v3-site-rwd-home-page-hero-banner-english-CA-handoff_01.jpg?imwidth=545" />


                <div className='down-box4'>
                    <Heading as='h2' size='md'>Nouvel arrivage</Heading>
                    <Text>Les nouveautés beauté des marques les plus populaires.</Text>
                    <span style={{ fontSize: '15px' }}>MAGASINER ▸</span>
                </div>
          </Box>


          <Box className="cards1">
                <img src="https://www.sephora.com/ca_fr/contentimages/homepage/050124/2024-05-gamification-clean-site-home-page-RWD-hero-banner-img-only-us-can-shared-2000x2000.jpeg?imwidth=545" />



                <div className='down-box5'>
                    <Heading as='h2' size='md'>Un nouveau défi Beauty Insider est là!</Heading>
                    <Text>Accomplissez des tâches comme l’achat d’un produit de soins capillaires ou de soins de la peau Pur et sain Sephora pour accumuler des points. Des modalités s’appliquent.</Text>
                    <span style={{ fontSize: '15px' }}>S’INSCRIRE À UN DÉFI ▸</span>
                </div>
          </Box>


          <Box className="cards1">
                <img src="https://www.sephora.com/ca_fr/contentimages/2024-05-21-slotting-serums-by-concern-site-rwd-home-page-hero-banner-new-static-english-us_01.jpg?imwidth=545" />


                <div className='down-box6'>
                    <Heading as='h2' size='md'>Sérums essentiels</Heading>
                    <Text>Des solutions favorites qui ciblent l’aspect terne et la sécheresse.</Text>
                    <span style={{ fontSize: '15px' }}>MAGASINER ▸</span>
                </div>
          </Box>

        </Container>

        <IconButton
          aria-label="Scroll right"
          icon={<FaChevronRight />}
          onClick={scrollRight}
          className="slider-button right1"
        />

      </div>
    </>
  );
};

export default ImageSlider;
