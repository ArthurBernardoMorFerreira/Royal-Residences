import { Box, useMediaQuery, useTheme } from '@mui/material'
import ShowAgents from '../../../functions/ShowAgentsData';

import { 
  Section,
  TitleContainer,
  Title,
  Line,
  HorizontalScrollContainer,
} from './stylization'

import AgentsImagesData from '../../../assets/Image/ImagesData/AgentsImages'

import LayoutStylization from "../../../assets/Layout"; 

function Agents() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Section>
      <Box
        paddingTop='5rem'
        paddingRight={{xs: '0', md: `${LayoutStylization.paddingX}`}} 
        paddingBottom='0' 
        paddingLeft={{xs: '0', md: `${LayoutStylization.paddingX}`}}
      >
        <TitleContainer>
          <Box
            display='flex'
            alignItems='center'
            flexDirection='column'
          >
            <Title
              variant={isLargeScreen ? 'h3' : 'h4'}
              overflow='hidden'
            >
              Meet our agent
            </Title>
            <Line />
          </Box>
        </TitleContainer>
        <Box
          width='100%'
          sx={{
            overflowX: 'scroll',
          }}
        >
          <HorizontalScrollContainer
            display={{md: 'grid', lg: 'flex'}}
            justifyContent='center'
            gap={{xs: '2rem 0', md: '2rem 0', lg: '0 2rem'}}
            width={{md: '100%', lg: '155vw'}}
            margin='0 auto 4rem auto'
          >
            {
              AgentsImagesData.map((agent) => (
                <ShowAgents
                  key={agent.Name}
                  AgentImageProp={agent.ImageURL}
                  AgentAltProp={agent.Alt}
                  AgentNameProp={agent.Name}
                  JobTitleProp={agent.JobTitle}
                  AgentEmailProp={agent.AgentEmail}
                  AgentProfessionalExperienceProp={agent.AgentProfessionalExperience}            
                />
              ))
            }
          </HorizontalScrollContainer>
        </Box>
      </Box>
    </Section>
  )
}

export default Agents