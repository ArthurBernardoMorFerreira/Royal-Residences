import { Box } from '@mui/material'

import {
  Section,
  SectionTitle,
  ImagesBox,
  Set1OfImages,
  Set2OfImages,
  ContainerImgTxt,
  ContainerDirection,
  Text,
  BoxText,
} from './stylization'

import {
  MainPresentationImage,
  PresentationImage
} from '../../../functions/PresentationImages'

function WhyUs() {
  return (
    <Section>
      <Box
        padding={{xs: '0rem', md: '4rem'}}
      >
        <ContainerImgTxt>
          <ContainerDirection
            flexDirection={{md: 'row', lg: 'row'}}
            flexWrap={{xs: 'wrap-reverse', md: 'wrap-reverse', lg: 'nowrap'}}
          >
            <ImagesBox
              flexDirection={{xs: 'column', md: 'row'}}
              marginLeft={{xs: '0', md: '10%', lg: '0'}}
            >
              <Set1OfImages
                maxWidth={{xs: '100%', md: 'auto'}}
              >
                <PresentationImage
                  height="320"
                  width="320"
                  src='./img/House Image/House Image 03.png'
                  alt='House Presentation'
                />
                <PresentationImage
                  height="320"
                  width="320"
                  src='./img/House Image/House Image 02.png'
                  alt='House Presentation'
                />
              </Set1OfImages>
              <Set2OfImages
                right={{xs: '0%', md: '25%', lg: '25%'}}
                maxWidth={{xs: '100%', md:'auto'}}
                margin={{xs: '15px 0', md: '0'}}
              >
                <Box
                  display={{xs: 'none', md: 'block'}}
                >
                  <MainPresentationImage
                    height="320"
                    width="500"
                    src='./img/House Image/House Image 01.png'
                    alt='House Presentation'
                  />
                </Box>
                <Box
                  display={{xs: 'grid', md: 'none'}}
                  justifyContent='center'
                >
                  <PresentationImage
                    height='320'
                    width='320'
                    src='./img/House Image/House Image 01.png'
                    alt='House Presentation - phone'
                  />
                </Box>
              </Set2OfImages>
            </ImagesBox>

            <BoxText
              width={{md: '80%', lg: '55%'}}
              margin={{xs: '2rem 0', md: '2rem 0'}}
            >
              <SectionTitle
                variant="h3"
                fontSize={{xs: '2rem', md: '3rem'}}
              >
                Why choose us?
              </SectionTitle>

              <Text
                width={{xs: '12rem', md: 'auto'}}
                marginBottom={{md: '2rem'}}
              >
                Our homes are designed to offer you the perfect blend of comfort, 
                elegance, and sophistication, all while providing the highest standards 
                of quality and craftsmanship.
              </Text>
            </BoxText>
          </ContainerDirection>
        </ContainerImgTxt>
      </Box>
    </Section>
  )
}

export default WhyUs