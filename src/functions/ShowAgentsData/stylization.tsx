import { styled as styledMUI, Box, Typography } from "@mui/material"
import { Color } from "../../assets/Color"

import styled from "styled-components"

type AgentImageProps = {
  src: string
  alt: string
}

type ChildrenInfo = {
  children: string
}

const Agent = styledMUI(Box)(() => ({
  display: 'flex',
  position: 'relative',
}))

const AgentImageContainer = styledMUI(Box)(() => ({
  height: '19rem',
  maxWidth: '50%',
  minWidth: '70%',
  overflow: 'hidden',
}))

function AgentImage({ src, alt }: AgentImageProps) {
  const AgentImage = styled.img`
    height: 100%;
    width: 100%;
  `

  return (
    <AgentImage 
      src={src}
      alt={alt}
    />
  )
} 

const AgentDescriptionContainer = styledMUI(Box)(() => ({
  display: 'grid',
  gap: '0.7rem 0',
  height: '19rem',
  width: '19rem',
  background: `${Color.strongBlackColor}`,
  padding: '2rem',
  borderRadius: '0 1.25rem 1.25rem 0',
}))

function AgentName({ children }: ChildrenInfo) {
  const Name = styledMUI(Typography)(() => ({
    fontFamily: 'Glacial Indifference',
    fontStyle: 'normal',
    fontWeight: '700',
    textTransform: 'capitalize',
    color: Color.strongSecundaryColor,
    wordBreak: 'break-word'
  }))

  return (
    <Name
      variant="h6"
    >
      {children}
    </Name>
  )
}

function BeforeHeartIcon() {
  const BeforeHeartIcon = styled.img`
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    `

  return (
    <BeforeHeartIcon 
      src="src/assets/Image/Icon/Before Heart.png"
      alt="Before Heart"
    />
  )
}

function AfterHeartIcon() {
  const AfterHeartIcon = styled.img`
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  `

  return (
    <AfterHeartIcon 
      src="src/assets/Image/Icon/After Heart.png"
      alt="After Heart"
    />
  )
}

function JobTitle({ children }: ChildrenInfo) {
  const JobTitle = styledMUI(Typography)(() => ({
    fontFamily: 'Glacial Indifference',
    fontStyle: 'normal',
    fontWeight: '700',
    textTransform: 'capitalize',
    color: Color.clearWhiteColor,
    wordBreak: 'break-word'
  }))

  return (
    <JobTitle
      variant="h6"
    >
      {children}
    </JobTitle>
  )
}

function EmailIcon() {
  const EmailIcon = styled.img`
    width: 1.2rem;
  `

  return (
    <EmailIcon
      src="src/assets/Image/Icon/Email Icon.png"
      alt='Email Icon'
    />
  )
}

function AgentEmail({ children }: ChildrenInfo) {
  const AgentEmail = styledMUI(Typography)(() => ({
    fontSize: '0.7rem',
    fontFamily: 'Glacial Indifference',
    fontStyle: 'normal',
    fontWeight: '700',
    textTransform: 'lowercase',
    color: `${Color.clearWhiteColor}`,
    wordBreak: 'break-word'
  }))

  return (
    <AgentEmail>
      {children}
    </AgentEmail>
  )
}

function AgentProfessionalExperience({ children }: ChildrenInfo) {
  const AgentProfessionalExperience = styledMUI(Typography)(() => ({
    fontSize: '0.8rem',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.2rem',
    textTransform: 'capitalize',
    color: `${Color.clearWhiteColor}`,
    wordBreak: 'break-word'
  }))
  
  return (
    <AgentProfessionalExperience>
      {children}
    </AgentProfessionalExperience>
  )
}

const Line = styled.hr`
  position: absolute;
  right: 0;
  height: 20%;
  width: 0.10rem;
  background: ${Color.strongSecundaryColor};
  border: none;
`

export {
  Agent,
  AgentImageContainer,
  AgentImage,
  AgentDescriptionContainer,
  AgentName,
  BeforeHeartIcon,
  AfterHeartIcon,
  JobTitle,
  EmailIcon,
  AgentEmail,
  AgentProfessionalExperience,
  Line
}