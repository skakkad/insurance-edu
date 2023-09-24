import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Box, Heading, VStack } from "@chakra-ui/react";
//import Header from "../components/Header"

const LookingFor = () => {
  const router = useRouter();

  const handleYesClick = () => {
    // If the user clicks "Yes," navigate to the "YesPage"
    router.push("/yesPage");
  };

  const handleNoClick = () => {
    // If the user clicks "No," navigate to the "situation"
    router.push("/situation");
  };

  return (
    <Box textAlign="center" mt={10}>
      <Heading>Do you know what type of insurance you need?</Heading>
      <VStack>
        <Button
          colorScheme="red"
          onClick={handleYesClick}
          mt={10}
          mr={10}
          mb={8}
          ml={10}
          size="lg"
        >
          Yes, I do!
        </Button>
        <Button
          colorScheme="red"
          onClick={handleNoClick}
          mt={5}
          mr={7}
          mb={5}
          ml={7}
          size="lg"
        >
          No, I need more help figuring out the best fit for me.
        </Button>
      </VStack>
    </Box>
  );
};

export default LookingFor;
