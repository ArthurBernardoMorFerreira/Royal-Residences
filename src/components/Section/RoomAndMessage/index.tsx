import {
  Section,
  HousePresentationBg,
  MessagePosition,
  LineBox,
  Paragraph,
  Set1OfLines,
  Set2OfLines,
  Lines,
} from './stylization'

import Line from "../../Line";

import LayoutStylization from '../../../assets/Layout';

function RoomAndMessage() {
  return (
    <Section>
      <HousePresentationBg
        src='./img/Background Image/House Presentation Container To Buy.png'
      />
      
      <MessagePosition
        padding={{xs: '0', md: `${LayoutStylization.paddingY} ${LayoutStylization.paddingX}`}}
      >
        <Set1OfLines
          display={{xs: 'none', md: 'block'}}
        >
          <LineBox>
            <Line
              height='21.32813rem'
              margin='0 -8px 0 0'
            />

            <Line
              height='1px'
              width='21.32813rem'
              margin='0 8rem 0 0'
            />
          </LineBox>

          <Lines>
            <Line
              height='20rem'
              margin='0 -8px 0 0'
            />

            <Line
              height='1px'
              width='20.1rem'
              margin='0 8rem 0 0'
            />
          </Lines>
        </Set1OfLines>

        <Paragraph
          display={{xs: 'none', md: 'block'}}
          padding='0 2rem'
          position='absolute'
          variant='h3'
          width={{md: '84%', lg: '88%'}}
        >
          We pride ourselves on offering our clients the most 
          luxurious homes and properties on the market
        </Paragraph>
        
        <Paragraph
          display={{xs: 'flex', md: 'none'}}
          justifyContent='center'
          position='relative'
          variant='h3'
          width='100%'
        >
          Comfort
        </Paragraph>

        <Set2OfLines
          display={{xs: 'none', md: 'block'}}
        >
          <LineBox>
            <Line
              height='21.32813rem'
              margin='0 -8px 0 0'
            />

            <Line
              height='1px'
              width='21.32813rem'
              margin='0 8rem 0 0'
            />
          </LineBox>

          <Lines>
            <Line
              height='20.1rem'
              margin='0 -8px 0 0'
            />

            <Line
              height='1px'
              width='20.1rem'
              margin='0 8rem 0 0'
            />
          </Lines>
        </Set2OfLines>
      </MessagePosition>
    </Section>
  )
}

export default RoomAndMessage