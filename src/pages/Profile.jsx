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
      <Text
        color="blue.500"
        fontSize={40}
        textAlign="center"
        fontFamily="sans-serif"
      >
        Profile
      </Text>
      <Flex
        spacing={4}
        marginTop={5}
        justifyContent={"flex-end"}
        gap={5}
        mr={2}
      >
        <>
          <NewPostModal />
          <EditProfile />
        </>
      </Flex>
      <Flex
        align-items="center"
        justify-contents="center"
        w={"100%"}
        m="auto"
        flexDirection="column"
      >
        <Box>
          <Box width={"50%"} m="auto" marginTop={20}>
            <Flex
              justifyContent={"center"}
              direction={"column"}
              alignItems={"center"}
            >
              <Avatar size={"xl"}></Avatar>
              <Text
                color="blue.500"
                fontSize={25}
                textAlign="center"
                fontFamily="sans-serif"
              >
                {userInfo.displayName}
              </Text>
              <Text
                color="blue.500"
                fontSize={25}
                textAlign="center"
                fontFamily="sans-serif"
              >
                {userInfo.userName}
              </Text>
            </Flex>
          </Box>
          <Box marginTop={150}>
            <Text
              color="blue.500"
              fontSize={25}
              textAlign="center"
              fontFamily="sans-serif"
            >
              Post Title:{userInfo.postTitle}
            </Text>
            <Text
              color="blue.500"
              fontSize={25}
              textAlign="center"
              fontFamily="sans-serif"
            >
              Post Title:{userInfo.postContent}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
