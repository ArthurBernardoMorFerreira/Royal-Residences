import { useMediaQuery, useTheme } from '@mui/material';
import {
  Section,
  SalesHouseRectangle,
  Title,
  HorizontalScrollContainer,
} from './stylization'

import ImagesHouseSales from '../../../functions/ImagesHouseSales';

import Stack from '@mui/material/Stack';

import LayoutStylization from '../../../assets/Layout';

function RecentHouseSales() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Section>
      <SalesHouseRectangle>
        <Title
          variant={isMediumScreen ? 'h3' : 'h4'}
          padding={{xs: '2rem 0', md: LayoutStylization.paddingX}}
        >
          Recent House Sales
        </Title>

        <HorizontalScrollContainer
          padding={{xs: '2rem 0', md: `${LayoutStylization.paddingY} ${LayoutStylization.paddingX}`}}
        >
          <Stack
            direction={{xs: 'column', md: 'row'}}
            alignItems='center'
            width={{xs:'100vw', md: '115rem'}}
            spacing={3}
            padding='0.4rem'
          >
            <ImagesHouseSales />
          </Stack>
        </HorizontalScrollContainer>
      </SalesHouseRectangle>
    </Section>
  )
}

export default RecentHouseSales