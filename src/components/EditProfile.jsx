import { useRef } from "react";
import {
  InputGroup,
  InputRightElement,
  Spinner,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useToast,
  DrawerCloseButton,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";

const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleClick = () => setShow(!show);
  const btnRef = useRef();
  const [userInfo, setUserInfo] = useState({});
  const [changeUserName, setChangeUsername] = useState("");
  const [changePassword, setChangePassword] = useState("");

  const [show, setShow] = useState(false);

  function handleForm() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!changeUserName) {
        toast({
          description: "enter your new username ",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else if (!changePassword) {
        toast({
          description: "enter your new password ",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          description: "change succesful ",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        const newUserInfo = {
          ...userInfo,
          userName: changeUserName,
          password: changePassword,
        };
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
      }
    }, 2000);
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Profile</DrawerHeader>

          <DrawerBody>
            <Input
              variant="filled"
              placeholder="Change UserName"
              my={5}
              onChange={(e) => {
                setChangeUsername(e.target.value);
              }}
            />

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Change Password"
                onChange={(e) => {
                  setChangePassword(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleForm}>
              {loading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              ) : (
                "Save Changes"
              )}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditProfile;
