import {
  HouseLocal,
  HousePrice,
  Image,
  ImageContainer,
  InfoImagesContainer,
  TitleOfHouseForSale,
} from "./stylization";

import { Stack } from "@mui/material";

type DataImages = {
  ImageURL: string;
  Alt: string;
  Local: string;
  Price: string;
}

function ImagesOfPlacesToLive({ ImageURL, Alt, Local, Price }: DataImages) {
  return (
    <ImageContainer
      display='flex'
      justifyContent={{xs: 'center', md: 'normal'}}
      width={{md: 'auto'}}
      minWidth={{xs: '40%', md: 'auto'}}
    >
      <Image
        ImageURL={ImageURL}
        Alt={Alt}
      />

      <InfoImagesContainer>
        <ul>
          <li>
            <TitleOfHouseForSale
              variant="h5"
            >
              The grand estate
            </TitleOfHouseForSale>
          </li>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <li>
              <HouseLocal
                variant="h6"
              >
                {Local}
              </HouseLocal>
            </li>

            <li>
              <HousePrice
                variant="h6"
              >
                {Price}
              </HousePrice>
            </li>
          </Stack>
        </ul>
      </InfoImagesContainer>
    </ImageContainer>
  )
}

export default ImagesOfPlacesToLive