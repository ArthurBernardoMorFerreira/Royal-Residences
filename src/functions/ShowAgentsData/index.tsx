import { useState } from "react"

import { Box } from "@mui/material"

import {
  AfterHeartIcon,
  Agent, 
  AgentDescriptionContainer, 
  AgentEmail, 
  AgentImage, 
  AgentImageContainer,
  AgentName,
  AgentProfessionalExperience,
  BeforeHeartIcon,
  EmailIcon,
  JobTitle,
  Line
} from "./stylization"

type AgentProps = {
  AgentImageProp: string
  AgentAltProp: string
  AgentNameProp: string
  JobTitleProp: string
  AgentEmailProp: string
  AgentProfessionalExperienceProp: string
}

function ShowAgents(
  {
    AgentImageProp,
    AgentAltProp,
    AgentNameProp,
    JobTitleProp,
    AgentEmailProp,
    AgentProfessionalExperienceProp,
  }
  : AgentProps) {
    
  const [IsBeforeHeartIcon, setIsBeforeHeartIcon] = useState<boolean>(true)

  return (
    <Agent
      display={{xs: 'grid', md: 'flex'}}
      alignItems='center'
      justifyContent={{xs: 'center', md: 'auto'}}
    >
      <AgentImageContainer
        display='grid'
        justifyContent={{xs: 'center', md: 'auto'}}
        height={{xs: '100%', md: '19rem'}}
        minWidth={{xs: '90%', md: '20%'}}
      >
        <AgentImage
          src={AgentImageProp}
          alt={AgentAltProp}
        />
      </AgentImageContainer>
      <AgentDescriptionContainer
        minWidth={{xs: '90%', md: 'auto'}}
        marginBottom={{xs: '2rem', md: 'auto'}}
        borderRadius={{xs: '0 0 1.25rem 1.25rem', md: '0 1.25rem 1.25rem 0'}}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='0 10px'
        >
          <AgentName>
            {AgentNameProp}
          </AgentName>
          <div
            onClick={() => setIsBeforeHeartIcon(!IsBeforeHeartIcon)}
          >
            { IsBeforeHeartIcon && <BeforeHeartIcon /> || <AfterHeartIcon /> }
          </div>
        </Box>
        <JobTitle>
          {JobTitleProp}
        </JobTitle>
        <Box
          display='flex'
          alignItems='center'
          gap='0 10px'
        >
          <EmailIcon />
          <AgentEmail
          >
            {AgentEmailProp}
          </AgentEmail>
        </Box>
        <AgentProfessionalExperience>
          {AgentProfessionalExperienceProp}
        </AgentProfessionalExperience>
      </AgentDescriptionContainer>
      <Box
        display={{xs: 'none', md: 'grid'}}
        alignItems='center'
      >
        <Line />
      </Box>
    </Agent>
  )
}

export default ShowAgents