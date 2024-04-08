import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import { Container,Box,Heading, Stack,Image,Text } from '@chakra-ui/react'
import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
import img5 from '../Images/5.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Style/Home.css'
function Services() {
  return (
      <Box>
          <MyCarousel/>
          <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
          <Heading textTransform={'uppercase'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
          Services
          </Heading>

          <Stack 
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={["column","row"]}>

          <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
         
           <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam eius illum dignissimos labore eveniet delectus consequatur veritatis officia ullam officiis, qui esse tenetur dolor dicta soluta saepe iste, i? Nisi temporibus veritatis laudantium inventore iusto rem, incidunt iste corrupti impedit mollitia ex commodi. Eos aliquid a laborum, usamus laudantium qui, officiis quibusdam obcaecati minima ab ea ad hic quisquam magnam sint magni vero quasi odio, reiciendis labore. Quidem, totam expedita.
           </Text>
          </Stack>

          </Container>
      </Box>
  )
}

/** Carousel Component */
const MyCarousel = () =>{
     return (
      <>
         <Carousel
          infiniteLoop
          autoPlay
          showThumbs = {false}
          showStatus = {false} 
          showArrows = {true} 
          interval={1000}>
              <Box>
                 <img src={img1} alt=""/>
                 <Heading className='carousel-text'>Watch Future</Heading>
              </Box>

              <Box>
                 <img src={img2} alt=""/>
                 <Heading className='carousel-text'>Gamming is Future</Heading>
              </Box>

              <Box>
                 <img src={img3} alt=""/>
                 <Heading className='carousel-text'>Gamming is Future</Heading>
              </Box>

              <Box>
                 <img src={img4} alt=""/>
                 <Heading className='carousel-text'>Night Life is Coll</Heading>
              </Box>
          </Carousel>

      </>
     )
}
export default Services
