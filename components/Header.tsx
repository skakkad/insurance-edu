import { Box, Flex, Heading, Spacer, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Box bg="red" p={4} color="white">
      <Center>
        <Heading as="h1" size="xl">
          InsuranceEDU
        </Heading>
      </Center>
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Spacer />
        <Heading as="h4" size="sm">
          State Farm
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
