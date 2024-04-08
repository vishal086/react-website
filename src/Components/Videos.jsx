import React, { useState } from 'react'
import {Stack,VStack,HStack,Text,Box,Container,Heading,Button} from '@chakra-ui/react'


function Videos() {
  const  videoArr = [
    "https://www.pexels.com/video/seo-web-design-search-google-4549682/",
    "https://www.pexels.com/video/person-browsing-on-her-phone-3252145/",
    "https://www.pexels.com/video/woman-working-with-laptop-inside-a-car-3048179/",
    "https://www.pexels.com/video/man-woman-bed-computer-4114358/",
    "https://www.pexels.com/video/a-person-looking-at-download-pictures-on-the-internet-using-a-smartphone-3625773/",
    "https://www.pexels.com/video/hands-laptop-macbook-pro-typing-5082025/",
    "https://www.pexels.com/video/man-office-working-internet-5083562/"


  ];
  const [videoSrc,setVideoSrc] = useState(videoArr[0])
  return (
   <Stack direction={['column','row']} h={'100vh'} color={'white'}>
  <VStack w={'full'}>
   <video src={videoSrc} controls
   controlsList='nodownload'
   style={{
    width:'100%'
   }}></video>

   <VStack alignItems={'start'} p={'8'} w={'full'} overflowY={'auto'}>
    <Heading>Sample Video 1</Heading>
    <Text>This is a sample video.</Text>
   </VStack>

  </VStack>
  <VStack w={['full','xl']} alignItems={'stretch'}
  p={'8'}
  overflowY={'auto'}>
   
   {
     videoArr.map((item,index)=>(
      <Button variant={'ghost'} colorScheme='purple' onClick={()=> setVideoSrc(item)}>Lecture {index+1}</Button>
     ))
   }
  </VStack>
  </Stack>
)
}

export default Videos
