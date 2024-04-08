import { Button, Container, Heading, Input, VStack,Text,Avatar, HStack} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
      <Container>
           <form action="">
            <VStack alignItems={'stretch'} spacing={'8'} 
            w={['full','96']} m={'auto'} my={'16'} backgroundColor={'gray.400'} p={'5'}>
               
               <Text textAlign={'center'} fontSize={'2rem'}>Log In</Text>
               <Avatar bg={'purple.400'} alignSelf={'center'} boxSize={'32'}/>
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

               <Button colorScheme='purple' type='submit'>Log In</Button>
               

               <HStack justifyContent={'space-between'}>

                  <Button 
                  variant={'link'}>
                   <Link 
                   to={'/forgetpassword'}
                   >Forget Password?
                   </Link>
                  </Button>
               
                  <Text>
                   New User? {" "}
                    <Button variant={'link'}       colorScheme='purple'><Link to={'/register'}>Sign Up</Link></Button>
                  </Text>
               </HStack>
        
            </VStack>
           </form>
     </Container>
    </>
  )
}

export default Login
