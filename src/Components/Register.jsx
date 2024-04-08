import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
      <Container>
           <form action="">
            <VStack alignItems={'stretch'} spacing={'8'} 
            w={['full','96']} m={'auto'} my={'16'} backgroundColor={'gray.400'} p={'5'}>
               
               <Text textAlign={'center'} fontSize={'2rem'}>Register</Text>
               <Avatar bg={'purple.400'} alignSelf={'center'} boxSize={'32'}/>
               <Input placeholder='Username' 
                type='email'
                required
                focusBorderColor='purple.500'
               />

               <Input placeholder='Name' 
                type='email'
                required
                focusBorderColor='purple.500'
               />

               <Input placeholder='Email' 
                type='email'
                required
                focusBorderColor='purple.500'
               />

               <Input placeholder='Password' 
                type='password'
                required
                focusBorderColor='purple.500'
               />

               <Input placeholder='Confirm Password' 
                type='password'
                required
                focusBorderColor='purple.500'
               />

      
               <Button colorScheme='purple' type='submit'>Register</Button>

               <Text textAlign={'right'}>
               Already Registered? {" "}
               <Button variant={'link'}        colorScheme='purple'><Link to={'/login'}>Login</Link></Button>
             </Text>
            </VStack>
           </form>
     </Container>
    </>
  )
}

export default Register
