import { Paper } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';

import RecentHouseSalesData from '../assets/Image/ImagesData/RecentHouseSales';

const Item = styledMUI(Paper)(() => ({
  height: '25rem',
  maxWidth: '20rem',
  borderRadius: '0.625rem',
  overflow: 'hidden',
}));

function ImagesHouseSales() {
  return (
    RecentHouseSalesData.map((image) => (
      <Item
        key={image.ImageURL}
      >
        <img
          style={{
            height: '100%',
            width: '100%',
          }}
          src={`${image.ImageURL}`}
          alt={`${image.Alt}`}
        />
      </Item>
    ))
  )
}

export default ImagesHouseSales