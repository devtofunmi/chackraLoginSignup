import { Box, Button, Flex, Text, Avatar, AvatarBadge } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EditProfile from "../components/EditProfile";
import NewPostModal from "../components/NewPostModal";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return (
    <>
      <Flex
        align-items="center"
        justify-contents="center"
        w={"100%"}
        m="auto"
        flexDirection="column"
      >
        <Box>
          <Flex
            spacing={4}
            marginTop={5}
            justifyContent={"flex-end"}
            gap={5}
            mr={2}
          >
            <Avatar>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
            <NewPostModal />
            <EditProfile />
          </Flex>

          <Box width={"50%"} m="auto">
            <Text
              color="blue.500"
              fontSize={50}
              textAlign="center"
              fontFamily="sans-serif"
            >
              Profile
            </Text>
            <Text
              color="blue.500"
              fontSize={25}
              textAlign="center"
              fontFamily="sans-serif"
            >
              Display Name:{userInfo.displayName}
            </Text>
            <Text
              color="blue.500"
              fontSize={25}
              textAlign="center"
              fontFamily="sans-serif"
            >
              User Name:{userInfo.userName}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
