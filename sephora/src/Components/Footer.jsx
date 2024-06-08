import { Container, Box, Text,Heading,Flex, Input,Button } from '@chakra-ui/react';
import '../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCommentsDollar, } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
  return (
    <>
      <Box className='head-footer'>
        <Text>Des commentaires sur le site Web? Faites-les-nous savoir ▸</Text>
      </Box>


      <Box className='details'>

        <Flex justifyContent='center' alignItems='center'>
          <img style={{marginRight:'10px'}} className='icons' src='https://www.sephora.com/img/ufe/icons/find-store.svg'/>
          <Box >
            <span className='text-hover' style={{cursor:'pointer'}}>Trouver un magasin</span>
            <p className='text-hover' style={{marginTop:'5px', marginBottom:'-2px'}}>Choisissez votre magasin</p>
          </Box>
        </Flex>


        <Flex justifyContent='center' alignItems='center'>
          <FontAwesomeIcon fontSize='23px' className='icons' icon={faCommentsDollar} style={{marginRight:'10px'}}/>
          <Box >
            <span className='text-hover' style={{cursor:'pointer', textDecoration:''}}>Trouver un magasin</span>
            <p className='text-hover' style={{marginTop:'5px', marginBottom:'-2px'}}>Choisissez votre magasin</p>
          </Box>
        </Flex>


        <Flex justifyContent='center' alignItems='center'>
          <img style={{marginRight:'10px'}} src='https://www.sephora.com/img/ufe/icons/app.svg'/>
          <Box >
            <span className='text-hover' style={{cursor:'pointer'}}>Trouver un magasin</span>
            <p className='text-hover' style={{marginTop:'5px', marginBottom:'-2px'}}>Choisissez votre magasin</p>
          </Box>
        </Flex>


        <Flex justifyContent='center' alignItems='center'>
          <img style={{marginRight:'10px'}} src='https://www.sephora.com/img/ufe/icons/sms-ko.svg'/>
          <Box >
            <span className='text-hover' style={{cursor:'pointer'}}>Trouver un magasin</span>
            <p className='text-hover' style={{marginTop:'5px', marginBottom:'-2px'}}>Choisissez votre magasin</p>
          </Box>
        </Flex>

      </Box>

      <hr className='hr-row'/>

    <Container className='footer-cont'>

      <Box className='footer-boxes'>
        <Heading as='h5' size='sm'>À propos de Sephora</Heading>
        <Text>À propos de Sephora</Text>
        <Text>Carrières</Text>
        <Text>Transparence de la chaîne <br/>logistique</Text>
        <Text>Sociétés affiliées</Text>
        <Text>Événements spéciaux Sephora</Text>
        <Text>Cartes-cadeaux</Text>
        <Text>Sites Sephora Monde</Text>
        <Text>La diversité, l’équité et l’inclusion</Text>
        <Text>Sephora Accelerate</Text>
        <Text>La beauté (re)définie</Text>
        <Text>Signaler une vulnérabilité</Text>
      </Box>


      <Box className='footer-boxes'>
        <Heading as='h5' size='sm' >Mon Sephora</Heading>
        <Text>Membre Beauty Insider</Text>
        <Text>Profil de la collectivité</Text>
        <Text>État de la commande</Text>
        <Text>Historique des achats</Text>
        <Text>Paramètres du compte</Text>
        <Text>Recommandations des conseillers <br/>beauté</Text>
        <Text>Réapprovisionnement automatique</Text>
        <Text>Offres beauté</Text>
        <Text>Questionnaires et guides d’achat</Text>
        <Text>Foire aux récompenses<br/> Rewards Bazaar™</Text>
        <Text>Favoris</Text>
        <Text>Prendre rendez-vous</Text>
      </Box>


      <Box className='footer-boxes'>
        <Heading as='h5' size='sm' >– Aide</Heading>
        <Text>service à la clientèle de Sephora</Text>
        <Text>Retours et échanges</Text>
        <Text>Options de livraison et de<br/> ramassage</Text>
        <Text>Livraison</Text>
        <Text>Facturation</Text>
        <Text>Expéditions internationales</Text>
        <Text>FAQ sur les services de beauté</Text>
        <Text>Emplacements du magasin</Text>
        <Text>Commande en ligne</Text>
        <Text>Klarna et Afterpay</Text>
        <Text>Accessibilité</Text>
      </Box>


      <Box >
        <Heading as='h5' size='sm' >Région et langue</Heading>
        <Text className='und-ln'> <img width='24px' style={{marginRight:'10px'}} src='https://www.sephora.com/img/ufe/flags/us.svg'/>United States - English</Text>
        <Text className='und-ln'> <img width='24px' style={{marginRight:'10px'}} src='https://www.sephora.com/img/ufe/flags/ca.svg'/>Canada - English</Text>
        <Text ml={-22}>✔️ <img width='24px' style={{marginRight:'10px'}} src='https://www.sephora.com/img/ufe/flags/ca.svg'/>Canada - Français</Text>
      </Box>


      <Box>
        <Heading as='h2' size='sm' >Quelque chose de beau<br/>nous unit</Heading>
        <br/>
        <br/>
        <br/> 
        <span>Inscrivez-vous aux mises à jour par textos de Sephora</span>
        <br/><br/>
        <Input type='text'  color='teal'
        _placeholder={{ color: 'inherit' }} borderRadius={5} border='none' marginRight={10} p={15} paddingRight='70px' variant='filled' placeholder='Numero de telephone cellulaire'/>
        <Button color='teal' className='hvr' borderRadius={5} border='none' cursor='pointer' colorScheme='gray'  variant='outline'  p={15} >Continuer</Button>
        <br/>
        <br/>

        <span>S’inscrire pour recevoir les courriels de Sephora</span>
        <br/><br/>
        <Input type='email' color='tomato'
       _placeholder={{ color: 'inherit' }} borderRadius={5} border='none' marginRight={10} p={15} paddingRight='70px' variant='filled' placeholder='Veuillez inscrire votre adresse courriel'/>
        <Button color='tomato' className='hvr' borderRadius={5} border='none' cursor='pointer' colorScheme='gray'  variant='outline'  p={15} >Continuer</Button>
        
      </Box>
    </Container>

    <hr className='hr-row'/>

    <Box className='end-footer-cont'>
       <Box className='address' width='45%'>
          <Text>Sephora Beauty Canada, Inc. (160 Bloor St. East Suite 1100 Toronto, ON M4W 1B9 | Canada, sephora.ca) demande le consentement en son propre nom et au nom de Sephora USA, Inc. (350 Mission Street, Floor 7, San Francisco, CA 94105, sephora.com). Vous pouvez retirer votre consentement en tout temps.</Text>
          <br/>
          <Text>© 2024 Sephora USA, Inc. Tous droits réservés.</Text>
          <Text>Politique de confidentialité   Conditions d’utilisation   Accessibilité   Plan du site   Préférences en matière de témoins</Text>
          <Text>1-877-737-4672    ATS : 1-888-866-9845</Text>
       </Box>


       <Box display='flex' width='45%' gap={15} justifyContent='center'>
       <img style={{width:'32px', height:'32px', marginTop:'30px', cursor:'pointer'}} src='https://www.sephora.com/img/ufe/icons/instagram-ko.svg'/>
       <img style={{width:'32px', height:'32px', marginTop:'30px', cursor:'pointer'}} src='https://www.sephora.com/img/ufe/icons/facebook-ko.svg'/>
       <img style={{width:'32px', height:'32px', marginTop:'30px', cursor:'pointer'}} src='https://www.sephora.com/img/ufe/icons/twitter-ko.svg'/>
       <img style={{width:'32px', height:'32px', marginTop:'30px', cursor:'pointer'}} src='https://www.sephora.com/img/ufe/icons/youtube-ko.svg'/>
       <img style={{width:'32px', height:'32px', marginTop:'30px', cursor:'pointer'}} src='https://www.sephora.com/img/ufe/icons/pinterest-ko.svg'/>
       <img style={{width:'32px', height:'32px', marginTop:'30px', cursor:'pointer'}} src='https://www.sephora.com/img/ufe/icons/snapchat-ko.svg'/>
       <img style={{width:'32px', height:'32px', marginTop:'30px', cursor:'pointer'}} src='https://www.sephora.com/img/ufe/icons/tiktok-ko.svg'/>
       </Box>
    </Box>
    </>
  )
}

export default Footer;
