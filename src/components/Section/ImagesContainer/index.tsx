import { Stack } from "@mui/material"
import ImagesOfPlacesToLive from "../ImagesOfPlacesToLive"

import HousesToLiveImagesData from "../../../assets/Image/ImagesData/HousesToLive";

function ImagesContainer() {
  return (
    <Stack
      display='flex'
      alignItems='center'
      direction={{xs: 'column', md: 'row'}}
      gap={{xs: '2rem 0', md: '0 2rem'}}
      width={{xs: '100%', md: '135rem'}}
      marginTop='70px'
    >
      {
        HousesToLiveImagesData.map((image) => {
          return (
            <ImagesOfPlacesToLive
              key={image.ImageURL}
              ImageURL={image.ImageURL}
              Alt={image.Alt}
              Local={image.Local}
              Price={image.Price}
            />
          )
        })
      }
    </Stack>
  )
}

export default ImagesContainer