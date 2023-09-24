import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";

const Situation = () => {
  return (
    <Box textAlign="center" mt={0}>
      <Header />
      <Heading as="h1" size="xl" mt={8} mb={8}>
        Which of the following applies to you:
      </Heading>
      <VStack spacing={8} align={"center"}>
        <Link href="/quizPage">
          <HStack alignItems={"center"}>
            <Image
              src="/aptIcon.png"
              alt="Apartment Icon"
              width={100}
              height={100}
            />
            <Button colorScheme="red" size="lg">
              I'm renting an apartment.
            </Button>
          </HStack>
        </Link>
        <Link href="/quiz/option2">
          <HStack spacing={3.5}>
            <Image src="/carIcon.png" alt="Car Icon" width={93} height={93} />
            <Button colorScheme="red" size="lg" mr={20}>
              I'm buying a car.
            </Button>
          </HStack>
        </Link>
        <Link href="/quiz/option3">
          <HStack spacing={4}>
            <Image
              src="/homeIcon.png"
              alt="House Icon"
              width={85}
              height={85}
            />
            <Button colorScheme="red" size="lg" mr={12}>
              I'm buying a house.
            </Button>
          </HStack>
        </Link>
      </VStack>
    </Box>
  );
};

export default Situation;
