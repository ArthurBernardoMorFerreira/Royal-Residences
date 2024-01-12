import { Box, Typography, styled as styledMUI } from "@mui/material"

import styled from "styled-components"
import { Color } from '../../../assets/Color/index';

type ClientPropsContainer = {
  height: string
  width: string
  translateX?: string
  src: string
  zIndex?: string
}

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url('./public/img/Background Image/Pexels Photo by Maria Salazar.png');
  overflow-y: hidden;
`

const TitleContainer = styledMUI(Box)((() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '4rem',
})))

const Title = styledMUI(Typography)(() => ({
  textAlign: 'center',
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '400',
  textTransform: 'capitalize',
  color: `${Color.clearWhiteColor}`,
  overflow: 'hidden',
  zIndex: 1,
}))

const Underline = styled.hr`
  width: 10.5rem;
  background: ${Color.clearWhiteColor};
  padding: 0.05rem 0;
  margin-top: 20px;
  border-radius: 10px;
  z-index: 1;
`

const ClientContainer = styledMUI(Box)(() => ({
  position: 'absolute',
  bottom: '0',
  background: 'rgb(15, 18, 23, 0.90)',
}))

const ClientImageContainer = styledMUI(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  zIndex: '1',
}))

function ClientImage({ height, width, translateX, src, zIndex }: ClientPropsContainer) {
  const ClientImageProp = styled.img`
    height: ${height};
    width: ${width};
    border-radius: 50%;
    border: 8px solid #FFF;
    outline: 5px solid ${Color.clearBlackColor};
    transform: translateX(${translateX});
    z-index: ${zIndex};
  `
  
  return (
    <ClientImageProp
      src={src}
    />
  )
}

const PointIconContainer = styledMUI(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

const Image = styled.img`
  position: absolute;
  z-index: 1;
`

const ClientName = styledMUI(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '700',
  textTransform: 'capitalize',
  color: `${Color.defaultSecundaryColor}`,
  overflow: 'hidden',
}))

const Commentaries = styledMUI(Typography)(() => ({
  fontFamily: 'Raleway',
  fontSyle: 'normal',
  fontWeight: '400',
  color: `${Color.clearWhiteColor}`,
  margin: '0 auto',
}))

const ArrowIconContainer = styledMUI(Box)(() => ({
  display: 'flex',
  position: 'absolute',
  top: '0',
  bottom: '50%',
  justifyContent: 'space-between',
  height: '100%',
}))

const ArrowLeftIcon = styled.img`
  cursor: pointer;
`

const ArrowRightIcon = styled.img`
  cursor: pointer;
`

export {
  Section,
  TitleContainer,
  Title,
  Underline,
  ClientContainer,
  ClientImageContainer,
  ClientImage,
  PointIconContainer,
  Image,
  ClientName,
  Commentaries,
  ArrowIconContainer,
  ArrowLeftIcon,
  ArrowRightIcon,
}