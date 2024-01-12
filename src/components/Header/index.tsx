import { Box, useMediaQuery, useTheme } from '@mui/material'
import {
  Section,
  LogoContainer,
  Title,
  Logo,
  TextContainer,
  Paragraph,
  ButtonContainer,
  ButtonMUI,
} from './stylization'

import LayoutStylization from '../../assets/Layout';

function Header() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Section>
      <Box
        display={{md: 'flex', lg: 'block'}}
        justifyContent='space-between'
        alignItems='center'
        marginTop={{md: '5rem', lg: '0'}}
      >
        <LogoContainer
          display='flex'
          justifyContent={{xs: 'center', md: 'flex-start', lg: 'flex-start'}}
        >
          <Logo
            src='./img/Icon/Logo.png'
            alt='Logo'
          />
        </LogoContainer>

        <Title
          display={{xs: 'none', md: 'flex'}}
          width={{md: '30rem', lg: '40rem'}}
          lineHeight={{md: '4.5rem', lg: '5.5rem'}}
          variant={isLargeScreen ? 'h2' : 'h3'}
          paddingLeft={LayoutStylization.paddingX}
        >
          Amazing homes, lavish lifestyles
        </Title>
      </Box>
      <TextContainer
        bgcolor={{xs: '#0F1217', md: '#0F1217', lg: 'rgba(15, 18, 23, 80%)'}}
      >
        <Title
          display={{xs: 'flex', md: 'none'}}
          justifyContent={{xs: 'center', md: 'flex-start', lg: 'flex-start'}}
          variant={isLargeScreen ? 'h2' : 'h5'}
        >
          Amazing homes, lavish lifestyles
        </Title>
        <Paragraph
          display={{xs: 'none', md: 'block', lg: 'block'}}
          marginTop={{xs: '50px', md: '0', lg: '0'}}
        >
          Royal Residences showcases exquisite luxury homes and mansions for sale, 
          providing unparalleled quality and service. Sale of luxury homes and mansions 
          with personalized service and impeccable quality by Royal Residences.
        </Paragraph>
        <Paragraph
          display={{xs: 'block', md: 'none', lg: 'none'}}
          marginTop={{xs: '50px', md: '0', lg: '0'}}
        >
          Royal Residences showcases exquisite luxury homes and mansions for sale, 
          providing unparalleled quality and service.
        </Paragraph>
        <ButtonContainer
          display='flex'
          justifyContent={{xs: 'center', md: 'center', lg: 'flex-end'}}
          marginTop={{xs: '50px', md: '50px', lg: '0'}}
        >
          <ButtonMUI
            variant='contained'
            size='large'
          >
            Contact us
          </ButtonMUI>
        </ButtonContainer>
      </TextContainer>
    </Section>
  )
}

export default Header