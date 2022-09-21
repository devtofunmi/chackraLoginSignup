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
} from "@chakra-ui/react";
import { useRef } from "react";

const NewPostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalRef = useRef();
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
            <Text>Hiiii</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPostModal;
