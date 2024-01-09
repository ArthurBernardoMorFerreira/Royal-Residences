import { Box, Typography, styled as styledMUI } from "@mui/material";
import styled from 'styled-components';
import { Color } from "../../../assets/Color";

const Section = styled.section`
  background: ${Color.defaultBlackColor};
`;

const TitleContainer = styledMUI(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '5rem',
}))

const Title = styledMUI(Typography)(() => ({
  fontFamily: 'Glacial Indifference',
  fontStyle: 'normal',
  fontWeight: '700',
  textTransform: 'capitalize',
  color: Color.brightWhiteColor,
}))

const Line = styled.hr`
  height: 0.20rem;
  width: 10rem;
  background: ${Color.strongSecundaryColor};
  margin-top: 10px;
  border-radius: 5px;
  border: none;
`

const HorizontalScrollContainer = styledMUI(Box)(() => ({}))

export {
  Section,
  TitleContainer,
  Title,
  Line,
  HorizontalScrollContainer,
}