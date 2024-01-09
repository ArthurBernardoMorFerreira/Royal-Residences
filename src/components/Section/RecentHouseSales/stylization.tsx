import { Box, Typography } from "@mui/material"

import styled from "styled-components";
import { styled as styledMUI } from '@mui/material/styles';
import { Color } from "../../../assets/Color"

import LayoutStylization from "../../../assets/Layout";

export const Section = styled.section``

export const SalesHouseRectangle = styledMUI(Box)(() => ({
  backgroundColor: Color.defaultBlackColor
}))

export const Title = styledMUI(Typography)(() => ({
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '3.5rem',
  textTransform: 'capitalize',
  color: Color.brightWhiteColor,
  padding: `${LayoutStylization.paddingY} ${LayoutStylization.paddingX}`,
}))

export const HorizontalScrollContainer = styledMUI(Box)(() => ({
  width: '100vw',
  backgroundColor: Color.strongBlackColor,
  marginBottom: '5.5rem',
  overflowX: 'auto',
}))