import styled from "styled-components"
import { Color } from "../assets/Color"

type ImageSizeProps = {
  height: string
  width: string
}

type ImagePropsData = {
  src: string
  alt?: string
  borderImage?: string
}

type ImageProps = ImageSizeProps & ImagePropsData

function PresentationImage({ height, width, src, alt }: ImageProps) {
  const Image = styled.img`
    min-height: 100%;
    min-width: 100%;
  `

  return (
    <Image
      height={height}
      width={width}
      src={src}
      alt={alt}
    />
  )
}

function MainPresentationImage({ height, width, src, alt }: ImageProps) {
  const Image = styled.img`
    position: relative;
    min-height: 100%;
    min-width: 100%;
    border: 0.7rem solid;
    border-image: linear-gradient(to right, ${Color.strongBrightWhiteColor} 50%, transparent 50%) 1;
  `

  return (
    <Image
      height={height}
      width={width}
      src={src}
      alt={alt}
    />
  )
}

export {
  PresentationImage,
  MainPresentationImage,
}