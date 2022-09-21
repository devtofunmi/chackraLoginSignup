import { FormControl, Input,Flex,Box,Text, Button,InputGroup,InputRightElement,useToast, Spinner} from '@chakra-ui/react'
import { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'


const SignUp = () => {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [correctPassword,setCorrectPassword] = useState('')
    const [correctUserName,setCorrectUsername] = useState('')

    const [loading,setLoading] = useState(false)
    

    const [show, setShow] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()


    const handleClick = () => setShow(!show)
    const showError=(m) =>{
        toast({
            description: m,
            status: 'error',
            duration: 2000,
            isClosable: true,
          })

    }
    function handleForm(){
        console.log(password, correctPassword)
        setLoading(true)
        setTimeout(() => {
            if(userName != correctUserName){
                showError('username incorrect')
         }else if(!userName){
            showError('enter username')
    
        }
         else if(!password){
             showError('enter password')
     
         }else if(password !== correctPassword){
            showError('password incorrect')

         }else{
           setLoading(false)
           navigate('/profile')


             toast({
                 description: 'Login successful',
                 status: 'success',
                 duration: 2000,
                 isClosable: true,
               })
     
           
         }
           setLoading(false)
        },2000)

}

useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('userInfo')).OTP)
    setCorrectPassword(JSON.parse(localStorage.getItem('userInfo')).password)
    setCorrectUsername(JSON.parse(localStorage.getItem('userInfo')).userName)

}, [])


  return (
    <Flex align-items='center'
          justify-contents='cener'
          w={"50%"}
          m="auto"
          flexDirection='column'>
    <Box>
        <Text color='blue.500' fontSize={50} textAlign='center' fontFamily='sans-serif'>LogIn</Text>
        <FormControl>
            
            <Input variant='filled' placeholder='UserName' my={5} onChange={(e) => {
                setUserName(e.target.value)
                }}/>

            <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        onChange={(e) => {
            setPassword(e.target.value)
        }}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
           
            <Button marginTop={5} backgroundColor='blue.500' color='white' onClick={handleForm}>{loading ? 
            
            <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='md'
             />
            : 'continue'}</Button>
        </FormControl>
    </Box>
    </Flex>
  )
}

export default SignUp
