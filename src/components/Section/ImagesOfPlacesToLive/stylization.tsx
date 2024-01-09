import styled from "styled-components"
import { styled as styledMUI } from "@mui/material/styles"

import { Color } from "../../../assets/Color"
import { Box, Typography } from "@mui/material";

type DataImages = {
  ImageURL: string;
  Alt: string;
}

export const InfoImagesContainer = styled.section`
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`

export const TitleOfHouseForSale = styledMUI(Typography)(() => ({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '700',
  textTransform: 'capitalize',
  color: Color.defaultBlackColor,
  marginBottom: '10px',
}))

export const HouseLocal = styledMUI(Typography)(() => ({
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '400',
  textTransform: 'capitalize',
  color: Color.clearWhiteColor,
}))

export const HousePrice = styledMUI(Typography)(() => ({
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '700',
  textTransform: 'uppercase',
  color: Color.defaultBlackColor
}))

export const ImageContainer = styledMUI(Box)(() => ({
  display: 'grid',
  justifyContent: 'center',
  height: '30rem',
  background: `${Color.strongBrightWhiteColor}`,
  borderRadius: '3.125rem',
}))

export function Image({ ImageURL, Alt }: DataImages) {
  const Image = styled.img`
    height: 20rem;
    width: 90%;
    margin: 1rem;
    border-radius: 3.125rem;
  `
  return (
    <Image
      src={ImageURL}
      alt={Alt}
    />
  )
}