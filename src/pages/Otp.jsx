import React, { useEffect, useState } from 'react'
import { Box,Button,Flex,HStack,PinInput,PinInputField,Spinner,Text, useToast } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
const Otp = () => {

    const [subMit,setSubMit] = useState(false)
    const [pin,setPin] = useState('')
    const [correctOtp,setCorrectOtp] = useState('')
    const [userInfo,setUserInfo] = useState({})

    const toast = useToast()
    const navigate = useNavigate()

    const handleSubmit=()=>{
        setSubMit(true);
        console.log(correctOtp)
        setTimeout(() => {
            console.log(pin)
            setSubMit(false)
            if(correctOtp != pin){
                toast({
                    description: 'incorrect otp',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
            }else{
                toast({
                    description: 'otp is correct',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
        const newUserInfo = {
            ...userInfo,
            isVerrified: true
        }
        localStorage.setItem('userInfo',JSON.stringify(newUserInfo))
                  
            }
        },1500)

        navigate('/login')

    }

    useEffect(() => {
         const userInfo = JSON.parse(localStorage.getItem('userInfo'))
         setCorrectOtp(userInfo.OTP)
         setUserInfo(userInfo)

    }, [])
    
    
  return (
    <Flex  align-items='center'
           justify-contents='cener'
           w={"50%"}
           m="auto"
           flexDirection='column'>
        <Box>
            <Text color='blue.500' fontSize={50} textAlign='center' fontFamily='sans-serif'>VERIFY OTP</Text>
            <HStack>
              <PinInput otp onChange={(otp) => setPin(otp) }>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              </PinInput>
           </HStack>
           <Button marginTop={30} backgroundColor='blue.500' color='white' onClick={handleSubmit} disabled={pin < 6 || subMit}>{subMit ? 
            
            <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='md'
             />
            : 'Submit'}</Button>
        </Box>
    </Flex>
  )
}

export default Otp
