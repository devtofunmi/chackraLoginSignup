import {
  FormControl,
  Input,
  Flex,
  Box,
  Text,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  function generateOtp() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  const handleClick = () => setShow(!show);
  const showError = (m) => {
    toast({
      description: m,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  function handleForm() {
    setLoading(true);
    setTimeout(() => {
      if (!displayName) {
        showError("enter the display name");
      } else if (displayName.length < 2) {
        showError("display name should be more than two ");
      } else if (userName.length < 2) {
        showError("username should be more than two");
      } else if (userName.length > 12) {
        showError("username should be less than twelve");
      } else if (!userName) {
        showError("enter username");
      } else if (!password) {
        showError("enter password");
      } else if (password.length > 6) {
        showError("password should not be more than 6");
      } else if (password != confirmPassword) {
        showError("password is incorrect");
      } else {
        setLoading(false);
        navigate("/otp");

        toast({
          description: "Sign Up successful",
          status: "success",
          duration: 2000,
          isClosable: false,
        });

        const userInfo = {
          displayName,
          userName,
          password,
          OTP: generateOtp(),
          isVerrified: false,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(JSON.stringify(userInfo));
      }
      setLoading(false);
    }, 2000);
  }

  return (
    <Flex
      align-items="center"
      justify-contents="cener"
      w={"50%"}
      m="auto"
      flexDirection="column"
    >
      <Box>
        <Text
          color="blue.500"
          fontSize={50}
          textAlign="center"
          fontFamily="sans-serif"
        >
          SignUp
        </Text>
        <FormControl>
          <Input
            variant="filled"
            placeholder="Display Name"
            my={5}
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
          <Input
            variant="filled"
            placeholder="UserName"
            my={5}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Input
            variant="filled"
            placeholder="Confirm Password"
            my={5}
            type={show ? "text" : "password"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Button backgroundColor="blue.500" color="white" onClick={handleForm}>
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            ) : (
              "continue"
            )}
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default SignUp;
