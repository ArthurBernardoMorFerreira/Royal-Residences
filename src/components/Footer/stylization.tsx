import styled from "styled-components";
import { styled as styledMUI } from "@mui/material/styles";

import LayoutStylization from './../../assets/Layout/index';
import { Color } from "../../assets/Color";
import { Box, Typography } from "@mui/material";

export const Section = styled.section`
  padding: 6rem ${LayoutStylization.paddingX} ${LayoutStylization.paddingY} ${LayoutStylization.paddingX};
  background: ${Color.strongBlackColor};
`

export const Logo = styled.img`
  height: 7rem;
  width: 5rem;
`

export const WatchOutMessage = styledMUI(Typography)(() => ({
  color: `${Color.clearWhiteColor}`,
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '700',
}))

export const Line = styled.hr`
  height: 18rem;
  width: 0.2rem;
  background: ${Color.strongBrightWhiteColor};
  border: none;
`

export const LineVertical = styled.hr`
  height: 0.2rem;
  width: 70rem;
  background: ${Color.strongBrightWhiteColor};
  border: none;
  transform: rotate(180deg);
`

export const LineTitle = styled.hr`
  height: 1.7rem;
  width: 0.2rem;
  background: ${Color.strongSecundaryColor};
  border: none;
  border-radius: 20px;
  margin-right: 7px;
`

export const TextTitle = styledMUI(Typography)(() => ({
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '700',
  textTransform: 'capitalize',
  color: `${Color.defaultWhiteColor}`
}))

export const Text = styledMUI(Typography)(() => ({
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '400',
  textTransform: 'capitalize',
  color: `${Color.clearWhiteColor}`,
}))

export const SocialMediaContainer = styledMUI(Box)(() => ({
  display: 'flex',
  gap: '0 0.70rem'
}))