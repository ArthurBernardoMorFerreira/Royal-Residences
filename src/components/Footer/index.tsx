import { Box, Container } from '@mui/material'
import { 
  Section,
  Logo,
  WatchOutMessage,
  Line,
  LineVertical,
  LineTitle,
  TextTitle,
  Text,
  SocialMediaContainer,
} from './stylization'

function Footer() {
  return (
    <Section>
      <Box
        display='flex'
        justifyContent='center'
        flexWrap={{xs: 'wrap-reverse', md: 'wrap-reverse', lg: 'nowrap'}}
      >
        <Box
          display='flex'
          alignItems='center'
          gap='0 4.25rem'
          width={{md: '100%', lg: '40%'}}
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent={{md: 'center', lg: 'none'}}
            flexDirection={{xs: 'column', md: 'row', lg: 'column'}}
            gap={{xs: '4rem 0', md: '0 4rem', lg: '4rem 0'}}
            width='100%'
            margin={{xs:'5rem 0', md: '5rem 0 0 0', lg: '0'}}
          >
            <Logo
              src='./img/Icon/Logo.png'
              alt='Logo'
            />
            <Box
              display={{xs: 'none', md: 'block', lg: 'none'}}
            >
              <Line />
            </Box>
            <Box
              display={{xs: 'block', md: 'none'}}
            >
              <LineVertical />
            </Box>
            <WatchOutMessage
              width={{md: '40%', lg: '100%'}}
            >
              Simply fictional design and website of
              the printing and typesetting industry
            </WatchOutMessage>
          </Box>
          <Box
            display={{xs: 'none', md: 'none', lg: 'block'}} 
          >
            <Line />
          </Box>
        </Box>

        <Box
          display={{xs: 'grid', md: 'flex'}}
          justifyContent={{xs: 'center', md: ''}}
          gap={{xs: '4rem 0'}}
          width={{xs: '100%', md: '100%', lg: '60%'}}
          marginLeft={{xs:'0', md: '4rem'}}
        >
          <Container>
            <Box
              display='flex'
              alignItems='center'
            >
              <LineTitle />
              <TextTitle
                variant='h5'
              >
                Pages
              </TextTitle>
            </Box>
            <Box
              display='grid'
              gap='1rem 0'
              margin='1rem 0 0 1rem'
            >
              <Text>
                Home page
              </Text>
              <Text>
                About us
              </Text>
              <Text>
                Blog and news
              </Text>
              <Text>
                Contact us
              </Text>
            </Box>
          </Container>
          <Container>
            <Box
              display='flex'
              alignItems='center'
            >
              <LineTitle />
              <TextTitle
                variant='h5'
              >
                Support
              </TextTitle>
            </Box>
            <Box
              display='grid'
              gap='1rem 0'
              margin='1rem 0 0 1rem'
            >
              <Text>
                Home page
              </Text>
              <Text>
                About us
              </Text>
              <Text>
                Blog and news
              </Text>
              <Text>
                Contact us
              </Text>
            </Box>
          </Container>
          <Container>
            <Box
              display='flex'
              alignItems='center'
            >
              <LineTitle />
              <TextTitle
                variant='h5'
              >
                Contact
              </TextTitle>
            </Box>
            <Box
              display='grid'
              gap='1rem 0'
              margin='1rem 0 0 1rem'
            >
              <SocialMediaContainer>
                <img
                  src="./img/Social Media/Meta.png"
                  alt="Meta"
                  height='30'
                />
                <img
                  src="./img/Social Media/Twitter.png"
                  alt="Twitter"
                  height='30'
                />
                <img
                  src="./img/Social Media/Linkedin.png"
                  alt="Linkedin"
                  height='30'
                />
              </SocialMediaContainer>
              <Text>
                +1-234-456-789
              </Text>
              <Text>
                +1-234-456-789
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </Section>
  )
}

export default Footer