import { Box, Stack, Typography } from "@mui/material";

import styled from "styled-components"
import { styled as styledMUI } from "@mui/material/styles"

import { Color } from '../../../assets/Color/index';

import LayoutStylization from "../../../assets/Layout";

export const Section = styled.section`
  width: 100vw;
  background: ${Color.defaultBlackColor};
`

export const Title = styledMUI(Typography)(() => ({
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '700',
  textTransform: 'capitalize',
  color: Color.brightWhiteColor,
  overflow: 'hidden',
}))

export const DirectionContainer = styledMUI(Stack)(() => ({
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const Paragraph = styledMUI(Typography)(() => ({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '400',
  color: Color.clearWhiteColor,
  margin: '4rem 10px 4rem 0',
}))

export const ButtonContainer = styledMUI(Box)(() => ({}))

export const HorizontalScrollContainerImages = styledMUI(Box)(() => ({
  padding: `-${LayoutStylization.paddingX} ${LayoutStylization.paddingY}`,
  overflowX: 'scroll',
}))