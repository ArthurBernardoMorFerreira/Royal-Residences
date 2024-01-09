import styled from "styled-components"
import { Color } from "../../assets/Color"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type propsType = any

function Line({ height, width, color, margin, padding, transform }: propsType) {
  const Hr = styled.hr`
    height: ${height};
    width: ${width};
    color: ${color};
    margin: ${margin};
    padding: ${padding};
    border-radius: 10px;
    border: 3px solid ${Color.strongSecundaryColor};
    transform: rotate(${transform}deg);
  `
  return (
    <Hr />
  )
}


export default Line