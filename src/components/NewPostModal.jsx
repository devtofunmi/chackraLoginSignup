import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Text,
  Textarea,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const NewPostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalRef = useRef();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const toast = useToast();

  useEffect(() => {
    if (!localStorage.getItem("userPosts")) {
      localStorage.setItem("userPosts", JSON.stringify([]));
    } else {
      setUserPosts(localStorage.getItem("userPosts"));
    }
  }, []);

  function handleForm() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!postTitle) {
        toast({
          description: "enter post title ",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else if (!postContent) {
        toast({
          description: "enter post content ",
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

        const newPost = {
          postTitle,
          postContent,
        };
        localStorage.setItem(
          "userPosts",
          JSON.stringify([...userPosts, newPost])
        );
      }
    }, 2000);
  }

  return (
    <>
      <Button
        backgroundColor="blue.500"
        color="white"
        onClick={onOpen}
        ref={modalRef}
      >
        Add New Post
      </Button>

      <Modal initialFocusRef={modalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="post title"
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
            ></Input>
            <Textarea
              marginTop={5}
              placeholder="enter post contents"
              onChange={(e) => {
                setPostContent(e.target.value);
              }}
            ></Textarea>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              disabled={loading}
              onClick={handleForm}
            >
              {loading ? "loading" : "Save Post"}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPostModal;
