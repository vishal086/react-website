import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'
import { Link } from  'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
function Header() {

  const {isOpen,onOpen,onClose} = useDisclosure()
  return (
   <>
     <Button 
     zIndex={'overlay'}
     pos={'fixed'} 
     top={'2'} 
     right={'2'} 
     colorScheme='purple'
     p={'0'}
     w={'10'}
     h={'10'}
     borderRadius={'full'} 
     onClick={onOpen}>
      <BiMenuAltLeft size={20}/>
     </Button>

     <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
       <DrawerOverlay/>
         <DrawerContent>
            <DrawerCloseButton/>
             <DrawerHeader>VIDEO HUB</DrawerHeader>
             <DrawerBody>

              <VStack alignItems={'flex-start'}>

              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link  to={'/home'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link  to={'/videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link  to={'/freevideo'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link  to={'/upload'}>Upload video</Link>
              </Button> 
              </VStack>


              <HStack pos={'absolute'} bottom={'10'} left={'5'}>
                 <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                   <Link to={'/login'}>Log In</Link>
                 </Button>

                 <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                   <Link to={'/register'}>Sign Up</Link>
                 </Button>
              </HStack>
             </DrawerBody>
         </DrawerContent>
     </Drawer>
   </> 
  )   
}
 
export default Header
