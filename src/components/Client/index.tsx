import { Box, styled as styledMUI } from '@mui/material'
import styled from "styled-components"

import { Color } from '../../assets/Color'

import { 
  FullNameClients,
  ClientsImageURL,
  ClientIsTheMainOne,
} from '../../assets/Image/ImagesData/ClientsImages'

type ClientsPropsSize = {
  height: string 
  width: string
  translateX?: string,
  zIndex?: string
}

type ClientsImageProps = {
  src: string
  alt?: string
}

type ClientProps = ClientsPropsSize & ClientsImageProps

function ClientImage({ src, alt }: ClientsImageProps) {
  const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 11px solid ${Color.clearWhiteColor};
  `

  return (
    <Image 
      src={src}
      alt={alt}
    />
  )
}

function Client({ height, width, translateX, zIndex, src, alt }: ClientProps) {
  const ClientContainer = styledMUI(Box)(() => ({
    height: height,
    width: width,
    borderRadius: '50%',
    border: `5px solid ${Color.clearBlackColor}`,
    overflow: 'hidden',
    transform: `translateX(${translateX})`,
    zIndex: zIndex
  }))

  return (
    <ClientContainer>
      <ClientImage
        src={src}
        alt={alt}
      />
    </ClientContainer>
  )
}

function ClientsContainer() {
  return (
    <Box
      display='flex'
      alignItems='center'
      position='absolute'
    >
      {
        ClientIsTheMainOne.IsClient1TheMainOne && (
          <>
            <>
              <Client
                height='8rem'
                width='8rem'
                src={ClientsImageURL.ClientImageURL3}
                alt={FullNameClients.FullName3}
                translateX='2.5rem'
              />

              <Client
                height='10rem'
                width='10rem'
                src={ClientsImageURL.ClientImageURL1}
                alt={FullNameClients.FullName1}
                zIndex='2'
              />

              <Client
                height='8rem'
                width='8rem'
                src={ClientsImageURL.ClientImageURL2}
                alt={FullNameClients.FullName2}
                translateX='-2.5rem'
              />
            </>
          </>
        )  
        
        ||
        
        ClientIsTheMainOne.IsClient2TheMainOne && (
          <>
            <Client
              height='8rem'
              width='8rem'
              src={ClientsImageURL.ClientImageURL1}
              alt={FullNameClients.FullName1}
              translateX='2.5rem'
            />

            <Client
              height='10rem'
              width='10rem'
              src={ClientsImageURL.ClientImageURL2}
              alt={FullNameClients.FullName2}
              zIndex='2'
            />

            <Client
              height='8rem'
              width='8rem'
              src={ClientsImageURL.ClientImageURL3}
              alt={FullNameClients.FullName3}
              translateX='-2.5rem'
            />
          </>
        )

        || ClientIsTheMainOne.IsClient3TheMainOne && (
          <>
            <>
              <Client
                height='8rem'
                width='8rem'
                src={ClientsImageURL.ClientImageURL2}
                alt={FullNameClients.FullName2}
                translateX='2.5rem'
              />

              <Client
                height='10rem'
                width='10rem'
                src={ClientsImageURL.ClientImageURL3}
                alt={FullNameClients.FullName3}
                zIndex='2'
              />

              <Client
                height='8rem'
                width='8rem'
                src={ClientsImageURL.ClientImageURL1}
                alt={FullNameClients.FullName1}
                translateX='-2.5rem'
              />
            </>
          </>
        )
      }
    </Box>
  )
}

export default ClientsContainer