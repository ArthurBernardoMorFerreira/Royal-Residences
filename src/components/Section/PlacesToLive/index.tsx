import {
  Section,
  Title,
  DirectionContainer,
  Paragraph,
  ButtonContainer,
  HorizontalScrollContainerImages,
} from './stylization'

import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

import ImagesContainer from "../ImagesContainer";

function PlacesToLive() { 
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Section>
      <Box
        padding={{xs: '2rem', md: '4rem'}}
      >
        <Title
          variant={
            isMediumScreen ? 'h3' : 'h4'
          }
        >
          Live where you want to live
        </Title>

        <DirectionContainer
          direction={{sm: 'column', md: 'column', lg: 'row'}}
        >
          <Paragraph
            width={{md: '98%', lg: '90%'}}
          >
            Our luxury residences are located in the most sought-after regions, 
            allowing our residents to immerse themselves in the vibrant energy of 
            cosmopolitan cities or enjoy the tranquility of the natural environment.
          </Paragraph>

          <ButtonContainer
            display={{xs: 'flex'}}
            justifyContent={{xs: 'center', md: 'center'}}
            marginTop={{sm: '20px', md: '0'}}
          >
            <Button
              variant="contained"
            >
              Meet us
            </Button>
          </ButtonContainer>
        </DirectionContainer>

        <HorizontalScrollContainerImages
          width={{lg: 'auto'}}
        >
          <ImagesContainer />
        </HorizontalScrollContainerImages>
      </Box>
    </Section>
  )
}

export default PlacesToLive