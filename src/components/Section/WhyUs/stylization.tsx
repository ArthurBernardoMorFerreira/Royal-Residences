import { Box, Stack } from "@mui/system"
import { Typography } from "@mui/material"

import styled from "styled-components"
import { styled as styledMUI } from '@mui/material/styles'
import { Color } from "../../../assets/Color"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  background: ${Color.strongBlackColor};
`

export const SectionTitle = styledMUI(Typography)(() => ({
  textAlign: 'center',
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '700',
  textTransform: 'capitalize',
  color: `${Color.brightWhiteColor}`,
  overflow: 'hidden',
}))

export const ImagesBox = styledMUI(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}))

export const Set1OfImages = styledMUI(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px 0',
}))

export const Set2OfImages = styledMUI(Box)(() => ({
  position: 'relative',
  backgroundSize: 'cover',
}))

export const ContainerImgTxt = styledMUI(Stack)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

export const ContainerDirection = styledMUI(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const Text = styledMUI(Typography)(() => ({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '400',
  color: `${Color.clearWhiteColor}`,
  marginTop: '2.12rem',
}))

export const BoxText = styledMUI(Box)(() => ({}))