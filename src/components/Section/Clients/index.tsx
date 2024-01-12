import {
  Section,
  Underline,
  TitleContainer,
  Title,
  ClientContainer,
  ArrowIconContainer,
  ArrowLeftIcon,
  ArrowRightIcon,
  ClientImageContainer,
  PointIconContainer,
  Image,
  ClientName,
  Commentaries,
} from './stylization'

import { Box, useMediaQuery, useTheme } from '@mui/material'

import ShowEachClientFullName from '../../../functions/ShowClientsData/ShowClientFullName';
import ShowEachClientsCommentaries from '../../../functions/ShowClientsData/ShowClientsCommentaries';
import { ImageClient1Selected, ImageClient2Selected, ImageClient3Selected } from '../../../functions/ShowClientsData/ShowClientsImage';

import { useChangeClientsImage } from '../../../store/ChangeClientsImage';

function Clients() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  
  const { dec, count, inc, resetInc, resetDec } = useChangeClientsImage();

  return (
    <Section>
      <TitleContainer>
        <Title
          variant="h3"
        >
          Happy Clients
        </Title>

        <Underline />
      </TitleContainer>

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='100%'
      >
        <ClientImageContainer
          marginTop={{xs: '5rem', lg: '3rem'}}
        >
          <ImageClient1Selected />
          <ImageClient2Selected />
          <ImageClient3Selected />
        </ClientImageContainer>
        <ClientContainer
          height={{xs: '100vh', md: '60%'}}
          width={{md: '100vw', lg: '80%'}}
          margin={{md: '0', lg: '0 0 2rem 0'}}
          borderRadius='1.25rem'
          overflow='hidden'
        >
          <PointIconContainer
            marginTop={{xs: '20rem', md: '1rem', lg: '2rem'}}
          >
            <Image
              src="./public/img/Icon/Point Icon.png"
              alt="Point Icon"
            />
          </PointIconContainer>
          
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            gap='2rem 0'
            height={{xs: '60%', md: '100%'}}
            width='90%'
            margin='0 auto'
          >
            <ClientName
              variant={isMediumScreen ? 'h3' : 'h4'}
            >
              <ShowEachClientFullName />
            </ClientName>
            
            <Commentaries
              variant={isMediumScreen ? 'h5' : 'h6'}
              width={{xs: '100%', md: '80%'}}
              marginBottom={{xs: '1rem', md: '2rem'}}
            >
              <ShowEachClientsCommentaries />
            </Commentaries>
          </Box>

          <Box
            display='flex'
            justifyContent='center'
          >
            <ArrowIconContainer
              alignItems={{xs: 'flex-end', md: 'center'}}
              width={{xs: '70%', md: '95%'}}
              position='relative'
              top={{xs: '-2rem', md: '0'}}
            >
              <ArrowLeftIcon
                src='./public/img/Icon/Arrow-Left Icon.png'

                onClick={() => {
                  count < 1 ? resetDec() : count
                  
                  dec()
                }}
              />
              <ArrowRightIcon
                src='./public/img/Icon/Arrow-Right Icon.png'
                onClick={() => {
                  count > 3 ? resetInc() : count
                  
                  inc()
                }}
              />
            </ArrowIconContainer>
          </Box>
        </ClientContainer>
      </Box>
    </Section>
  )
}

export default Clients