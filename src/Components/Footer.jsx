import React from 'react'
import {Box,Stack,VStack,HStack,Heading, Button,Input,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'10'} p={'10'} color={'white'}>

    <Stack direction={['column','row']}>
     

    <VStack w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}>Subscribe to get Updates
        </Heading>

        <HStack borderBottom={'2px solid white'}>
        <Input placeholder='Enter Email Here...'
            border={'none'}
            borderRadius={'none'}
            outline={'none'}
            focusBorderColor='none'
        />
            <Button 
            p={'0'}
            color={'purple'}
            variant={'ghost'}
            borderRadius={'0px 20px 20px 0'}>
                <AiOutlineSend/>
            </Button>
        </HStack>
    </VStack>


    <VStack w={'full'}
    borderLeft={['none','1px solid white']}
    borderRight={['none','1px solid white']}>
    
    <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
    <Text textAlign={'center'}>All right received</Text>
    </VStack>


    <VStack w={'full'}>
    <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
    <Button variant={'link'} colorScheme='white'>Youtube</Button>
    <Button variant={'link'} colorScheme='white'>Instagram</Button>
    <Button variant={'link'} colorScheme='white'>Github</Button>
    </VStack>


    </Stack>
    </Box>
  )
}

export default Footer
