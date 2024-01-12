import { useMediaQuery, useTheme } from "@mui/material";

import { ClientImage } from "../../components/Section/Clients/stylization";
import { useChangeClientsImage } from "../../store/ChangeClientsImage";

export function ImageClient1Selected() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const { count } = useChangeClientsImage();

  return (
    <>
      {(count === 1 || count > 3) && (
        <>
          <ClientImage
            height={isLargeScreen ? '8rem' : '6.5rem'}
            width={isLargeScreen ? '8rem' : '6.5rem'}
            src='./img/Clients/Pexels Photo by The Lazy Artist Gallery.png'
            translateX='2.5rem'
          />
          <ClientImage
            height={isLargeScreen ? '9rem' : '7.5rem'}
            width={isLargeScreen ? '9rem' : '7.5rem'}
            src='./img/Clients/Pexels Photo by Daniel Xavier.png'
            zIndex='1'
          />
          <ClientImage
            height={isLargeScreen ? '8rem' : '6.5rem'}
            width={isLargeScreen ? '8rem' : '6.5rem'}
            src='./img/Clients/Pexels Photo by Andrea Piacquadio.png'
            translateX='-2.5rem'
          />
        </>
      )}
    </>
  )
}

export function ImageClient2Selected() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const { count } = useChangeClientsImage()
  
  return (
    <>
      {count === 2  && (
        <>
          <ClientImage
            height={isLargeScreen ? '8rem' : '6.5rem'}
            width={isLargeScreen ? '8rem' : '6.5rem'}
            src='./img/Clients/Pexels Photo by Daniel Xavier.png'
            translateX='2.5rem'
          />
          <ClientImage
            height={isLargeScreen ? '9rem' : '7.5rem'}
            width={isLargeScreen ? '9rem' : '7.5rem'}
            src='./img/Clients/Pexels Photo by Andrea Piacquadio.png'
            zIndex='1'
          />
          <ClientImage
            height={isLargeScreen ? '8rem' : '6.5rem'}
            width={isLargeScreen ? '8rem' : '6.5rem'}
            src='./img/Clients/Pexels Photo by The Lazy Artist Gallery.png'
            translateX='-2.5rem'
          />
        </>
      )}
    </>
  )
}

export function ImageClient3Selected() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const { count } = useChangeClientsImage()

  return (
    <>
      {(count === 3 || count < 1) && (
        <>
          <ClientImage
            height={isLargeScreen ? '8rem' : '6.5rem'}
            width={isLargeScreen ? '8rem' : '6.5rem'}
            src='./img/Clients/Pexels Photo by Andrea Piacquadio.png'
            translateX='2.5rem'
          />
          <ClientImage
            height={isLargeScreen ? '9rem' : '7.5rem'}
            width={isLargeScreen ? '9rem' : '7.5rem'}
            src='./img/Clients/Pexels Photo by The Lazy Artist Gallery.png'
            zIndex='1'
          />
          <ClientImage
            height={isLargeScreen ? '8rem' : '6.5rem'}
            width={isLargeScreen ? '8rem' : '6.5rem'}
            src='./img/Clients/Pexels Photo by Daniel Xavier.png'
            translateX='-2.5rem'
          />
        </>
      )}
    </>
  )
}