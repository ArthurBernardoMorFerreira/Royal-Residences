import { Box, Typography } from "@mui/material"

import styled from "styled-components";
import { styled as styledMUI } from '@mui/material/styles';
import { Color } from "../../../assets/Color";

export const Section = styled.section`
  display: grid;
  align-items: center;
  height: 100vh;
`

export const HousePresentationBg = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: url('./img/Background Image/House Presentation Container To Buy.png');
  filter: brightness(60%);
  z-index: -1;
`

export const MessagePosition = styledMUI(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
}))

export const LineBox = styledMUI(Box)(() => ({
  display: 'flex',
  position: 'absolute',
}))

export const Paragraph = styledMUI(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  maxHeight: '70%',
  textAlign: 'justify',
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '4.2rem',
  color: Color.clearWhiteColor,
  margin: '0 1rem',
}))

export const Set1OfLines = styledMUI(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}))

export const Set2OfLines = styledMUI(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transform: 'rotate(180deg)',
}))

export const Lines = styledMUI(Box)(() => ({
  display: 'flex',
  margin: '20px',
}))