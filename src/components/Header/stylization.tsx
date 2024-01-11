import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material';
import { Color } from '../../assets/Color';
import LayoutStylization from '../../assets/Layout';

export const Section = styled.header`
  height: 100vh;
  width: 100vw;

  background: url('./src/assets/Image/Background Image/House Presentation Container.PNG')
  ;
  background-size: cover;
`

export const LogoContainer = styledMUI(Box)(() => ({
  paddingLeft: `${LayoutStylization.paddingX}`,
  paddingRight: `${LayoutStylization.paddingX}`,
  paddingTop: `${LayoutStylization.paddingY}`,
  paddingBottom: `${LayoutStylization.paddingY}`,
}))

export const Logo = styled.img`
  height: 5rem;
  width: 4rem;
`

export const Title = styledMUI(Typography)(() => ({
  fontfamily: 'Glacial Indifference',
  fontWeight: '700',
  textTransform: 'capitalize',
  color: Color.clearWhiteColor,
  overflow: 'hidden',
}))

export const TextContainer = styledMUI(Box)(() => ({
  position: 'absolute',
  bottom: '0',
  width: '100vw',
  padding: `${LayoutStylization.paddingY} ${LayoutStylization.paddingX}`,
  overflow: 'hidden',
}))

export const Paragraph = styledMUI(Typography)(() => ({
  fontFamily: 'Raleway',
  fontSize: '1.28rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '2.28125rem',
  color: Color.clearWhiteColor,
}))

export const ButtonContainer = styledMUI(Typography)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: '1rem',
}))

export const ButtonMUI = styledMUI(Button)(() => ({
  backgroundColor: Color.clearPrimaryColor,
  color: Color.clearWhiteColor,
  '&:hover': {
    backgroundColor: Color.strongPrimaryColor,
  },
}))