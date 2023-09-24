import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

const ZipCodeInput: React.FC<{ onSave: (zipCode: string) => void }> = ({ onSave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSave = () => {
    onSave(zipCode);
    closeModal();

    const newTab = window.open(`https://www.statefarm.com/agent/?zipCode=${zipCode}`, '_blank');

    if (newTab) {
        newTab.opener = null;
        newTab.location.rel = 'noopener noreferrer';
      }
  };

  return (
    <>
      <Button onClick={openModal}
        colorScheme="red"
      >Talk to an agent!
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Talk to an agent!</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Enter 5-digit Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleSave} mr={3}>
              Submit
            </Button>


            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ZipCodeInput;
